import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { registerUser } from "../api/auth";
import { fetchMe } from "../api/auth";
import Header from "./Header"
import "./Register.css"
import CreateNewPost from "./NewPost";




const Register = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState([]);
    // (6) token stored above
    //   console.log("token here? ",token);
    // (2) username and password are stored via values entered below. 

    // grab the token from above useState and throw into getMe() below. 
    // useEffect(() => {
    //     const getMe = async () => {
    //         const data = await fetchMe(token);
    //         //   console.log("show me user data",data)
    //         setUser(data);
    //         // console.log(user)
    //     }
    //     if (token) {
    //         getMe();
    //     }
    // }, [token]);

    // (3) below logs the click (on submit) event. username and password are sent to auth.js via registerUser
    // This then waits for the api to create the token. Then it logs (setItem) the token into the local storage. 
    return (
        <>
            {/* <Header /> */}
            <div className="login">
                <h3 className="title">Register</h3>
                <form className="register" onSubmit={async (e) => {
                    try {
                        e.preventDefault();
                        // console.log('username & password', username, password);

                        const token = await registerUser(username, password);
                        localStorage.setItem("token", token);
                        // console.log("Local Storage", localStorage.getItem("token"));
                        // notice setItem vs getItem above
                        // console.log(token)
                    } catch (error) {
                        console.error(error);
                    }

                }}>
                    {/* (1) below are inputs for user to type in their username and password which is sent to setUsers/Passwords above and stored into username and password  */}
                    <input value={username} type="text" placeholder="username" minLength={3} onChange={(e) => setUsername(e.target.value)}></input>
                    <input value={password} type="password" placeholder="password" minLength={3} onChange={(e) => setPassword(e.target.value)}></input>
                    <button type="submit">Register</button>

                </form>

                {/* <CreateNewPost setToken={token}/> */}

            </div>
        </>
    );
}


export default Register;