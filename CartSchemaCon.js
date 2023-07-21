const {Carts} = require('../model/Cartschema');
const {cartProcess} = require('../service/CartProcess')
const cartData = async(req, res, next) => {
    try {
        const cartId =req.params.cartId;
        const Carts =await cartProcess(cartId);
        res.status(200).json(Carts);
        } catch (error) {
            console.log({error: "Data Not Found"});    
    }
}

module.exports = {cartData}