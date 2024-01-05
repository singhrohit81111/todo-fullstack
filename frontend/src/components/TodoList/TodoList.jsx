import React, { useEffect, useState } from 'react'
import { axios } from '../../Axios';
import Task from '../Task/Task';

export default function TodoList() {
    const [tasks, setTasks] = useState([]);
    const loadTasks = async () => {
        try {
            const res = await axios.get(`/api/v1/todos`);
            setTasks(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadTasks();
    }, [])

    const deletedTask = (taskID) => {
        const tasks_After_Deletion = tasks.filter(task => { return task._id != taskID });
        setTasks(tasks_After_Deletion);
    }

    const updatedTask = (taskInfo) => {
        const updated_task__array = tasks.map(task => {
            if (task._id == taskInfo.id) return { ...task, todo: taskInfo.todo };
            return task;
        })
        setTasks([...updated_task__array])
    }
    return (
        <div>
            {tasks.map(task => {
                return <Task task={task} deletedTask={deletedTask} updatedTask={updatedTask} />
            })}
        </div>
    )
}
