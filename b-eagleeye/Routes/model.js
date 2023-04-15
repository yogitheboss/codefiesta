const express = require('express');
const router = express.Router()
const Parking_register = require('../Models/Parking_register')

router.post("/model/entry", async (req, res) => {
    // get all parking details
    try{
        console.log(req.body);
        res.json({body:req.body})
        // const {car_number,mode} = req.body
        // console.log(car_number,mode);
        // const details = await Parking_register.find({"car_number":car_number})
        // console.log(details);
        // res.json(details)
    }catch(err){
        console.log(err);
        res.json({
            success: false,
            message: "No details found"
        })
    }
    
    
})


router.post("/model/entry", async (req, res) => {
    // get all parking details
    try{
        console.log(req.body);
        res.json({body:req.body})
        
        // const {car_number,mode} = req.body
        // console.log(car_number,mode);
        // const details = await Parking_register.find({"car_number":car_number})
        // console.log(details);
        // res.json(details)
    }catch(err){
        console.log(err);
        res.json({
            success: false,
            message: "No details found"
        })
    }
    
    
})



module.exports = router;