import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Spot } from "./spotting";


export const SpotList =({refreshProps}) => {
    const [spots, setSpots] = useState ([])
    // const [filteredSpots, setFiltered] =useState ([])
    const navigate = useNavigate()


    const localWhetherFleuraUser = localStorage.getItem("whetherfleura_user")
    const whetherfleuraUserObject = JSON.parse(localWhetherFleuraUser)

    const getSpots = () => {
        fetch (`http://localhost:8088/sightings`)
        .then(response => response.json())
        .then((spotArray)=> {
            setSpots(spotArray)
        })
}

useEffect(
    () => {
    fetch(`http://localhost:8088/sightings`)
        .then(response => response.json())
        .then((spotArray)=> {
            setSpots(spotArray)
        })
    },[refreshProps]
)

return <>



<article className="sightings">
    {
        spots.map(
            (singleSpot) => <Spot key={singleSpot.id} 
            getSpots={getSpots}
            currentUser= {whetherfleuraUserObject}
            SpottedObject = {singleSpot} />
        )
    }
</article>
</>


}