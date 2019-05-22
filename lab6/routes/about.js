const express=require("express");
const router=express.Router();

router.get('/',async(req,res)=>{
    const myInfo={
        "name": "Yan Zhang",
        "cwid": "10440738",
        "biography": "My name is Yan Zhang. I am 25 years old. My major is Computer Science and I live in Hoboken. \nMy graduate college is Stevens Intitute of Technology, and I still have one year to graduate.",
        "favoriteShows": ["Game of Thrones", "The Umbrella Academy", "The Walking Dead", "Beverly Hills, 90210", "The Order"],
        "hobbies": ["Basketball", "Reading", "Photography", "Trip", "Listening to music"]
    };
    res.json(myInfo);
});

module.exports=router;