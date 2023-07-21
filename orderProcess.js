const nodemailer = require('nodemailer');
const { DataBase, DataBaseByUserId, DatabaseByproductID } = require("../DBConnection/orderDB");
const {findUserbyUserId} = require('../DBConnection/UserDb')
const {findDatabyCartId} = require("../DBConnection/cartDb")

//------------------------------create Order--------------------------------------

const createdProOrder = async (order) => {
    const userId = await findUserbyUserId(order.userId);
    console.log(userId);
    const cartId = await findDatabyCartId(order.cartId)
    if(userId ){
        if(cartId){
            const NeworderId = new Date().getTime();
            const transporter = nodemailer.createTransport({
                host: 'smtp.ethereal.email',
                port: 587,
                auth: {
                    user: 'melany.schaden@ethereal.email',
                    pass: 'TJpgvyMGrs8eETmsKX'
                }
            });
        
            const info = await transporter.sendMail({
                from: '"Sandeep Gadhe" <melany.schaden@ethereal.email>', // sender address
                to: "sgadhe707@gmail.com", // list of receivers
                subject: "Confirmation Mail", // Subject line
                text: "Your order created and please do the payment", // plain text body
        
            });
        
            console.log("Message sent: %s", info.messageId);
        
            const newOrder = {
                ...order,
                NeworderId: NeworderId,
        
            }
        
            const savedOrder = await DataBase(newOrder);
            return savedOrder;
        }
        else{return "Cart Invalide"}


    }
    else{return "UsesId Invalide"}
   
}



//---------------------------------Data extracted by using userID------------------------


const DatabyUserId = async (userId) => {
    const user = await DataBaseByUserId(userId)
    return user;

}


//---------------------------------Data extracted by using ProductId-----------------------

const DatabyProductId = async (productId) => {
    const product = await DatabaseByproductID(productId)
    return product;
}

//-------------------------------Data finding from database--------------------------------





module.exports = { createdProOrder, DatabyUserId, DatabyProductId};