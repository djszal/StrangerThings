import React, { useState, useEffect } from "react";
import { Link, Route, Routes, Outlet, BrowserRouter } from 'react-router-dom';
import Register from "./Register";


import "./Header.css";
import AllPosts from "./AllPosts";


const Header = () => {

    return (
        <div className="header">
            <h3>Stranger's Things</h3>
            <div className="navbar">
                <Link to={'/'} className="nav-links">Posts</Link>
                <Link to={'/profile'} className="nav-links">Profile</Link>
                <Link to={'/login'} className="nav-links">Login</Link>
                <Link to={'/newpost'} className="nav-links">New Posts</Link>
            </div>
        

        </div>

    );
}




export default Header;
