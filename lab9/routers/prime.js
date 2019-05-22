const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.render("prime/server");
});

module.exports=router;