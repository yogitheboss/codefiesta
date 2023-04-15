const express = require('express')
const app = express();
require('dotenv').config();
const bodyParser = require("body-parser")
const cors = require('cors')
const connection = require('./db')


const port = process.env.PORT 

connection();  //database connection

app.use(bodyParser.urlencoded({extended: true}));
 
// Parses the text as json
app.use(bodyParser.json());

//route handling
app.use(cors()); 


app.use('/api/',require('./Routes/parking_register.js'));

app.get("/",(req,res)=>{
    res.send("Server is running ....")

})

app.listen(port,()=>{
    console.log(`server running... on http://localhost:${port}`)
})