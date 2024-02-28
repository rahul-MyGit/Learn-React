import { useState } from 'react'
// As we have to add todo in a store so we are going to use Dispatch[which is already in react]

import { useDispatch } from "react-redux";

import {addTodo} from '../features/todo/todoSlice'
function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    //No need to write addTodoHandler functionality
    // dispatch take help of 'reducer' to store data in 'store'
    const addTodoHandler = (e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')    //to clean the input filed in UI after adding the todo in store
    } 

    

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
    <input
      type="text"
      className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2
       focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors 
       duration-200 ease-in-out"
      placeholder="Enter a Todo..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
    <button
      type="submit"
      className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
    >
      Add Todo
    </button>
    
  </form>
  )
}

export default AddTodo