const dotenv=require("dotenv");
const connectDB=require("./db/index")
const app=require("./app");

dotenv.config({
    path:'../.env'
})

connectDB().then(
app.listen(process.env.PORT || 8080,()=>{
    console.log(`server running successfully at ${process.env.PORT}`);
})
).catch(error=>{
console.log(`server is not running`);
})

