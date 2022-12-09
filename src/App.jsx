import React, { useState, useEffect } from "react";
import AllPosts from "./components/AllPosts";
import Header from "./components/Header";
import "./App.css";
import { Route } from "react-router-dom";
import { getPosts } from "./api/api";
import Register from "./components/Register";
import CreateNewPost from "./components/NewPost";
import Login from "./components/Login";





const App = () => {

  const [posts, setPosts] = useState([]);



  useEffect(() => {
    getPosts(setPosts);
  }, [])





  // console.log("App Page Api ", posts)

  return (
    <>
      <Header />

      <div className="posts">
        <h1>Posts</h1>
        <div className="new-post-search-bar">
          <div className="search-bar">
            <input type='search' name='search' />
            <button type='submit' className="search-button">Search Posts</button>
          </div>
          <button type='submit' className="new-post-button">Create New Post</button>
        </div>
      </div>
      <div>
        <CreateNewPost />
        <Login />
        <Register />
        <AllPosts allPosts={posts} />

      </div>



    </>

  );


}

export default App;

/* - This exports to main.jsx. Lots of functionality to go here. useEffects, useStates, call components.  



*/
