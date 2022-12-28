import React from "react"
import { useState } from "react"
// import { messageUser } from "../api/auth";
import { useNavigate } from "react-router-dom";

const Message = ({ postId }) => {
console.log("messagessss", postId)
    const [content, setContent] = useState("");
    const [token, setToken] = useState(localStorage.getItem("token"));
    const navigate = useNavigate()

    return (
        <>
            <h1>Message</h1>
            <div className="message-box" >
                <form onSubmit={async (e) => {
                    try {
                        e.preventDefault();
                        const response = await messageUser(postId, content, token);
                        console.log("response", response);
                        navigate("/profile")
                    } catch (error) {
                        console.error(error);
                    }
                }}>
                    <label>
                        Message-Click 'message' button below first. Then enter message and send
                        <input value={content} type="text" name="description" onChange={(e) => setContent(e.target.value)} />
                    </label>
                    <button type="submit" className="send-message-button">Send Message</button>
                </form>
            </div>
        </>
    )
}

export default Message

