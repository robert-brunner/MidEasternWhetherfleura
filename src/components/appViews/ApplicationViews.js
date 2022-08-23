import { Outlet, Route, Routes } from "react-router-dom"
import { About } from "../about/about"
import { HomePage } from "../HomePage"
import { News } from "../news/news"
import { Sightings } from "../sightings/sightings"
import { Store } from "../store/store"
import { Survival } from "../survival-101/survival"



export const ApplicationViews = () => {

    return <Routes>
                <Route path="/" element={
                   <HomePage/>
                   
                }/>

                <Route path="/about" element={ <About /> } />
                <Route path="/news" element={ <News /> } />
                <Route path="/sightings" element={ <Sightings /> } />
                <Route path="/store" element={ <Store /> } />
                <Route path="/survival" element={ <Survival /> } />  
                {/* <Route path = "article/create" element={<ArticleForm />} />  
                <Route path="events/:eventId/edit" element={ <EventEdit /> } />            
                <Route path = "article/:articleId/edit" element= {<ArticleEdit />} />      */}
    </Routes>
}