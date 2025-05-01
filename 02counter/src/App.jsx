import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setCount] = useState(15)
  var [message,setMessage] = useState('')
  var [color , setColor] = useState('')

  //let counter = 15
  var add = () => {
    console.log("Value Added");
    setMessage( "Value Added")
    setColor('green')
    setCount(count+1);
  }
  var minus = ()=>{
    if(count == 0){
      setMessage ('Value of Counter can not be less than zero  . Counter rested to 15')
      setColor('red')
      setCount(15)
    }
    else{
      console.log("Value Subtracted");
      setColor('purple')
      setMessage ( "Value Subtracted" ) 
      setCount(count-1)
    }
  }
  return (

    
    <>
      
      <h1>Vite + React</h1>
      <h2>Counter Value : {count}</h2>
      <button
      onClick={add}
      > Add 1 </button>
      <br />
      <button
      onClick={minus}
      >Subtract 1</button>
      <h4 id='count'>Value of Counter is : {count}</h4>
      {message && <p style={{ color: color }}>{message}</p>}
    </>
  )
}

export default App
