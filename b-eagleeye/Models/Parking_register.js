const mongoose = require('mongoose');
const { Schema } = mongoose;

// for creating register schema
const registerSchema = new Schema({
    occupied: {
        type: "String",
        required: true
    },
    parkingslot_id: {
        type: String,
        required: true
    },
    car_number: {
        type: String,
        required: true
    },
    entry_time: {
        type: String,
    },
    exit_time: {
        type: String,
    }

});


// for creating register model
module.exports = mongoose.model('parking_register', registerSchema);

