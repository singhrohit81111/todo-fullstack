const mongoose=require("mongoose");
const {DB_NAME}=require("../constants");

const connectDB=async()=>{
    try {
       await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    } catch (error) {
        console.log("Error occcured while connecting to MongoDB");
    }
}

module.exports=connectDB;