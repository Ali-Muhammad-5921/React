import React ,{useState,useContext} from "react";
import userContent from "../content/userContent";
import UserContext from "../content/userContent";

function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username,password})
    }

    return (
        <div>
            <h2>login</h2>
            <input type="text"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            placeholder="username" />
            <input type="text" 
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            placeholder="password" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}
export default Login;