const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');

const port = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log('DB connection successfully');
}).catch(err => {
    console.log(err);
})

app.get('/', (req, res) => {
    res.send("This is online shop server.")
})

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute);


app.listen(port, () => {
    console.log("Server is running on port ", port);
})