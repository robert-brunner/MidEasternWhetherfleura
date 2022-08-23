import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import "./NavBar.css"

export const NavBar = () => {
    const [isIn, isOut] = useState(false)
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <button className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("whetherfleura_user")
                    navigate("/join-the-hunt", {replace: true})
                }}>Leave-the-Hunt</Link>
            </button>
        </ul>
    )
}

//Im trying get the name to change when the user is logged in. 