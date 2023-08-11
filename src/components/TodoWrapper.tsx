import React, { useState } from 'react'
import InputForm from "../components/InputForm"
import { TodoEntity } from '../@types/todo'
import Todo from './Todo'
import EditForm from './EditForm'
import useStore from '../store/TodoStore'

const TodoWrapper = () => {

  const store = useStore()

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState<TodoEntity[]>([])

  const handleAddTodo = () => {
    setTodos([...todos, {id: Math.random(), name: todo, isEditing: false, isComplete: false}])
  }

  const handleDelete = (id: number) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    console.log(newTodos)
    setTodos(newTodos)
  }
const handleEdit = (id:number) => {
   const newTodos = todos.map((todo: any) => todo.id === id ? {...todo, isEditing: !todo.isEditing}: todo)
   setTodos(newTodos)
}

const handleIsComplete = (id: number) => {
  const newTodos = todos.map((todo: any) => todo.id === id ? {...todo, isComplete: !todo.isComplete}: todo)
  setTodos(newTodos)
}

const handleEditTodo = (id:number, value:string) => {
  const newTodos = todos.map((todo: any) => todo.id === id ? {...todo, name: value, isEditing: !todo.isEditing}: todo)
  setTodos(newTodos)
}
  console.log(todos)
  return (
    <div>
    <InputForm handleAddTodo={handleAddTodo} todo={todo} setTodo={setTodo}/>
    {store.todos.map((todo: any, i: any) => (
        <>
        {todo.isEditing ? <EditForm todo={todo} handleEditTodo={handleEditTodo}/> : <Todo todo={todo} handleDelete={handleDelete} handleEdit={handleEdit} handleIsComplete={handleIsComplete} key={todo.id}/>
      }
        </> 
        ))}
      </div>
  )
}

export default TodoWrapper