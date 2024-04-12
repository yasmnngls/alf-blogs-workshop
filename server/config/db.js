const mongoose = require('mongoose');
const connectionString = process.env.DATABASE_URL;

const connectDb = async () => {
    try {
        await mongoose.connect(connectionString);
        
        console.log("Connection of Database: Success");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDb;