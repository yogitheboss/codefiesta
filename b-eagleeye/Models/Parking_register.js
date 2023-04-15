const mongoose =require( 'mongoose');
const { Schema } = mongoose;

// for creating register schema
const registerSchema = new Schema({
    parkingslot_id:{
        type:Boolean,
        required:true
    },
    car_number: {
        type: String,
        required: true
    }
});

// for creating register model
module.exports = mongoose.model('register', registerSchema);

