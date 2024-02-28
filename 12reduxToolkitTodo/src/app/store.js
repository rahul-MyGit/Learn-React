import {configureStore} from '@reduxjs/toolkit'

// impot reducer and add it to store 
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer
})