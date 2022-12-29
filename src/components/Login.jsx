import React, { useState, useEffect } from "react";
import "./Login.css"
import { loginUser, fetchMe } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = (props) => {
    const [usernameLogin, setUsernameLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");
    const {token, setToken} = props;
    const navigate = useNavigate();



    return (
        <>
            <div className="login">
                <h3 className="title">Login</h3>
                <form className="login" onSubmit={async (e) => {
                    try {
                        e.preventDefault();
                        const newToken = await loginUser(usernameLogin, passwordLogin);
                        setToken(newToken);
                        localStorage.setItem("token", newToken);
                        { newToken ? (navigate('/')) : console.log("No Token!!") };
                    } catch (error) {
                        console.error(error);
                    }
                }}>
                    <input value={usernameLogin} type="text" placeholder="username" minLength={3} onChange={(e) => setUsernameLogin(e.target.value)}></input> 
                    <input value={passwordLogin} type="password" placeholder="password" minLength={3} onChange={(e) => setPasswordLogin(e.target.value)}></input>
                    <button type="submit">Login</button>
                    <Link to="/register">Don't have an account? Register Here</Link>
                </form>
            </div>
        </>
    );
}

export default Login
