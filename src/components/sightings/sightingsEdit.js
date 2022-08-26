import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const SightingEdit = () => {
    const [sighting, assignSighting] = useState({
        log: "",
        logLocation: ""
    })

    const {sightingId} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:8088/sightings/${sightingId}`)
            .then(response => response.json())
            .then((data) => {
                assignSighting(data)
            })
    }, [sightingId])

    const editButtonClick = (clickEvent) => {
        clickEvent.preventDefault()

        return fetch(`http://localhost:8088/sightings/${sighting.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sighting)
        })
        .then(response => response.json())
        .then(() => {
            navigate("/")
        })
    }
    return (
        <form className="sightingForm">
            <h2 className="sightingForm__title">New Sighting</h2>
            <fieldset>
                <div className="">
                <label htmlFor="synopsis">Sighting Title:</label>
                    <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="Name of article"
                    value={article.sightingName}
                    onChange={
                        (evt)=> {
                            const copy = {...article}
                            copy.sightingName = evt.target.value
                            assignSighting(copy)
                        }
                    } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="synopsis">Synopsis:</label>
                    <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="Brief description of Sighting"
                    value={sighting.logLocation}
                    onChange={
                        (evt)=> {
                            const copy = {...sighting}
                            copy.synopsis = evt.target.value
                            assignSighting(copy)
                        }
                    } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="URL">URL:</label>
                    <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="Enter URL"
                    value={article.URL}
                    onChange={
                        (evt)=> {
                            const copy = {...article}
                            copy.URL = evt.target.value
                            assignArticle(copy)
                        }
                    } />
                    </div>
            </fieldset>
            <button 
                onClick={(clickEvent)=> editButtonClick(clickEvent)}
                className="btn btn-primary">
                Save Edits
            </button>
        </form>
    )
}