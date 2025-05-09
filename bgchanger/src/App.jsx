import { useState } from "react"

function App() {
  const [color, setColor] = useState('Olive')

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{background : color}}
      >
      
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2" >
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          
          <button
          onClick={()=>setColor('red')}
          className="outline-none px-4 py-1 rounded-full text-white"
          style={{background: "red"}}
          >Red</button>

          <button
          onClick={()=>setColor('green')}
          className="outline-none px-4 py-1 rounded-full text-white"
          style={{background: "green"}}
          >Green</button>

          <button
          onClick={()=>setColor('blue')}
          className="outline-none px-4 py-1 rounded-full text-white"
          style={{background: "blue"}}
          >Blue</button>

          <button
          onClick={()=>setColor('pink')}
          className="outline-none px-4 py-1 rounded-full text-black"
          style={{background: "pink"}}
          >Pink</button>

          <button
          onClick={()=>setColor('purple')}
          className="outline-none px-4 py-1 rounded-full text-white"
          style={{background: "purple"}}
          >Purple</button>

          <button
          onClick={()=>setColor('Grey')}
          className="outline-none px-4 py-1 rounded-full text-white"
          style={{background: "Grey"}}
          >Grey</button>

          <button
          onClick={()=>setColor('Lavender')}
          className="outline-none px-4 py-1 rounded-full text-black"
          style={{background: "Lavender"}}
          >Lavender</button>
          
          <button
          onClick={()=>setColor('olive')}
          className="outline-none px-4 py-1 rounded-full text-white"
          style={{background: "olive"}}
          >Olive</button>
        </div>
      </div>
    
      </div>
    </>
  )
}

export default App
