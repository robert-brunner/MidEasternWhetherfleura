import { Route, Routes } from "react-router-dom"
import { Authorized } from ".appViews/Authorized"
// import {ApplicationViews } from "./appViews/ApplicationViews"
// import { Navbar } from "./nav/Navbar"
// import { Login } from "./join-HNT/Login"
// import { Register } from "./join-HNT/Register"
// import logo from './logo.svg'
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
          <Navbar/>
				</>
			</Authorized>

		} />
	</Routes>
}

export default Whetherfleura
















// function App() {
//   return (
//     <div className="">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
