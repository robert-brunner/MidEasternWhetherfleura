import { useNavigate } from "react-router-dom";
import { SpotEdit } from "./spottingEdit";

export const Spot = ({currentUser, getSpots, SpottedObject}) =>{

    const navigate = useNavigate()
    const deleteButton = () => {
        return <button onClick={() => {
            fetch(`http://localhost:8088/sightings/${SpottedObject.id}/`, {
                    method: "DELETE"
                })
                .then(() => {
                    getSpots()
                })
        }} className="spot__delete">Delete</button>
       
    }

    const editButton = () => {
        return <button onClick={() => {
            navigate(`/Spotting/${SpottedObject.id}/edit`)
         
        }}className = "spot__edit">Edit</button>
        // <div onClick= {()=>}></div>
    }

    return <section className ="spotting" key={`spotting--${SpottedObject.id}`}>
        <header>
            {
                currentUser.userId
                    ?`Spotting ${SpottedObject.id}`
                    : <a href={SpottedObject.sightName}></a>

            }
        </header>
        <h6 className="sTitle">{SpottedObject.sightingName}</h6>
        <section className="sLog"> {SpottedObject.log}</section>
        <section className="sLocation">Location: {SpottedObject.logLocation}</section>
        <footer>
            {
            editButton()
            }
            {
            deleteButton()
            }
        </footer>
        <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>
            
    </section>

}