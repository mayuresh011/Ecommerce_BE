const {saveProduct} = require('../database/product.js');
//const CryptoJs = require('crypto-js');


const productService=async (categories,subcategory,title, desc, image,color,price)=>{
    const newProduct = {
        categories,
        subcategory,
        title,
         desc,
         image,         
         color,
         price
    }

    const savedProduct = await saveProduct(newProduct);
    return savedProduct;
}

    module.exports = {productService}