import { TodoEntity } from "../@types/todo"
import {create} from "zustand"

export type Store = {
    todos: TodoEntity[],
    newTodo: string,
    addTodo: () => void,
    setNewTodo: (text:string) => void,
    setEditTodo: (text: string) => void
    editNewTodo?: (id:number, value: string) => void 
    handleDelete: (id:number) => void,
    handleIsComplete: (id:number) => void,
    editTodo: string,
    handleEdit: (id: number) => void,
    handleEditTodo: (id:number, newTodo: string) => void
}

const useStore = create<Store>((set) => ({
    todos:[],
    newTodo: "",
    addTodo () {
        set(state => ({
            ...state,
            todos: [...this.todos, {id: Math.random(), name: this.newTodo, isEditing: false, isComplete: false}],
            newTodo: ""
        }))
    },
    setNewTodo (text: string) {
    set(state => ({
        ...state,
        newTodo: text,
        editTodo: this.newTodo
    }))
    },
   setEditTodo (text: string) {
     set((state) => ({
        ...state,
        
     }))
   },
   handleDelete (id:number) {
     set((state) => ({
        ...state,
        todos: this.todos.filter((todo: any) => todo.id !== id), 
     }))
   },
  
   handleIsComplete (id: number) {
         set((state) => ({
            ...state,
            todos: this.todos.map(todo => todo.id === id ? {...todo, isComplete: !todo.isComplete}: todo)
         }))
   },
   handleEdit (id: number) {
    set((state) => ({
        ...state,
        todos: this.todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing}: todo)
    }))
   },
   handleEditTodo (id:number, newTodo: string) {
        set((state) => ({
            ...state,
            todos: this.todos.map((todo) => todo.id === id ? {...todo, name: newTodo, isEditing: !todo.isEditing}: todo)
        }))
   }

})) 

export default useStore

