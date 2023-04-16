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

// route handling
app.use(cors()); 


app.use('/api/',require('./Routes/parking_register.js'));
app.use('/api/',require('./Routes/accounts.js'));
app.use('/api/',require('./Routes/model.js'));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html");
})
// app.get("/redirect",(req,res)=>{
//     // res.sendFile(__dirname+"/views/redirect.html");
//     res.redirect("http://localhost:5173/navigate/30")
// })


app.listen(port,()=>{
    console.log(`server running... on http://localhost:${port}`)
})