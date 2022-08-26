import { useNavigate } from "react-router-dom";

export const Sightings = ({currentUser, getSightings, sightingObject}) => {
    
    const navigate = useNavigate()
    const deleteButton = () => {
        return <button onClick={() => {
            fetch(`http://localhost:8088/Sightings/${sightingObject.id}`, {
                    method: "DELETE"
                })
                .then(() => {
                    getSightings()
                })
        }} className="sighting__delete">Delete</button>
       
    }

    const editButton = () => {
        return <button onClick={() => {
            navigate(`Sightings/${sightingObject.id}/edit`)
         
        }}className = "sighting__edit">Edit</button>
    }

    return <section className ="sighting" key={`sighting--${sightingObject.id}`}>
        <header>
            {
                currentUser.id
                    ?`Sighting ${sightingObject.id}`
                    : <a href={sightingObject.URL} target="_blank" > {sightingObject.sightingName}</a>

            }
        </header>
        <section>{sightingObject.log}</section>
        <footer>
            {
            editButton()
            }
            {
            deleteButton()
            }
        </footer>
    </section>

}