import React, { useState, useEffect } from "react";
import "./NewPost.css"
import Register from "./Register";
import { createNewPost } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";
import { getPosts } from "../api/api";
import App from "../App";

const CreateNewPost = ({ posts, setPosts }) => {

    // console.log("hyyyyyy", posts)
    // console.log("yooooooo", setPosts)

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [willDeliver, setDelivery] = useState(Boolean);
    const navigate = useNavigate();
    const sameToken = localStorage.getItem("token")


    return (
        <>
            <h1>New Post</h1>
            <form className="new-post" onSubmit={async (e) => {
                e.preventDefault();

                const result = await createNewPost(sameToken, title, description, price, location, willDeliver);


                const data = await result.data
                console.log("Show me result", result);
                // console.log("Show me data", data.posts);
                const abc = [...posts, data]
                // setPosts([...posts, data]);
                console.log("new data", abc)
                navigate('/');
            }
            }>
                <label>
                    Title:
                    <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} />
                </label>
                <label>
                    Description:
                    <input type="text" name="description" onChange={(e) => setDescription(e.target.value)} />
                </label>
                <label>
                    Price:
                    <input type="text" name="price" onChange={(e) => setPrice(e.target.value)} />
                </label>
                <label>
                    Location:
                    <input type="text" name="location" onChange={(e) => setLocation(e.target.value)} />
                </label>
                <label>
                    Willing to Deliver?
                    <input type="checkbox" name="name" onChange={(e) => setDelivery(e.target.value)} />
                </label>
                {/* <Link to="/"> */}
                <button type="submit" className="create-new-post-button">Create New Post</button>
                {/* </Link> */}

            </form>

        </>

    )



}

export default CreateNewPost; 