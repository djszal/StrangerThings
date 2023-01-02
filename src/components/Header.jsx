import React from "react";
import { Link } from 'react-router-dom';
import "./Header.css";
const Header = (props) => {
  const {token, setToken} = props;
    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
    }
    return (
        <div className="header">
            <h3>Stranger's Things</h3>
            <div className="navbar">
                <Link to={'/'} className="nav-links">Posts</Link>
                <Link to={'/profile'} className="nav-links">Profile</Link>
                {!token ? (
                    <Link to={'/login'} className="nav-links" >Login</Link>) : (
                    <Link to={'/login'} className="nav-links" onClickCapture={logout}>Logout</Link>)
                }
            </div>
        </div>
    );
}
export default Header;















