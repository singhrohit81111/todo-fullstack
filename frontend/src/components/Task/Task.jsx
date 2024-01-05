import React, { useState } from 'react'
import { axios } from '../../Axios';
import style from './Task.module.css';

export default function Task({ task, deletedTask, updatedTask }) {
    const [isUpdated, setIsUpdated] = useState(false);
    const [valueToBeChanged, setValueToBeChanged] = useState(task.todo)
    const handleDelete = (taskID) => {
        axios.delete(`/api/v1/todos/delete/${taskID}`);
        deletedTask(taskID)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`/api/v1/todos/put/${task._id}`, {
            todo: event.target[0].value
        })
        updatedTask({
            id: task._id,
            todo: event.target[0].value
        })
        setIsUpdated(false)
    }
    const handleChange = (e) => {
        setValueToBeChanged(e.target.value);
    }
    return (
        <div className={style.taskContainer}>
            <div className={style.task}>
                <span className={style.taskName}>{task.todo}</span>
                <div className={style.taskButtons}>
                    <button className={style.button} onClick={() => { setIsUpdated(true) }}>update</button>
                    <button className={style.button} onClick={() => { handleDelete(task._id) }}>Delete</button>
                </div>
            </div>
            {isUpdated &&
                <form onSubmit={handleSubmit} className={style.updationForm}>
                    <input type='text' value={valueToBeChanged} onChange={handleChange} id={style.updationInput} />
                    <input type='submit' value="Submit" className={style.updationSubmitButton} />
                    <button className={style.updationCancelButton} onClick={() => { setIsUpdated(false) }}>cancel</button>
                </form>
            }
        </div>
    )
}
