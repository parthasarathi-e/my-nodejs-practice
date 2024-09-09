const GoogleStrategy = require("passport-google-oauth20");
const passport = require("passport");

passport.use(new GoogleStrategy({
    clientID:process.env.CLIENT_ID,
    clientSecret:process.env.CLIENT_SECRET,
    callbackURL:process.env.CALLBACK
},(accessToken,refreshToken,profile,done)=>{
    console.log(profile)
    done(null,profile);
}))

passport.serializeUser((profile,done)=>{
    done(numm,profile.id);
})

passport.deserializeUser((id,done)=>{
    done(null,id);
})

module.exports = passport;