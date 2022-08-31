import React from "react";
import txtBox from '../assets/txtBox.mp4'
import { Authorized } from "./appViews/Authorized"
import { ApplicationViews } from "./appViews/ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./join-HNT/Login"
import { Register } from "./join-HNT/Register"

const Main = () => {
    return (
        
        <div className='main'>
            <video src ={txtBox} autoPlay loop muted/>
            

        </div>
    )
}
export default Main