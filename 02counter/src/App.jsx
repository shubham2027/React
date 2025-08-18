import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 20 // this will not be updated in the UI
  let [counter, setCounter] = useState(15) // this will be updated in the UI

 
  const addValue  = () =>{
    // counter += 1
    if(counter >= 20) return // to prevent counter from going above 20
    setCounter(counter + 1) // this will update the UI
  }
  const removeValue = () =>{
    // counter -= 1
    if(counter <= 0) return // to prevent counter from going below 0
    setCounter(counter - 1) // this will update the UI
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br/>
      <br/>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
