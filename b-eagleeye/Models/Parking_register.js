const mongoose =require( 'mongoose');
const { Schema } = mongoose;

// for creating register schema
const registerSchema = new Schema({
    occupied: {
        type: Boolean,
        required: true
    },
    parkingslot_id:{
        type: String,
        required:true
    },
    car_number: {
        type: String,
        required: true
    }
});


// for creating register model
module.exports = mongoose.model('parking_register', registerSchema);

