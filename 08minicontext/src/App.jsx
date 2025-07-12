
import './App.css'
import Login from './assets/components/Login'
import UserContextProvider from './assets/content/UserContextProvider'
import Profile from './assets/components/Profile'
function App() {
  

  return (
    <UserContextProvider>
      <h1>React Context API</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
