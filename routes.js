const router = require("express").Router();
//const NewService =require("./service/new");
const {phoneValidation, userValidation} = require("./middleware/validation")
const {createOrder, findOrderByUserId, findOrderByProductId } = require('./controller/orderCon');
const {cartData} = require ('./controller/CartSchemaCon')
//router.get('/readData',readData);
//router.get("/orderProcessing",createOrder);
//router.post("/saveOrder",saveOrder);
//router.delete('/deleteData',deleteData);
//router.get('/orderfromUserID',orderfromUserID);
//router.put('/updateData/:id',updateData)
//const {cartProcess} = require("./service/CartProcess")


router.post('/order',phoneValidation,userValidation, createOrder);
// Find Order by User ID
router.get('/order/user/:userId',  findOrderByUserId);
// Find Order by Product ID
router.get('/order/product/:productId', findOrderByProductId);

// Find cart details by id
router.get('/order/history/:cartId',cartData);

// Generate Order ID
// router.get('/order/generate-id', generateOrderId);

module.exports = router