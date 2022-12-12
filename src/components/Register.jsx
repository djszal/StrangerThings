import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { registerUser } from "../api/auth";
import { fetchMe } from "../api/auth";
import "./Register.css"

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getMe = async () => {
            const data = await fetchMe(token);
            setUser(data);
        }
        if (token) {
            getMe();
        }
    }, [token]);
    return (
        <>
            <div className="login">
                <h3 className="title">Register</h3>
                <form className="register" onSubmit={async (e) => {
                    try {
                        e.preventDefault();
                        const token = await registerUser(username, password);
                        localStorage.setItem("token", token);
                        navigate("/")
                    } catch (error) {
                        console.error(error);
                    }
                }}>
                    <input value={username} type="text" placeholder="username" minLength={3} onChange={(e) => setUsername(e.target.value)}></input>
                    <input value={password} type="password" placeholder="password" minLength={3} onChange={(e) => setPassword(e.target.value)}></input>
                    <button type="submit">Register</button>
                </form>
            </div>
        </>
    );
}


export default Register;