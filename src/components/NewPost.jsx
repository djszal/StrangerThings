import React, { useState } from "react";
import "./NewPost.css"


const CreateNewPost = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [delivery, setDelivery] = useState(Boolean);

console.log("title:", title)
console.log("delivery:", delivery)





    return (
        <>
        
        <h1>New Post</h1>
        <form className="new-post">
            <label> 
                Title: 
                <input type="text" name="title" onChange={(e)=>setTitle(e.target.value)}/>
            </label>
            <label> 
                Description: 
                <input type="text" name="description" onChange={(e)=>setDescription(e.target.value)}/>
            </label>
            <label> 
                Price: 
                <input type="text" name="price" onChange={(e)=>setPrice(e.target.value)}/>
            </label>
            <label> 
                Location: 
                <input type="text" name="location" onChange={(e)=>setLocation(e.target.value)}/>
            </label>
            <label> 
                Willing to Deliver? 
                <input type="checkbox" name="name" onChange={(e)=>setDelivery(e.target.value)}/>
            </label>
            <button type="submit">Create New Post</button>


        </form>
        </>

    )



}

export default CreateNewPost; 