import { Navigate, useLocation } from "react-router-dom"

export const Authorized = ({ children }) => {
    const location = useLocation()

    if (localStorage.getItem("whetherfleura_user")) {
        return children
    }
    else {
        return <Navigate
            to={`/login`}
            replace
            state={{ location }} />
    }
}