const express = require("express");
const router = express.Router();
const data = require("../data");
const peopleData = data.people;

router.post('/', async(req, res) => {
    let inputData = req.body;
    if(!inputData){
        res.status(400).render('error', {
            errormessage : "You should enter a name "
        });
        return
    }
    else{
        try{
            const peopleList = await peopleData.getPersonByName(inputData.name);
            let flag = true;
            if(peopleList.length == 0){
                flag = false;
            }
            res.render('search',{title:'People Found',people: peopleList, flag: flag, personName: inputData.name});
        }catch(e){
            res.status(400).render("error", {
                errortype: '400',
                errormessage: 'Not Found'
            });
        }
    }

});
module.exports = router;