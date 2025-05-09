import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards'

function App() {
  const [count, setCount] = useState(0)
  var myObj = {
    name : "Khalifa Abdul Hamid ii",
    age : 75
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>

      <Card  userName = {myObj} name = "Khalifa Abdul Hamid ii" text = 'He Held Absolute Power'/>      
      <Card name = "34th Ottoman Sultan"/> 

    </>
  )
}

export default App
