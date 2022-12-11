import React from "react"
import { useState } from "react"

const Message = ({ props }) => {

    const { title, setTitle } = useState();


    return (
        <>
            <h1>Message</h1>

            <div className="title">
                <div className="posts-box">

                    <div className="single-post" >
                        <label>
                            Title:
                            <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} />
                        </label>
                        <label>
                            Message:
                            <input type="text" name="description" onChange={(e) => setDescription(e.target.value)} />
                        </label>
                        <button type="submit" className="send-message-button">Send Message</button>
                    </div>
                </div>
            </div>
        </>
    )


}

export default Message

// onClick={() => handleMessage(post._id)}