const userSchema = require ('../model/UserSchema')
const findUserbyUserId = async(userId) =>{
    try {
      const userDetails = await userSchema.findOne({ userId });
      if(userDetails){return userDetails; }
      else{return false}// Returns null if no matching user is found
    } 
    catch (error) {
      return "User not exit"
    }
  }
  module.exports = { findUserbyUserId}