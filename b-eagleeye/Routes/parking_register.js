const express = require('express');
const { addnew ,get} = require('../Controllers/Parking_registerController');
const router = express.Router()

//entry 

router.get('/get_parking_register',get)
router.post('/get_parking_register', addnew)


//exit


// http://localhost:8080/api/models


// export router
module.exports = router;