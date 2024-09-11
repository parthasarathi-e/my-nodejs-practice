const socket = io();

let local;
let remote;
let peerConnection;

const rtcSettings = {
    iceServers: [{ urls: "stun.stun.l.google.com:19302" }]
}

const init = async () => {

    socket.on("signalingMessage", handleSignalingMessage)
    local = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true
    })
    offerInit();
}

const offerInit = async () => {
    await createPeerConnection();
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);

    socket.emit("signalingMessage", JSON.stringify({ type: "offer", offer }));
}

const createPeerConnection = async () => {
    peerConnection = new RTCPeerConnection(rtcSettings);

    let remote = new MediaStream();
    document.querySelector("#remoteVideo").srcObject = remote
    document.querySelector("#remoteVideo").style.display = "block";
    document.querySelector("#localVideo").classList.add("small-video");

    local.getTracks().forEach(track => {
        peerConnection.addTrack(track, local)
    })

    peerConnection.ontrack = (e) => {
        e.streams[0].getTracks().forEach(track => {
            remote.addTrack(track);
        })
    }

    peerConnection.onicecandidate = e => {
        e.candidate && socket.emit("signalingMessage", JSON.stringify({ type: "candidate", candidate: e.candidate }))
    }
}

const handleSignalingMessage = async (message)=>{
const {type,offer,answer,candidate} = JSON.parse(message);

if(type=="offer") handleOffer(offer);
if(type=="answer") handleAnswer(answer);
if(type=="candidate" && peerConnection) {
    peerConnection.addIceCandidate(candidate);
} 
}

init();