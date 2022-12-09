import React, {useState, useEffect} from "react"; 
import "./Login.css"
import { loginUser, fetchMe } from "../api/auth";


const Login = () => {
    const [usernameLogin, setUsernameLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");
    const [newToken, setToken] = useState(localStorage.getItem("token"));
    const [newUser, setUser] = useState([]);


    useEffect(() => {
        const getMe = async () => {
          const data = await fetchMe(newToken); 
        //   console.log("show me user data",data)
        setUser(data);
        // console.log(user)
        }
        if (newToken) {
        getMe();
        }
      },[newToken]);
    

    return (
        <>
        {/* <Header /> */}
        <div className="login">
            <h3 className="title">Login</h3>
            <form className="login" onSubmit={async (e)=>{
                try {
                    e.preventDefault();
                    const newToken = await loginUser(usernameLogin, passwordLogin); 
                    setToken(newToken)
                    localStorage.setItem("token", newToken);
                    // console.log("Local Storage", localStorage.getItem("token"));
                } catch (error) {
                    console.error(error);
                }
                
            }}>
                {/* (1) below are inputs for user to type in their username and password which is sent to setUsers/Passwords above and stored into username and password  */}
                <input value={usernameLogin} type="text" placeholder="username" minLength={3} onChange={(e)=>setUsernameLogin(e.target.value)}></input>
                <input value={passwordLogin} type="password" placeholder="password" minLength={3} onChange={(e)=>setPasswordLogin(e.target.value)}></input>
                <button type="submit">Login</button>
                <h3 className="welcome-back">Hello, {newUser.username}</h3>

            </form>
            
            {/* <CreateNewPost setToken={token}/> */}

        </div>
        </>
    );


}


export default Login
