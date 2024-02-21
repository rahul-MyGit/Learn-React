import './App.css'
import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(5)

  // let counter = 5;

  const addValue = ()=>{
    // counter = counter + 1;
    // console.log("clicked", counter);
    if(counter < 20){
      setCounter(counter + 1)
    }
  }

  const removeValue = ()=>{
    if(counter > 0){
      setCounter(counter - 1);
    }
  }

  return (
    <>
     <h1>Chai or React</h1>

     <h2>Counter value: {counter}</h2>

     <button onClick={addValue}> Add value {counter}</button>

     <button onClick={removeValue}> remove value {counter}</button>
     <p>footer : {counter}</p>
    </>
  )
}

export default App
