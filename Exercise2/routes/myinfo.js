const express=require("express");
const router=express.Router();

router.get('/', async (req, res) => {
    const myInfo = {
	name     : 'Yan Zhang',
	dob      : '3/12',
	hometown : 'ShanDong China'
    };
    res.json(myInfo);
});
module.exports=router;