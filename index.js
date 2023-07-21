const express = require('express');
const app = express();
const PORT = 8000;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const productRoutes = require('./routes/product.js');
const price = require('../EcomProduct/routes/product.js')
const payment = require('../EcomProduct/routes/product.js')


app.use(express.json());
app.use(express.urlencoded({extended : true}));



mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("connected to database");
}).catch((err)=>{
    console.log(err);
})
//app.use('/admin/inventory',productRoutes);
app.use('/user',productRoutes)
app.use('/user/price',price);
app.use('/user/payment',payment);



app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
})