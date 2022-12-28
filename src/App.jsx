import React, { useState, useEffect } from "react";
import AllPosts from "./components/AllPosts";
import Header from "./components/Header";
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
<<<<<<< HEAD
  const [postId, setPostId] = useState(null);


  useEffect(() => {
    getPosts(setPosts);
  }, [])

  



  // console.log("App Page Api ", posts)
=======

  useEffect(() => {
    getPosts(setPosts);
  }, []);
>>>>>>> 3f418b87f40bdc5c3c948f7ab945a7a7667416aa

  return (
    <>
      <Header />
<<<<<<< HEAD
      <div className="App">
        {/* <CreateNewPost />
        <Login />
        <Register />
        <AllPosts allPosts={posts} /> */}
        {/* <SearchBar placeholder="What are you looking for?"/> */}
=======
      <div>
>>>>>>> 3f418b87f40bdc5c3c948f7ab945a7a7667416aa
        <Routes>
          <Route exact path="/" element={<AllPosts />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/newpost" element={<CreateNewPost posts={posts} setPosts={setPosts} />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/message" element={<Message />}></Route>
        </Routes>
      </div>
    </>
  );

}

export default App;


