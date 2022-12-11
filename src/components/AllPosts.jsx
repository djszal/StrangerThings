import React, { useState, useEffect } from "react";
import { deletePost } from "../api/auth";
import Message from "./Message";
import { Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import "./AllPosts.css";
import { getPosts } from "../api/api";

const AllPosts = () => {

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [updated, updatedPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [message, newMessage] = useState()
  const navigate = useNavigate();

  // console.log('posts', posts)
  // console.log("message", message)

  useEffect(() => {
    getPosts(setPosts);
  }, [updated]);
  // above. whenever 'updated' changes, the useEffect runs. 'updated' doesn't run unless the delete button is clicked.

  // console.log("test", updated)

  const handleDelete = async (postIdToDelete) => {
    // console.log('yoooo', postIdToDelete); 
    const response = await deletePost(token, postIdToDelete)
    // console.log("heyyyyyy ", response)
    if (response) {
      const newPosts = posts.filter(post => post._id !== postIdToDelete);
      updatedPosts(newPosts)
    }
  }

  const handleMessage = (postIdToMessage) => {
    // navigate(`/message/${postIdToMessage}`)
    console.log("hey")



  }



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
      {posts.map((post) => {
        // console.log(post);

        return (
          <div className="title">

            <div className="single-post" key={post._id}>
              <h2 className="post-title">{post.title}</h2>
              <p className="post-description">{post.description}</p>
              <p className="post-price">Price: {post.price}</p>
              <p className="post-seller">Seller: {post.author.username}</p>
              <p className="post-location">Location: {post.location}</p>
            </div>
            <div className="post-buttons">

              {/* <Link to={`/message`} className="nav-links"><button type="submit">Message</button></Link> */}
              <button type="submit" className="message-button" onClick={(() => handleMessage(post._id))}>Message</button>
              <button type="submit" className="edit-button">Edit</button>
              <button type="submit" className="delete-button" onClick={(() => handleDelete(post._id))}>Delete</button>
            </div>
            <div className="message-box" onSubmit={async (e) => {
              try {
                e.preventDefault();
                const response = await messageUser(post.id, message)

              } catch (error) {

              }
            }}>
              <input value={message} type="password" placeholder="Type Message to Seller" onChange={(e) => newMessage(e.target.value)}></input>
              <button type="submit" className="send-message-button">Send</button>
            </div>
          </div>

        )
      })}
    </>
  )



}



export default AllPosts;