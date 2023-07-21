const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const orderRoute = require("./routes.js")
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DBConnection is successful!"))
    .catch((err) => {
        console.log(err);
    });
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

//app.get("/get" , (req, res) =>{console.log("hi")})

app.use('/api', orderRoute);


app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
});