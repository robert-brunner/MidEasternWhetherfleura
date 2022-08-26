import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sightings } from "./sightings";
import "./sightings.css"

export const SightingsList = () => {
    const [sightings, setSightings] = useState([])
    const [filteredSightings, setFiltered] = useState([])
    const navigate = useNavigate()

    const localWhetherFleuraUser = localStorage.getItem("whetherfleura_user")
    const whetherFleuraUserObject = JSON.parse(localWhetherFleuraUser)

    const getSightings =() => {
        fetch(`http://localhost:8088/Sightings`)
            .then(response => response.json())
            .then((sightingArray)=> {
                setSightings(sightingArray)
            })
    }
    useEffect(
        () => {
        fetch(`http://localhost:8088/Sightings`)
            .then(response => response.json())
            .then((sightingArray)=> {
                setSightings(sightingArray)
            })
        },[]
    )

    useEffect(
        ()=> {
            const mySightings = sightings.filter(sighting => sighting.userId === whetherFleuraUserObject.id)
                setFiltered(mySightings)
        },
        [sightings]
    )

    return <>
    {/* {
        <button onClick={() => navigate("/Sightings")}>New Sighting</button>
            

    } */}
    <sighting className="sightings">
        {
            filteredSightings.map(
                (sighting) => <Sightings key={sighting.id}
                getSightings={getSightings}
                currentUser= {whetherFleuraUserObject}
                WhetherfleuraObject = {sighting} />
            )
        }
    </sighting>
    </>
}