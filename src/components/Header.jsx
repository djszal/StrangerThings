import React, {useState, useEffect} from "react";
import { Link, Route, Routes, Outlet, BrowserRouter } from 'react-router-dom';
import Register from "./Login";


import "./Header.css";
import AllPosts from "./AllPosts";


const Header = () => {

    return (
        <div className="header">
            <h3>Stranger's Things</h3>
            <div className="navbar">
                <Link to={'/posts'} className="nav-links">Posts</Link>
                <Link to={'/profile'} className="nav-links">Profile</Link>
                <Link to={'/login'} className="nav-links">Login</Link>
<<<<<<< HEAD
                <h1>Hi it's rahmatt</h1>
=======
                <h1>Hi it's dylan again</h1>
>>>>>>> 187301201276b915f50f2b2a9fa264860a12583b

            </div>


        </div>

    );
}

const ChangePage = () => {
            <Routes>
                <Route path="/posts" element={<AllPosts />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/login" element={<Register />}></Route>
            </Routes>

}


export default Header;
