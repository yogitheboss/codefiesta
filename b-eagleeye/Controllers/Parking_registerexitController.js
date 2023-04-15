const Parking_register = require('../Models/Parking_register');

module.exports.findParkedCar =async (req,res)=>{


    try {
        // if details are found then send response 

        var myquery = { car_number: "HR26DK8337" };
        var newvalues = { $set: {occupied: false } };

         const plot = await Parking_register.updateOne(myquery, newvalues); 

        res.json({
            success: true,
            details: plot
        })
    } catch (err) {
        console.log(err);
        res.json({
            success: false,
            message: "No details found"
        })
    }

}
