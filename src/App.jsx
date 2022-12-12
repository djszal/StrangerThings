import React, { useState, useEffect } from "react";
import AllPosts from "./components/AllPosts";
import Header from "./components/Header";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { getPosts } from "./api/api";
import Register from "./components/Register";
import CreateNewPost from "./components/NewPost";
import Login from "./components/Login";






const App = () => {

  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState(null);


  useEffect(() => {
    getPosts(setPosts);
  }, [])

  



  // console.log("App Page Api ", posts)

  return (
    <>
      <Header />
      <div className="App">
        {/* <CreateNewPost />
        <Login />
        <Register />
        <AllPosts allPosts={posts} /> */}
        {/* <SearchBar placeholder="What are you looking for?"/> */}
        <Routes>
          <Route exact path="/" element={<AllPosts allPosts={posts} />}></Route>
          {/* <Route path="/profile" element={<Profile />}></Route> */}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/newpost" element={<CreateNewPost allPosts={posts}/>}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </div>



    </>

  );


}

export default App;

/* - This exports to main.jsx. Lots of functionality to go here. useEffects, useStates, call components.  



*/
