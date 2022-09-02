import { link } from "react-router-dom"
import Main from "../Main"

// for these offshoot pages I need to make a menu that links back to the other pages via an onHover/onClick hamburger menu > dropdown---- debating whether it would just be better to make a page devoted to the menu; problem is every menu has different options


export const About = () => {


    return (
        <>
        <h1 className="mainTitle">About</h1>
        <section className="mainContainer">
            <div className ="contents">

        <h1 className="mainTitle">About</h1>
        <p>
            Not much is known about the Midwestern Whetherfleura.  What it looks like and how it lives are mysteries to us.  All that is known for certain is it's insatiable craving for canned soup; to which it's restraint knows no bounds...

        </p>
        <img className="imgforestCam" src="https://i2-prod.dailystar.co.uk/incoming/article19184540.ece/ALTERNATES/s615b/creepy-video-1082871" alt="Nature Image #1"/>
        </div>
        </section>
            <div class="firefly"></div>
            <div class="firefly">soup</div>
            <div class="firefly"></div>
            <div class="firefly">chicken</div>
            <div class="firefly"></div>
            <div class="firefly">tomato</div>
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly">soup</div>
            <div class="firefly"></div>
            <div class="firefly">spup</div>
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>

              

    </>

    )
}

// <Main> 