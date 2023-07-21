const Product = require("../model/product");
//const allProducts = require("../services/productService");

const gettingProducts = async (qCategory, qSubcategory) => {

    try {
        products = await Product.find({
            category: {
                $in: [qCategory]
            }
        } && {
            subCategory: {
                $in: [qSubcategory],
            }
        }
            //res.status(200).json(products);
        )
        res.status(200).json(products);
    }

    catch (err) {
        res.status(500).json(err);
    }

}

module.exports = { gettingProducts };

