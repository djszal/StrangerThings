import React, {useState, useEffect} from "react"; 

import "./AllPosts.css";

const AllPosts = (props) => { 
// console.log('propssssss', props)
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
          </div>
        );
      })}
</>
)

}


    export default AllPosts;