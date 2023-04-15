const mongoose =require( 'mongoose');
const { Schema } = mongoose;

// for creating account schema
const accountSchema = new Schema({
    user_name: {
        type: String,
        required: true
    },
    car_number:{
        type: String,
        required:true
    },
    amount: {
        type: Number,
        required: true
    }});

// for creating account model
module.exports = mongoose.model('account', accountSchema);

