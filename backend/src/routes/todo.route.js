const express=require("express");
const router=express.Router();
const {todoList,createTask,updateTask,deleteTask}=require("../controllers/todo.controller");


router.get('/',todoList);
router.post('/post',createTask);
router.put('/put/:taskID',updateTask);
router.delete('/delete/:taskID',deleteTask);

module.exports=router;

