const { productService } = require('../services/productService');
const { allProducts ,sortProduct} = require('../services/getProductsByTitle');
const {givePaymentStatus} = require('../services/paymentService');


const addProduct = async (req, res) => {  // async is must
    const categories = req.body.categories;
    const subcategory = req.body.subcategory;
    const title = req.body.title;
    const desc = req.body.desc;
    const image = req.body.image;
    const color = req.body.color;
    const price = req.body.price;
  
    const savedProduct = await productService(categories,subcategory,title, desc, image,color,price);
    res.json(savedProduct);
}

// getProductsByTitle = async (req, res) => {
//     try {
//       const { categories } = req.query;
//       const products = await getProductsByCategory(categories);
//       res.json(products);
//     } catch (error) {
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   };

// Get product by name
// const productByName = async (req, res) => {
//     try {
//         const products = await product.find({ title: req.query.title });
//         res.status(200).json(products);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// };

// Get all products
const getProducts = async (req, res) => {
    const qCategory = req.query.category;
    const qSubcategory = req.query.subcategory
    try {
          const products = await allProducts(qCategory,qSubcategory);
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err);
    }
}

    const productPrice = async(req,res) =>{
        const qprice = req.query.sort;
        const qdesc = req.query.desc;
       try {
        const products = await sortProduct(qprice,qdesc);
        res.status(200).json(products);
       } catch (err) {
        res.status(500).json(err);
       }
    }

    const createOrder = async(req,res)=>{
        const orderId = req.body.orderId
       const amount = req.body.totalAmount;
       const paymentMode = req.body.paymentMode;
       const paymentStatus = req.body.paymentStatus;
       const orderStaus  = req.body.orderStatus;
             
       try {
            const payments = await givePaymentStatus(orderId,amount,paymentMode,paymentStatus,orderStaus);
            res.status(200).json(`The Payment is ${payments.paymentStatus}`);
            
       } catch (err) {
            res.status(500).json(err);
       } 
    }

module.exports = { addProduct ,getProducts,productPrice,createOrder};