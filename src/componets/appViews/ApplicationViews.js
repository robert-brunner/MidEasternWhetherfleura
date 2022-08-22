import { Outlet, Route, Routes } from "react-router-dom"
// import { EventList } from "../events/EventList"
// import { EventEdit } from "../events/EventEdit"
// import { EventForm } from "../events/EventForm"
// import { ChatList } from "../chat/ChatList"
// import { ArticleEdit } from "../articles/ArticleEdit"
// import { ArticleForm } from "../articles/ArticleForm"
// import { ArticleList } from "../articles/ArticleList"


export const ApplicationViews = () => {

    return <Routes>
                <Route path="/" element={
                    <>

                        <h1 className="mainTitle">Nutshell</h1>
                        <section className="mainContainer">
                            <div className ="news">
                                <h2>News</h2>
                                {/* <ArticleList /> */}
                            </div>
                            <div>
                                <h2>Tasks</h2>

                            </div>
                            <div>
                                <h2>Events</h2>
                                {/* <EventList /> */}
                            </div>
                            <div>
                                <h2>Messages</h2>
                                {/* <ChatList /> */}
                            </div>
                            
                
                        </section>

                        <Outlet />
                    </>
                }/>

                {/* <Route path="event/create" element={ <EventForm /> } />  
                <Route path = "article/create" element={<ArticleForm />} />  
                <Route path="events/:eventId/edit" element={ <EventEdit /> } />            
                <Route path = "article/:articleId/edit" element= {<ArticleEdit />} />      */}
    </Routes>
}