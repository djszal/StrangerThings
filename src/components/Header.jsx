import React, { useState, useEffect } from "react";
import { Link, Route, Routes, Outlet, BrowserRouter } from 'react-router-dom';
import Register from "./Register";


import "./Header.css";

const Header = () => {

    const [newToken, setToken] = useState(localStorage.getItem("token"));

    const logout = () => {
        localStorage.removeItem("token");
    }

    useEffect(() => {

    }, [newToken]);

    return (
        <div className="header">
            <h3>Stranger's Things</h3>
            <div className="navbar">
                <Link to={'/'} className="nav-links">Posts</Link>
                <Link to={'/profile'} className="nav-links">Profile</Link>
                {!newToken ? (
                    <Link to={'/login'} className="nav-links" >Login</Link>) : (
                    <Link to={'/login'} className="nav-links" onClickCapture={logout}>Logout</Link>)
                }
            </div>
        </div>
    );
}


export default Header;
