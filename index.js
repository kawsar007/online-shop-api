const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

const port = process.env.PORT || 5000;

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log('DB connection successfully');
}).catch(err => {
    console.log(err);
})

app.get('/', (req, res) => {
    res.send("This is online shop server.")
})

app.listen(port, () => {
    console.log("Server is running on port ", port);
})