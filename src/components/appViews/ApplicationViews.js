import { Outlet, Route, Routes } from "react-router-dom"
import { About } from "../about/about"
import { HomePage } from "../HomePage"
import { NavBar } from "../nav/NavBar"
import { News } from "../news/news"
import { SpotEdit } from "../spotting/spottingEdit"
import { SpotForm } from "../spotting/spottingForm"
import { SpotList } from "../spotting/spottingList"
import { Store } from "../store/store"
import { useState } from "react";




export const ApplicationViews = () => {
    //refresh button below and line 30
    const [refresh, setRefresh] = useState ()

    return <Routes>
        <Route path="/Spotting" element={
            <>
            
            <h1 className="mainTitle">Whetherfleura Sightings</h1>
            <section className="mainContainer">
                
                <div className ="">
                
                    <h2>Add Your Sighting</h2><br></br>
                        <SpotForm  setRefreshProps={setRefresh}/>
                </div>
                <div className="scroller">
                <div className ="spotList_container">
                        <SpotList refreshProps={refresh}/>
                </div>
                </div>
                </section>

                <Outlet />
                </>
        }/>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={ <About /> } />
                <Route path="/news" element={ <News /> } />
                {/* <Route path="/Spotting" element={<SpotForm/>} /> */}
                {/* <Route path="/Spotting" element={<SpotList />} /> */}
                <Route path="/Spotting/:spotId/edit" element={ <SpotEdit /> } /> 
                
                <Route path="/store" element={ <Store /> } />
               
    </Routes>
}