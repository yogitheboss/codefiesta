const express = require('express');
const router = express.Router()
const Parking_register = require('../Models/Parking_register');
const { findParkedCar } = require('../Controllers/Parking_registerexitController');

router.post("/model/entry", async (req, res) => {
    // get all parking details
    try{
        const {car_number,mode} = req.body
        console.log(car_number,mode);
        const details = await Parking_register.find({"car_number":car_number})
        console.log(details);
        res.json(details)
    }catch(err){
        console.log(err);
        res.json({
            success: false,
            message: "No details found"
        })
    }
    
    
})



router.get("/model/exit",findParkedCar)



module.exports = router;