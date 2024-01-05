const express=require("express");
const app=express();
const cors=require("cors");
const todo_Route=require("./routes/todo.route");

const allowedOrigins = [`https://delicate-starlight-df149a.netlify.app`, 'http://localhost:5173'];

app.use(cors(
    {
        origin:allowedOrigins,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
        allowedHeaders: 'Content-Type, Authorization',
    }
));
app.use(express.json());
app.use(express.urlencoded({extended:true, limit: "16Kb"}));

app.use("/api/v1/todos",todo_Route);

module.exports=app;