import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const SightingForm = () => {
    const [sighting, update] = useState({
        sightingName: "",
        log: "",
        logDate: "",
        logLocation: ""

        // log: "",
        // logLocation: "",
        // userId: 0
    })
    const navigate = useNavigate()
    const localWhetherFleuraUser = localStorage.getItem("whetherfleura_user")
    const whetherfleuraUserObject = JSON.parse(localWhetherFleuraUser)

    const saveButtonClick = (e) => {
        e.preventDefault()
        const sightingToSendToAPI = {
            userId: whetherfleuraUserObject.id,
            sightingName: sighting.sightingName,
            log: sighting.log,
            logDate: sighting.logDate,
            logLocation: sighting.logLocation
        }
        return fetch(`http://localhost:8088/Sightings`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sightingToSendToAPI)
        })
            .then(response => response.json())
            .then(()=> {
                navigate("/Sightings")
            })
    }
    return(
        <form className="sightingForm">
            <fieldset>
                <div className="">
            <h2 className="sightingForm__title">Log New Sighting</h2>
                <h3 htmlFor="Log Name">Sighting Title:</h3>
                    <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="Name of sighting"
                    value={sighting.sightingName}
                    onChange={
                        (evt)=> {
                            const copy = {...sighting}
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
                    value={sighting.log}
                    onChange={
                        (evt)=> {
                            const copy = {...sighting}
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
                    value={sighting.logLocation}
                    onChange={
                        (evt)=> {
                            const copy = {...sighting}
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
            {/* <fieldset>
                <div className="form-group">
                    <label htmlFor="URL">URL:</label>
                    <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="Enter URL"
                    value={sighting.URL}
                    onChange={
                        (evt)=> {
                            const copy = {...sighting}
                            copy.URL = evt.target.value
                            update(copy)
                        }
                    } />
                    </div>
            </fieldset> */}
        </form>
    )
}