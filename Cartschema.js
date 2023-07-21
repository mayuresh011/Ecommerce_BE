const mongoose = require('mongoose');

const CartSchema = mongoose.Schema({
    cartId: {
        type: String,
        //required: true
    },
    userId:{
        type:String,
        //required:true
    },
    products: [{
        _id: false,
        productName:{
            Name:String,
            //required:true
        },
        availability:{
            type:Boolean,
            required:true
        },
        productId: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },

        price: {
            type:Number,
            required:true
        }

    }],



    TotalPrice:{
        type:Number,
        required:true
    }
})

exports.CartSchema = mongoose.model("Carts", CartSchema);