import React from 'react'
import { TodoEntity } from '../@types/todo'
import useStore from '../store/TodoStore';


interface Props {
    todo: TodoEntity;
    handleDelete: (id:number) => void;
    handleIsComplete: (id:number) => void;
    handleEdit: (id:number) => void
}



const Todo = ({todo,handleIsComplete, handleEdit}: Props) => {

  const store = useStore()
  
  return (
      <div>
        {todo.isComplete ? 
         <u>{todo.name}</u> : 
          <p>{todo.name}</p>
      }
        <button onClick={() => store.handleEdit(todo.id)}>Edit</button>
        <button onClick={() => store.handleDelete(todo.id)}>Delete</button>
        <button onClick={() => store.handleIsComplete(todo.id)}> {!todo.isComplete ? "Check" : "Uncheck"} </button>
      </div>
  )

}

export default Todo