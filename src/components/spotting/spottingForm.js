import { useState } from "react";
import {useNavigate} from "react-router-dom"

//set refresh props
export const SpotForm = ({setRefreshProps}) => {
    const [sight, update] = useState({
        sightingName: "",
        log: "",
        logDate: "",
        logLocation: ""
    })

const navigate = useNavigate()
const localWhetherFleuraUser = localStorage.getItem("whetherfleura_user")
const whetherfleuraUserObject = JSON.parse(localWhetherFleuraUser)

const saveButtonClick = (e) => {
    e.preventDefault()
    const spottingToSendToAPI ={
        userId: whetherfleuraUserObject.id,
        sightingName: sight.sightingName,
        log: sight.log,
        logDate: sight.logDate,
        logLocation: sight.logLocation
    }
    return fetch(`http://localhost:8088/sightings`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(spottingToSendToAPI)
    })
    .then(response => response.json())
    .then(setRefreshProps)
    .then(update({
        sightingName: "",
        log: "",
        logDate: "",
        logLocation: ""
    }))  
    // fetch (`http://localhost:8088/sightings?_expand=user`)
    // .then(response => response.json())
    // .then(messageArray => refresh())
    //I want to make reddit experience outside of the container that this is currently resting in. The above code is on the right track but a new js file and container need to be made and called. 
    // {navigate("/")}
}
return(
    
    <form className="spotForm">
        <fieldset>
            <div className="">
            <h3 htmlFor="Log Name">Sighting Title:</h3>
                <input
                required autoFocus
                type="text"
                className="form-control"
                placeholder="Name of sighting"
                value={sight.sightingName}
                onChange={
                    (evt)=> {
                        const copy = {...sight}
                        copy.sightingName = evt.target.value
                        update(copy)
                    }
                } />
            </div>
            <div className="form-group">
                <h3 htmlFor="log">Log:</h3>
                <input
                required autoFocus
                type="text"
                className="form-control"
                placeholder="Brief description of sighting"
                value={sight.log}
                onChange={
                    (evt)=> {
                        const copy = {...sight}
                        copy.log = evt.target.value
                        update(copy)
                    }
                } />
            </div>
            <div className="form-group">
                <h3 htmlFor="location">Location:</h3>
                <input
                required autoFocus
                type="text"
                className="form-control"
                placeholder="Brief description of sighting"
                value={sight.logLocation}
                onChange={
                    (evt)=> {
                        const copy = {...sight}
                        copy.logLocation = evt.target.value
                        update(copy)
                    }
                } />
            </div>
        <button 
            onClick={(clickEvent)=> saveButtonClick(clickEvent)}
            className="btn btn-primary">
            Submit
        </button>
        </fieldset>
        
    </form>
)
}