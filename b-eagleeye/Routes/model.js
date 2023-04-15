const express = require('express');
const router = express.Router()
const Parking_register = require('../Models/Parking_register')

router.post("/model/entry", async (req, res) => {
    // get all parking details
    try{
        console.log(req.body);
        res.json({body:req.body})
    }catch(err){
        console.log(err);
        res.json({
            success: false,
            message: "No details found"
        })
    }
    
    
})





module.exports = router;