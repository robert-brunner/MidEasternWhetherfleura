import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const SpotEdit = ()  => {
    const [spot, assignSpot] = useState ({
        sightingName: "",
        log: "",
        logDate: "",
        logLocation: ""
    })

const {spotId} = useParams()
const navigate = useNavigate()

useEffect(() => {
    fetch(`http://localhost:8088/sightings/${spotId}`)
        .then(response => response.json())
        .then((data) => {
            assignSpot(data)
        })
}, [spotId])

const editButtonClick = (clickEvent) => {
    clickEvent.preventDefault()

    return fetch(`http://localhost:8088/sightings/${spot.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(spot)
    })
    .then(response => response.json())
    .then(() => {
        navigate("/Spotting/")
    })
}
return(
    <form className="spotForm">
        <fieldset>
            <div className="">
        <h2 className="spotForm__title">Log New Sighting</h2>
            <h3 htmlFor="Log Name">Sighting Title:</h3>
                <input
                required autoFocus
                type="text"
                className="form-control"
                placeholder="Name of sighting"
                value={spot.sightingName}
                onChange={
                    (evt)=> {
                        const copy = {...spot}
                        copy.sightingName = evt.target.value
                        assignSpot(copy)
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
                value={spot.log}
                onChange={
                    (evt)=> {
                        const copy = {...spot}
                        copy.log = evt.target.value
                        assignSpot(copy)
                    }
                } />
            </div>
            <div className="form-group">
                <h3 htmlFor="location">Location:</h3>
                <input
                required autoFocus
                type="text"
                className="form-control"
                placeholder="Brief description of Spotting"
                value={spot.logLocation}
                onChange={
                    (evt)=> {
                        const copy = {...spot}
                        copy.logLocation = evt.target.value
                        assignSpot(copy)
                    }
                } />
            </div>
        <button 
            onClick={(clickEvent)=> editButtonClick(clickEvent)}
            className="btn btn-primary">
            Submit
        </button>
        </fieldset>
    </form>
)
}