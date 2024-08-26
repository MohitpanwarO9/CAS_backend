const express = require('express')
const app = express();
const dotenv = require('dotenv').config();
const connectDb = require('./db Connection/dbConnection');

const Port  = process.env.PORT || 5000;

connectDb();
app.use(express.json());

app.use('/class',require('./Routes/classRoutes'));
app.use('/prof',require('./Routes/profRoutes'));

app.use('/',(req,res)=>{
    res.send({message: "running the college attendance server .... "});
})
app.listen(Port , ()=>{
    console.log("server is running at port no: " + Port );
})
