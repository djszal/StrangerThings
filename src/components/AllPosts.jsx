import React, {useState, useEffect} from "react"; 
import { fetchMe } from "../api/auth";
// import { deletePost } from "../api/auth";

import "./AllPosts.css";

const AllPosts = (props) => { 
// console.log('propssssss', props)
const[token,setToken] = useState(localStorage.getItem('token'))
  // const handleDelete = async () =>{

  useEffect(() => {
  const handleDelete = async (postIdToDelete) => {
      const response = await fetch(token,postIdToDelete)
  }
  
  return(
    <>

    {props.allPosts.map((post) => {
      // console.log(post);
      
      return ( 
        <div className="posts-box" key={post._id}>
            <div className="single-post" >
              <h2 className="post-title">{post.title}</h2>
              <p className="post-description">{post.description}</p>
              <p className="post-price">Price: {post.price}</p>
              <p className="post-seller">Seller: {post.author.username}</p>
              <p className="post-location">Location: {post.location}</p>
            </div>
            <div>
              <button type="submit">Message</button>
              <button type="submit">Edit</button>
              <button type="submit" onClick={() => handleDelete(post._id)}>Delete</button>
            </div>
          </div>
        );
      })
      }
      console.log(post._id);
</>
)

})
}



export default AllPosts;