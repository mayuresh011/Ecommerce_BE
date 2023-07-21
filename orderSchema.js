const mongoose = require('mongoose');


const orderSchema = mongoose.Schema({
    cartId: {
        type: String,
        //required: true
    },
    products: [{
        quantity:{
        type: String,
        required:true
    },
    productId:{
        type: String,
        required:true
    }}],
   
    shippingAddress1: {
        type: String,
        required: true,
    },
    shippingAddress2: {
        type: String,
    },
    city: {
        type: String,
        required: true,
    },
    zip: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: 'Pending',
    },
    totalPrice: {
        type: Number,
    },
    userId: {
        type: String,
        required: true
    },
    dateOrdered: {
        type: Date,
        default: Date.now,
    },
    NeworderId: {
        type: String,
        required: true
    }
},{timestamps : true})



exports.Order = mongoose.model('Order', orderSchema);



