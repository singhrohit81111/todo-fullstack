import React from 'react'
import Input from '../components/Input/Input'
import Header from '../components/Header/Header'
import TodoList from '../components/TodoList/TodoList'


export default function Home() {
  return (
    <div>
        <Header/>
        <Input/>
        <TodoList/>
    </div>
  )
}
