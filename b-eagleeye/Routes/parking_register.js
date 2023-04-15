const express = require('express');
const Parking_register = require('../Models/Parking_register');
const router = express.Router()


router.get('/get_parking_register', async (req, res) => {
    // get all parking details
    const details = await Parking_register.find()
    try {
        // if details are found then send response 
        console.log(details);
        res.json({
            success: true,
            details: details
        })
    } catch (err) {
        console.log(err);
        res.json({
            success: false,
            message: "No details found"
        })
    }
})
router.post('/get_parking_register', async (req, res) => {
    // get all parking details
    body=req.body
    const details = await Parking_register.insertMany(body)
    try {
        // if details are found then send response 
        console.log(details);
        res.json({
            success: true,
            details: details
        })
    } catch (err) {
        console.log(err);
        res.json({
            success: false,
            message: "No details found"
        })
    }
})


// export router
module.exports = router;