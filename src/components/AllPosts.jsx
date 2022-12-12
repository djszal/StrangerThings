import React, { useState, useEffect } from "react";
import { deletePost } from "../api/auth";
import Message from "./Message";
import "./AllPosts.css";
import { getPosts } from "../api/api";
import { Link } from "react-router-dom";

const AllPosts = () => {

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [updated, updatedPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("")
  const [postId, setPostId] = useState("")


  useEffect(() => {
    getPosts(setPosts);
  }, [updated]);

  // const handleSearch = async (search) => {
  //   const response = await getPosts()
  //   if (response) {
  //     const filterPosts = posts.filter(post => post.title.includes(search));
  //     updatedPosts(filterPosts)
  //   }
  // }


  const handleDelete = async (postIdToDelete) => {
    // console.log('yoooo', postIdToDelete); 
    const response = await deletePost(token, postIdToDelete)
    // console.log("heyyyyyy ", response)
    if (response) {
      const newPosts = posts.filter(post => post._id !== postIdToDelete);
      updatedPosts(newPosts)
    }
  }

  return (
    <>
      <div className="posts">
        <h1>Posts</h1>

        <div className="new-post-search-bar">
          <div className="search-bar">
            <input value={search} type='search' name='search' onChange={(e) => setSearch(e.target.value)} />
            <button type='submit' className="search-button">Search Posts</button>
          </div>
          <Link to="/newpost">
            <button type='submit' className="new-post-button">Create New Post</button>
          </Link>
        </div>
        <div className="message-box">
          <Message postId={postId} />
        </div>
      </div>
      {posts.map((post) => {

        return (
          <div className="post-block">
            <div className="single-post" key={post._id}>
              <h2 className="post-title">{post.title}</h2>
              <p className="post-description">{post.description}</p>
              <p className="post-price">Price: {post.price}</p>
              <p className="post-seller">Seller: {post.author.username}</p>
              <p className="post-location">Location: {post.location}</p>
            </div>
            <div className="post-buttons">
              <button type="submit" className="message-button" onClick={(() => setPostId(post._id))}>Message</button>
              <button type="submit" className="edit-button">Edit</button>
              <button type="submit" className="delete-button" onClick={(() => handleDelete(post._id))}>Delete</button>
            </div>
          </div>
        )
      })}
    </>
  )

}



export default AllPosts;