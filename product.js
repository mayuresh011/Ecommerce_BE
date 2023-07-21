const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    categories: {
        type : Array,
        required : true,
    },
    subcategory : {
        type : String,
        required : true,
    },
    title: {
        type: String,
        required: true,
       
     },
    desc: {
        type: String,
        required: true  
    
    },
    image: {
        type: String,
        required: true,
    },
    
   
    color: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
}, { timestamps: true });


module.exports = mongoose.model("Product", productSchema);