import React, { useState } from "react";
import "./NewPost.css"
import Register from "./Register";
import { createNewPost } from "../api/auth";
import { Link } from "react-router-dom";


const CreateNewPost = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [willDeliver, setDelivery] = useState(Boolean);

console.log("new post posts", props);

    // console.log("title:", title)
    // console.log("delivery:", willDeliver)


    // console.log("Is this token?", setToken)
    const sameToken = localStorage.getItem("token")
    // console.log("yooooooooo", sameToken)

    return (
        <>
            <h1>New Post</h1>
            <form className="new-post" onSubmit={async (e) => {
                try {
                    e.preventDefault();

                    const result = await createNewPost(sameToken, title, description, price, location, willDeliver);
                    console.log(result);


                } catch (error) {
                    console.error(error);
                }

            }}>
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
                <Link to="/">
                    <button type="submit" className="create-new-post-button">Create New Post</button>
                </Link>

            </form>

        </>

    )



}

export default CreateNewPost; 