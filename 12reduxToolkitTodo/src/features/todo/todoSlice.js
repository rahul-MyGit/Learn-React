import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}
//In context api we only do declaration here but here we also do declaration
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => { // here we'll always get these 2 things : state(give current value) action(to get other value like id)
            const todo = {
                id: nanoid(), 
                text: action.payload      //payload is a object
            }
            state.todos.push(todo)    //line 3-5 is a state
        },          
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)     // action will have the id of todo which we'll delete
        },                                                                              // we can also do an API call 

        // similarly we can make here update todo
    }
})

// can't export reducer as a slice directly like above we did. so we have to import 2 part

export const {addTodo, removeTodo} = todoSlice.actions //individually we exported, coz it'll help in components


// store need to know about this reducer, store take all list so it know who can update

export default todoSlice.reducer
