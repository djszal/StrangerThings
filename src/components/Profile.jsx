import React from "react"
import { useState, useEffect } from "react"
import { messageUser, fetchMe } from "../api/auth";
import "./Profile.css"

const Profile = ({pizza, userData}) => {
    // console.log("token", pizza)
    // const [userData, setUserData] = useState({});
    // console.log("Profile Data", userData)
    

    return (
        <>
            {Object.keys(userData).length !== 0 ?
            <h1>Welcome Back, {userData.username}</h1>
            : <h2>Please Login to View Profile</h2>}
            <h1>Messages to Me</h1>
            <p>Didn't get to this</p>
            <h1>Messages from Me</h1>
            {Object.keys(userData).length !== 0 ?
            userData.messages.map((message, index) => {
            return (
                <div className="message-block" key={index}>
                    <div className="single-message">
                        <p className="post-message">Message: {message.content}</p>
                        <p className="post-title-message">Message Sent to: {message.post.title}</p>

                    </div>
                </div>
            )}) : <p>If seeing this, refesh browser or login</p>} 
        </>
    )
}

export default Profile