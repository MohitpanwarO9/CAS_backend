const mongoose = require('mongoose');
const schema = mongoose.Schema;

const profSchema = new schema({
    name : String,
    email : String,
    password: String,
    designation : String,
    department : String,
    classes : [
        { type: schema.Types.ObjectId, ref : 'ClassSchm'}
    ],
}, { timestamps: true });

module.exports = mongoose.model('Professor', profSchema);

