const data = require("./data");

function authentication(req,res,next) {
    if(!req.session.AuthCookie){
        res.status(403).render("users/error");
        return;
    }
    next();
}

function checkAuthCookie(req,res,next){
    if(req.session.AuthCookie){
        res.redirect("/private");
        return;
    }
    next();
}

function logMessage(req, res, next){

    if(req.session.AuthCookie === undefined){
        console.log(`[${new Date().toUTCString()}]:${req.method} ${req.originalUrl} (Non-Authenticated User)`);
    }else{
        console.log(`[${new Date().toUTCString()}]:${req.method} ${req.originalUrl} (Authenticated User)`);
    }
    next();

}

module.exports = {
    authentication,
    checkAuthCookie,
    logMessage
};