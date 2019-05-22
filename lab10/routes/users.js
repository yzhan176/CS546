const express = require("express");
const router = express.Router();
const data = require("../data");
const userData = data.users;
const middleWare = require("../middleware");

router.get("/", middleWare.checkAuthCookie, async (req,res) =>{
    res.render("users/login");
});


router.post("/login", async (req,res) =>{
    try{
        let userName = req.body.username;
        let passWord = req.body.password;
        let user = await userData.login(userName,passWord);

        req.session.regenerate(function(){
            req.session.AuthCookie = user;
            res.redirect("/private");
        })
    }catch(e){
        res.render("users/login",{boo:true,error:e.toString()});
    }
});

router.get("/private",middleWare.authentication,(req,res,next) =>{
    try{
        let user = req.session.AuthCookie;
        res.render("users/private",{user:user});
    }catch(e){
        res.status(500),json({error:e});
    }
});

router.get("/logout", (req,res) =>{
    try{
        req.session.destroy(function(){
            res.clearCookie("AuthCookie");
            res.render("users/logout");
        });
    }catch(e){
        res.status(500).json({error:e});
    }
});

module.exports = router;

