const asyncHandler = require('express-async-handler');
const ClassSchm = require('../models/classSchema');

const createClass = asyncHandler(async (req,res)=>{
    const {subject, department, semester} = req.body;
    console.log(subject,department,semester);

    try{
        const newclass = await ClassSchm.create({
            subject,
            department,
            semester
        })
        res.status(200).json(newclass);
    }catch(err){
        console.log(err);
        res.status(400).json({message : "Class not created"})
    }
})

module.exports = {createClass};