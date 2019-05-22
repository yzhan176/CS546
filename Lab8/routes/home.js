const express = require('express');
const router = express.Router();

router.get('/',async(req, res)=>{
    res.render('home',{title: "People Finder"});
});

module.exports = router;