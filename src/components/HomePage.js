import { Link } from "react-router-dom"



export const HomePage = () => {



    return (
        <>

        <h1 className="mainTitle">MidEastern Whetherfleura</h1>
        <section className="mainContainer">
            <div className ="contents">
                <button><Link to="/About">About</Link></button>
                {/* <About /> */}
            </div>
            {/* <div>
                <button>Join-the-Hunt</button>

            </div> */}
            <div>
                Artist Depiction
            </div>
            <div>
                <button><Link to= "/Sightings">Sightings</Link></button>
            </div>
            <div>
                <button><Link to= "/survival">Survival 101</Link></button>
            </div>
            {/* <div>
                <h2>Stretch Goal</h2>
            </div> */}
            <div>
                <button><Link to= "/news">In-the-News</Link></button>
            </div>
            <div>
                <button><Link to= "/store">Store</Link></button>
                {/* <ChatList /> */}
            </div>
            

        </section>

    </>
    )

}