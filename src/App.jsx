
import { useState } from 'react';
import './App.css'

function App() {
// let counter =10;

const [counter , setCounter]=useState(10)

const addvalue=() =>{

  if(counter < 20){
setCounter(counter+1)
  console.log("Button clciked",Math.random());
}
else{
  console.log("maxium value reached");
  
}
  }
  
const removevalue =()=>{
  if(counter >0){
  setCounter(counter-1)

  }
  else{
    console.log("Value cannot be negaative");
    
  }
}


  return (
    <>
  <h1>Welcome to react learning</h1>
  <h2>Counter Value:{counter}</h2>
  <button onClick={addvalue}>Add Value</button>
  <br/>
  <button onClick={removevalue}>Remove Value</button>
    </>
  )
}

export default App
