import { Link } from "react-router-dom"
import Main from "./Main"
import './SassAttempt/background.scss'
import '../components/SlideShow/styles.css'


const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

export const HomePage = () => {



    return (
        <>
        <link rel="stylesheet" href="styles.css"></link>

        <h1 className="mainTitle">MidEastern Whetherfleura</h1>
        <section className="mainContainer">

            
            
            
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>
            <div class="firefly"></div>
           
            
        
        </section>

        {/* <section aria-label="Newest Photos">
        <div class="carousel" data-carousel>
        <button class="carousel-button prev" data-carousel-button="prev">&#8656;</button>
        <button class="carousel-button next" data-carousel-button="next">&#8658;</button>
        <ul data-slides>
        <li class="slide" data-active>
        <img src="https://i2-prod.dailystar.co.uk/incoming/article19184540.ece/ALTERNATES/s615b/creepy-video-1082871" alt="Nature Image #1"/>
        </li>
        <li class="slide">
        <img src="https://abc7amarillo.com/resources/media/fc987257-2e44-48ad-a3fb-92872bd51e40-full3x1_5a0c339ad69943929024a6ca8783fb69amarillozooimage2.jpeg?1654803588106" alt="Nature Image #2"/>
        </li>
        <li class="slide">
        <img src="https://www.cascadiawild.org/uploads/8/2/5/8/8258980/published/owl-may-blog-2021-1.jpeg?1619987156" alt="Nature Image #3"/>
        </li>
        </ul>
        </div>
  </section> */}

    </>
    
    )

}
