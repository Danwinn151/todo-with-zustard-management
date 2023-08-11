import React, { useState } from 'react'
import { TodoEntity } from '../@types/todo'
import useStore from '../store/TodoStore'

interface Props {
    todo: TodoEntity,
    handleEditTodo: (id:number, value:string) => void
}



const EditForm = ({todo,handleEditTodo}: Props) => {
    const store = useStore()

    const [editValue, setEditValue] = useState(todo.name)
  return (
        <form onSubmit={(e) => {
            e.preventDefault()
            store.handleEditTodo(todo.id, editValue)
        }}>
            <input value={editValue} onChange={(e) => {
                setEditValue(e.target.value)
                }
                } placeholder='edit your task'/>
            <button onClick={() => store.handleEditTodo(todo.id, editValue)}>Edit your Task</button>
        </form>
        
  )
}

export default EditForm