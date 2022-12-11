import React, { useState, useEffect } from "react";
import { deletePost } from "../api/auth";

import "./AllPosts.css";

const AllPosts = (props) => {
  console.log('propssssss', props)

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [updated, updatedPosts] = useState([]);


  const handleDelete = async (postIdToDelete) => {
    // console.log('yoooo', postIdToDelete); 
    const response = await deletePost(token, postIdToDelete)
    console.log("heyyyyyy ", response)
    if (response) {
      const newPosts = props.allPosts.filter(post => post._id !== postIdToDelete);
      updatedPosts(newPosts)
    }
  }

  //   useEffect(() => {

  // // if (token) {
  // handleDelete();

  // },[]);




  return (
    <>

    <div className="posts">
      <h1>Post</h1>
  
  <div className="new-post-search-bar">
    <div className="search-bar">
      <input type='search' name='search' />
      <button type='submit' className="search-button">Search Posts</button>
    </div>
    <button type='submit' className="new-post-button">Create New Post</button>
  </div>
</div>
      {props.allPosts.map((post) => {
        // console.log(post);

        return (
          <div className="title">
              <div className="posts-box" key={post._id}>

              <div className="single-post" >
                <h2 className="post-title">{post.title}</h2>
                <p className="post-description">{post.description}</p>
                <p className="post-price">Price: {post.price}</p>
                <p className="post-seller">Seller: {post.author.username}</p>
                <p className="post-location">Location: {post.location}</p>
              </div>
              <div className="post-buttons">
                <button type="submit">Message</button>
                <button type="submit">Edit</button>
                <button className="delete-button" type="submit" onClick={() => handleDelete(post._id)}>Delete</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  )

}



export default AllPosts;