import { Route, Routes } from "react-router-dom"
import { Authorized } from "./appViews/Authorized"
import { ApplicationViews } from "./appViews/ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./join-HNT/Login"
import { Register } from "./join-HNT/Register"
import './Whetherfleura.css'

export const Whetherfleura = () => {
	return <Routes>
		<Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />

		<Route path="*" element={
			<Authorized>
				<>
					<NavBar /><br></br>
					<ApplicationViews />
				</>
			</Authorized>

		} />
	</Routes>
}

export default Whetherfleura