import { useState } from "react"


export const Message =({message}) => {

const [isEdit, setEdit] = useState(false)
const [updateMessage, setUpdate] = useState(message)






return (
    
        isEdit
        ?
        <section className="message" key={`message--${message.id}`}>
        <form><input value ={updateMessage.contents}
        onChange={
            (evt) =>{
                const copy = { ...updateMessage }
                copy.contents = evt.target.value
                setUpdate(copy)
            }
        }
        />
            <span className="whitespace">
            {message?.user?.fullName}</span>
        </form>
    </section>
        :
    
    <section className="message" key={`${message.id}`}>
        <div onDoubleClick={()=>setEdit(true)}>{message?.user?.userId}{message.content}
            <span className="whitespace">
            {message?.user?.fullName}</span>
        </div>
    </section>

    )
}