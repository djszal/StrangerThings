import React from "react"
import "./Profile.css"

const Profile = ({userData}) => {
    
    return (
        <>
            {Object.keys(userData).length !== 0 ?
            <h1>Welcome Back, {userData.username}</h1>
            : <h2>Please Login to View Profile</h2>}
            <h1>Messages to Me</h1>
            {Object.keys(userData).length !== 0 ?
            userData.messages.map((message, index) => {
                return (
                    <div className="message-block" key={index}>
                    {message.fromUser.username !== userData.username ? 
                        <div className="single-message">
                            <p className="post-message">Message: {message.content}</p>
                            <p className="post-title-message">Sender: {message.fromUser.username}</p>
                            <p className="post-title-message">Received from Post Title: {message.post.title}</p>
                        </div>
                        : ""}
                    </div>
                )}) : ''}
            <h1>Messages from Me</h1>
            {Object.keys(userData).length !== 0 ?
            userData.messages.map((message, index) => {
            return (
                <div className="message-block" key={index}>
                {message.fromUser.username === userData.username ? 
                    <div className="single-message">
                        <p className="post-message">Message: {message.content}</p>
                        <p className="post-title-message">Message Sent to Post Title: {message.post.title}</p>
                    </div>
                    : ""}
                </div>
            )}) : ''} 
        </>
    )
}

export default Profile