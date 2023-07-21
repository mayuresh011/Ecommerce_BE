const router = require("express").Router();
const {addProduct, getProducts,productPrice,createOrder} = require("../controllers/productController.js");


router.post("/add",addProduct);
//router.get('/productByTitle', productByName);
router.get('/productByCategory', getProducts);

//sort the product by price
router.get('/sortByPrice',productPrice);

router.post('/payment',createOrder);

module.exports = router;