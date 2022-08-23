
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Chat } from "./Chat"
import "./Chat.css"
import { Message } from "./chatEdit"

export const ChatList = () => {
    const [messages, setMessages] = useState([])
    const [username, setUsername] = useState([])
    useEffect (()=>{
        fetch (`http://localhost:8088/chat?_expand=user`)
        .then(response => response.json())
        .then(messagesArray => setMessages(messagesArray))
    },
    []
    )
return<>
<h2>Chat</h2>
<div className="container">
<article className="messages">
<div className="container pt-3">
    <div className="scroller">
    {
        messages.map(
            (message) => {
                return <Message message = {message}/>
            }
        )
    }
    </div>
    </div>
    </article>
    <Chat reFresh={setMessages} />
    
    

</div>

</>
}