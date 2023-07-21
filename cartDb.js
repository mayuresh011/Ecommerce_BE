const {CartSchema} = require("../model/Cartschema")
const findDatabyCartId = async(cartId) => {
    try {
        const cartDetails = await CartSchema.findOne({ cartId :cartId });
        if(cartDetails)
          return cartDetails; // Returns null if no matching user is found
          else return false;
      } 
      catch (error) {
        console.error('Error finding user:', error);
        throw error;
      }
  

}



module.exports = {findDatabyCartId}