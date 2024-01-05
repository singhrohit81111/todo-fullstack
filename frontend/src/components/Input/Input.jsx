import React, { useState } from 'react'
import { axios } from '../../Axios';
import style from "./Input.module.css";

export default function Input() {
  const [task, setTask] = useState("");
  const handleTaskName = (e) => {
    setTask(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/api/v1/todos/post`, {
      todo: task,
    }).then(
      () => {
        setTask("");
        window.location.reload();
      });
  }
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <input type='text' value={task} onChange={handleTaskName} className={style.inputField} />
      <button>Add</button>
    </form>
  )
}
