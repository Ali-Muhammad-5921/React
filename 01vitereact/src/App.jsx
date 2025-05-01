
import Gannykajuice from "./Gannykajuice";

function App() {

  // <></> this is called fragment 

  const username = 'I Love One Piece'
  // jb hum variable ko {} ma likhty hain to issy khty hain evaluated expression
  // mtlb k javascript evalute hony k baaf ka final result likhty hain 

  return (
    <> 
      <div>

        <h1>ASLAM O ALIKUM</h1> 
        <hr />
        <h2>My Name is Ali Muhammad {username }</h2>
        <hr />
        <h3>This is my first Vite React Project</h3>
        <hr />

        <Gannykajuice/>

      </div> 
    </>
  );
}

export default App
