import React, {useState, useEffect} from "react"; 
import { Link } from 'react-router-dom';

import "./Header.css";


const Header = () => {

    return (
        <div className="header">
            <h3>Stranger's Things</h3>
            <div className="navbar">
                <Link to={'/posts'} className="nav-links">Posts</Link>
                <Link to={'/profile'} className="nav-links">Profile</Link>
                <Link to={'/login'} className="nav-links">Login</Link>


            </div>
            

        </div>

    );
}


export default Header;