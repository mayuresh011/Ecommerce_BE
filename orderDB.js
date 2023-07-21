const { Order } = require("../model/orderSchema");

const DataBaseByUserId = async(userId) => {
    try {
        const user = await Order.find({ userId:userId });
        if(user)
        return user; // Returns null if no matching user is found
      } 
      catch (error) {
        console.error('Error finding user:', error);
        throw error;
      }
  
}

const DatabaseByproductID = async(productId) => {
    try {
        const product = await Order.findOne({ productId:productId });
        return product; // Returns null if no matching user is found
      } 
      catch (error) {
        console.error('Error finding user:', error);
        throw error;
      }
  

}

const DataBase = async(order) =>{
    const schema = new Order(order);
    const savedOrder = await schema.save();
    return savedOrder;
}

module.exports ={ DataBaseByUserId, DatabaseByproductID, DataBase};