import React, {useState, useEffect} from "react"; 
import AllPosts from "./components/AllPosts";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";

import { getPosts } from "./api/api";





const App = () => {

  const [posts, setPosts] = useState([]);


  useEffect(() => {
    getPosts(setPosts); 
  },[])


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
      <AllPosts allPosts={posts}/>
      <Login />
    </div>
   


    </>
      
  );


}

export default App;

/* - This exports to main.jsx. Lots of functionality to go here. useEffects, useStates, call components.  



*/
