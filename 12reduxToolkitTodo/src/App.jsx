// REDUX : kind of open store, work same like context
// store , reducer, setSelector , useDispatch
// npm install @reduxjs/toolkit
// npm install react-redux
// configureStore()->createReducer()->createAction()->createSlice()->createAsyncThunk->createEntityAdapter

import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    //we can use wrapper here like context but we'll do that in main.js
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
