import React, {useState, useEffect} from "react"; 
import { Link } from 'react-router-dom';
import { fetchUser } from "../api/auth";

import "./Header.css";


const Login = () => {

    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState(""); 


    return (
        <div className="login">
            <h3>Login</h3>
            <form onSubmit={(e)=>{
                e.preventDefault();
                console.log(username, password)
            }}>
                <input value={username} type="text" placeholder="username" onChange={(e)=>setUsername(e.target.value)}></input>
                <input value={password} type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}></input>
                <button type="submit">Register</button>

            </form>
            
            

        </div>

    );
}


export default Login;