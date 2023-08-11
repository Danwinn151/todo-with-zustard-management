import React from 'react'
import { TodoEntity } from '../@types/todo'
import useStore from '../store/TodoStore'

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAddTodo: () => void
}

const InputForm = ({todo, setTodo, handleAddTodo}: Props) => {
    const store = useStore()
  return (
        <form onSubmit={(e) => {
            e.preventDefault()
            setTodo("")
        }}>
            <input value={store.newTodo} onChange={(e) => {

                store.setNewTodo(e.target.value)
                }
                } placeholder='input your task for the day'/>
            <button onClick={() => store.addTodo()}>Add your Task</button>
        </form>
        
  )
}

export default InputForm