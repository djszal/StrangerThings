import React, { useState, useEffect } from "react";
import AllPosts from "./components/AllPosts";
import Header from "./components/Header";
import {fetchMe} from "./api/auth"
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { getPosts } from "./api/api";
import Register from "./components/Register";
import CreateNewPost from "./components/NewPost";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Message from "./components/Message";



const App = () => {

  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getPosts(setPosts);
  }, []);
  

  useEffect(() => {
    if(token) {
    const getMe = async () => {
        const data = await fetchMe(token);
        setUserData(data)
    }
    getMe()
  }
    },[])

  return (
    <>
      <Header token={token} setToken={setToken}/>
      <div>
        <Routes>
          <Route exact path="/*" element={<AllPosts userData={userData}/>}></Route>
          <Route path="/login" element={<Login token={token} setToken={setToken} />}></Route>
          <Route path="/newpost" element={<CreateNewPost posts={posts} setPosts={setPosts}/>}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/profile" element={<Profile userData={userData}/>}></Route>
          <Route path="/message" element={<Message />}></Route>
        </Routes>
      </div>
    </>

  );

  }


export default App;

/* - This exports to main.jsx. Lots of functionality to go here. useEffects, useStates, call components.  



*/
