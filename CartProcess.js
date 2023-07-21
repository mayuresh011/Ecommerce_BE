//const { cartData } = require('../controller/CartSchemaCon');
const { findDatabyCartId } = require('../DBConnection/cartDb');
const { findUserbyUserId} = require("../DBConnection/UserDb.js");
const cartProcess = async (cartId) => {
    try {
        const cartDetails = await findDatabyCartId(cartId);

        if (cartDetails) {
            if (cartDetails.products.length > 0) {
                let totalProducts = 0;
                let totalPrice = 0;
                // products.availability
                cartDetails.products.forEach((product) => {
                    if (product.availability) {
                        totalProducts++;
                        totalPrice = totalPrice + product.price * product.quantity;
                    }
                });
                const allDetails = { cartDetails, TotalPrice: totalPrice }
                const userExist = await findUserbyUserId(cartDetails.userId)

                
                if (userExist == false) {
                    return "User not exit"}
                     if(userExist){
                    return {message:'User is Valid',
                        allDetails :allDetails
                    }};
                } 
            }
            else{
                return "Cart Does Not Exist"
            }
            // const allDetails = { cartDetails, TotalPrice: totalPrice }
            // return allDetails;
        }

     catch (error) {
        return res.status(500).json({
            error: "internal server error"
        })

    }
    return cartDetails;
};

module.exports = { cartProcess }

