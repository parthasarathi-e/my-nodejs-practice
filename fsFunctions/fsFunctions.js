const fs = require("node:fs");


//write file
fs.writeFile("./test.txt","Hello this is a test file for me learing the nodejs filesystem",(err)=>{
    if(err) return;
    console.log("File written successfully.");
});
//read file
fs.readFile("./test.txt", "ascii", (err, data) => {
    if (err) return;
    console.log(data);

});
//append file
fs.appendFile("./test.txt", "This data has been appended", () => {
    console.log("File appended successfully...")
});

//rename file
fs.rename("test.txt","text.txt",(err)=>{
    if(err) return;
    console.log("File renamed");
});

// delete file
fs.unlink("text.txt",(err)=>{
    if(err) return;
    console.log("File deleted");
});

// createing folder
fs.mkdir("lol",(err)=>{
    if(err) return;
    console.log("Folder created");
});

// Reading folder
fs.readdir("lol",{withFileTypes:true},(err,files)=>{
    if(err) return;
    console.log(files);
});

// deleted folder
fs.rm("lol",{recursive:true},(err)=>{
    if(err) return;
    console.log("Folder deleted");
});