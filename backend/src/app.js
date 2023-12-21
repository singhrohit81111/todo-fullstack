const express=require("express");
const app=express();
const cors=require("cors");
const todo_Route=require("./routes/todo.route")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true, limit: "16Kb"}));

app.use("/api/v1/todos",todo_Route);

module.exports=app;