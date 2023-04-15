const mongoose =require( 'mongoose');
const { Schema } = mongoose;

// for creating register schema
const userSchema = new Schema({
    entrytime: {
        type: Date,
        required: true
    },
    exittime: {
        type: Date,
        required: true
    },
    parkingslot_id:{
        type: String,
        required:true
    },
    car_number: {
        type: String,
        required: true
    },
    payment_status:{
        
    }
});


// for creating register model
module.exports = mongoose.model('User_details', userSchema);

