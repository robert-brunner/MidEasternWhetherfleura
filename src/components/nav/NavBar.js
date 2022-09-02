import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import "./NavBar.css"
import Main from "../Main"


export const NavBar = () => {
    const [isIn, isOut] = useState(false)
    const navigate = useNavigate()

    return (
   
        <ul className="navbar">
            <div className="button-container">
                <span className="mask">Leave-the-Hunt</span>
            <button className="bContents">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("whetherfleura_user")
                    navigate("/join-the-hunt", {replace: true})
                }}>Leave-the-Hunt</Link>
            </button>
            </div>
            <div className="button-container">
                <span className="mask">Home</span>
                <button className="bContents"><Link to= "/">Home</Link></button>
            </div>
            <div className="button-container">
                <span className="mask">About</span>
                <button className="bContents"><Link to="/About">About</Link></button>
            </div>
            <div className="button-container">
                <span className="mask">Sightings</span>
                <button className="bContents"><Link to= "/Spotting">Sightings</Link></button>
            </div>
            {/* <div className="button-container">
                <span className="mask">Store</span>
                <button className="bContents"><Link to= "/store">Store</Link></button>
            </div> */}
        </ul>

    )
}

//Im trying get the name to change when the user is logged in. 

{/* <button class="btn">
        <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
        </svg>
        <Link to= "/">Home</Link>
      </button> */}