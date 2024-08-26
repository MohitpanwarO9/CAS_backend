const mongoose = require('mongoose');
const schema = mongoose.Schema;

const classSchema = new schema({
    subject : String,
    department : String,
    semester : Number,
}, { timestamps: true });

module.exports = mongoose.model("ClassSchm" , classSchema);