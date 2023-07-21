
const { Order } = require('../model/orderSchema.js')
const {DatabyUserId, DatabyProductId, createdProOrder} = require("../service/orderProcess.js")

//-------------------------------------- Create Order--------------------------------------


const createOrder = async (req, res, next) => {
    try {
        const order = req.body;
        const savedOrder = await createdProOrder(order);
        res.status(200).json(savedOrder);
    }
    catch (err) { console.log(err); 
    }

}

//------------------------------------Find Order by User ID---------------------------------

const findOrderByUserId = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const orders = await DatabyUserId(userId);
        res.json(orders);
    } catch (error) {
        res.status(500).json(console.log(error));
    }
};

//----------------------------------Find Order by Product ID-----------------------------------

const findOrderByProductId = async (req, res, next) => {
    try {
        const productId = req.params.productId;
        const orders = await DatabyProductId(productId)
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving orders' });
    }
};

// //---------------------------Find Order History by grting all Data------------------------------

// const findOrderHisgtory = async(req, res, next) => {
//     try{
//        const history= req.body;
//        const orderHistory= await HistoryOforder(history);
//        res.json(orderHistory);
//     }catch(error){
//         res.status(500).json({error:'Data is not found'});
//     }
// }

//-----------------------------------function Export-------------------------------------------

module.exports = { createOrder, findOrderByUserId, findOrderByProductId}