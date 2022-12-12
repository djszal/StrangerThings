import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Register from "./Register";
import { fetchMe } from "../api/auth";


import "./Header.css";
import AllPosts from "./AllPosts";


const Header = () => {

    const [newToken, setToken] = useState(localStorage.getItem("token"));

    const logout = () => {
        localStorage.removeItem("token");
        // remove the token
    }
    

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
                {/* <Link to={'/newpost'} className="nav-links">New Posts</Link> */}
            </div>


        </div>

    );
}




export default Header;
