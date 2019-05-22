const express=require("express");
const router=express.Router();

router.get('/',async(req,res)=>{
    const Education=[
        {
          "schoolName": "Stevens Institute of Technology",
          "degree": "Master's degree",
          "favoriteClass": "Web Programming",
          "favoriteMemory": "In this course, the professor's teaching is wonderful. We really like the course."
        },

        {
            "schoolName": "Peking University",
            "degree": "Doctorate",
            "favoriteClass": "Stochastic Signal Analysis",
            "favoriteMemory": "There are lots of labs in this course, and I really like doing labs, because I think doing labs can make me more aware knowledge talked in the class."
        },

        {
            "schoolName": "University of Electronic Science and Technology of China",
            "degree": "Bachelor's degree",
            "favoriteClass": "Mobile Communication System",
            "favoriteMemory": "My score of final exam in this course is 97, and I got the first in this class."
        }
    ];
    res.json(Education);
});

module.exports=router;