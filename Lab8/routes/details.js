const express = require("express");
const router = express.Router();
const data = require("../data");
const peopleData = data.people;

router.get('/:id', async (req, res) => {
    try{
        // console.log("successfully enter");
        // console.log(req.params.id);
        let people= await peopleData.getPersonById(req.params.id);
        // console.log(people)
        res.render('details', {title: 'Person Found',ID : people.id, FirstName : people.firstName, LastName : people.lastName, Address : people.address, ZipCode : people.zip, Phone : people.phone, SSN : people.ssn});
    }catch(e){
        res.status(400).render("error", {
            errormessage: 'Not Found'
        });
    }
})

module.exports = router;