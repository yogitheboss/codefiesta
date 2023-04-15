const express = require('express');
const { addnew ,get} = require('../Controllers/Parking_registerController');
const { findParkedCar } = require('../Controllers/Parking_registerexitController');
const router = express.Router()

//entry 

router.get('/get_parking_register',get)
router.post('/get_parking_register', addnew)


//exit

router.get("/exit/findposition",findParkedCar)





// export router
module.exports = router;