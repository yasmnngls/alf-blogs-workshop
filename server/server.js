require('dotenv').config();
const express = require('express');
const app = express();
const connectDb = require('./config/db');

connectDb();

app.get('/', (req, res) => {
    res.status(200).json({message: "Hello AWSCC"});
})

app.listen(8080, () => {
    console.log('Server is running in port 8080');
});