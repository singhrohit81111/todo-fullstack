const asyncHandler = require('../utils/asyncHandler');
const todo = require('../models/todo.model');


const todoList = asyncHandler(async (req, res, next) => {
    const todo_array = await todo.find();
    res.json([...todo_array]);
})

const createTask = asyncHandler(async (req, res, next) => {
    const todo_task =  req.body.todo;
    await todo.create({
        todo: todo_task
    })
    res.status(200).json("task created successfully")
})

const updateTask = asyncHandler(async (req, res, next) => {
    const { taskID } = req.params;
    const task_for_updation = await todo.findOne({ _id: taskID });
    if (!task_for_updation) {
        return res.status(404).json({ error: 'No task for updation' });
    }
    const updated_task = await todo.findOneAndUpdate(
        { _id: taskID },
        { $set: { todo: req.body.todo } },
        { new: true } 
    );
    res.json(updated_task);
})

const deleteTask = asyncHandler(async (req, res, next) => {
    const { taskID } = req.params;
    const task_deleted = await todo.deleteOne({ _id: taskID });
    console.log(task_deleted);
    if (task_deleted.deletedCount === 0) {
        res.status(404).json({ message: "data to found" })
    }
    res.json({ message: "data deleted successfully" })
})

module.exports = {
    todoList,
    createTask,
    updateTask,
    deleteTask
}