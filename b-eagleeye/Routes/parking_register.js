const express = require('express');
const Parking_register = require('../Models/Parking_register');
const router=express.Router()


router.get('/get_parking_register',async(req,res)=>{
    // get all parking details
    const details=await Parking_register.find()
    if(details.length>0){
        // if details are found then send response 
        res.json({
            success:true,
            details:details
        })
    }
})