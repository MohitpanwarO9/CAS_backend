const asyncHandler = require('express-async-handler');
const ProfSchm = require('../models/profSchema');

const createProf = asyncHandler(async (req,res)=>{
    const {name, email, password, designation, department, classes} = req.body;

    try{
        const prof = await ProfSchm.create({
            name,
            email,
            password,
            designation,
            department,
            classes
        });
        res.status(200).json(prof);
        
    }catch(err){
        console.log(err);
        res.status(400).json({message : "Professor not created"});
    }
})

module.exports = {createProf};