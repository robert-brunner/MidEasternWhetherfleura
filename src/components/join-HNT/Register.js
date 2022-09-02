import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"

export const Register = (props) => {
    const [user, setUser] = useState({
        // email: "",
        // fullName: ""
        id: 0,
        fullName: "",
        email: "",
        userName: "",
        isAdmin: "no"
    })
    let navigate = useNavigate()

    const registerNewUser = () => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(createdUser => {
                if (createdUser.hasOwnProperty("id")) {
                    //sessionStorage.setItem("activeUser", user.id)
                    localStorage.setItem("whetherfleura_user", JSON.stringify({
                        id: createdUser.id
                    }))

                    navigate("/")
                }
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        return fetch(`http://localhost:8088/users?email=${user.email}`)
            .then(res => res.json())
            .then(response => {
                if (response.length > 0) {
                    // Duplicate email. No good.
                    window.alert("Account with that email address already exists")
                }
                else {
                    // Good email, create user.
                    registerNewUser()
                }
            })
    }

    const updateUser = (evt) => {
        const copy = {...user}
        copy[evt.target.id] = evt.target.value
        setUser(copy)
    }

    return (
        <main style={{ textAlign: "center" }}>
            <form className="Rform--login" onSubmit={handleRegister}>
                <h1 className="RegisterSignIn">Sign-In</h1>
                <fieldset>
                    <label htmlFor="RfullName"></label>
                    <input onChange={updateUser}
                           type="text" id="RfullName" className="form-control"
                           placeholder="name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="Remail"></label>
                    <input onChange={updateUser}
                        type="email" id="Remail" className="form-control"
                        placeholder="email" required />
                </fieldset>
                <fieldset>
                    <button type="submit"> Join-the-Hunt </button>
                </fieldset>
            </form>
        </main>
    )
}

