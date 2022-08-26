import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Spot } from "./spotting";


export const SpotList =() => {
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
    },[]
)
// useEffect(
//     ()=> {
//         const mySpots = spots.filter(spots => spots.userId === whetherfleuraUserObject.id)
//             setFiltered(mySpots)
//     },
//     [spots]
// )
//below is button that may be used later to make module appear on edit needs...
return <>
{/* {
    <button onClick={() => navigate("/Spotting")}>New Article</button>
        

} */}

<h1>Test</h1>
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