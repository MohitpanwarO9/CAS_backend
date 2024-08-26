const mongoose = require('mongoose');

const connectDb = async () => {
    const connectionString = process.env.CONNECTION_STRING;
    try{
        
        const connect = await mongoose.connect(connectionString);
        console.log(
            "Database is connected",
            connect.connection.host,
            connect.connection.name
        )
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDb;