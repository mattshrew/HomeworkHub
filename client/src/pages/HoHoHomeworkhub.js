import React from 'react'
import Hero from '../components/Hero'
// import About from '../components/About'
import Faq from '../components/Faq'
import Contact from '../components/Contact'

import img1 from '../assets/img/gallery/HoHoHomeworkhub2.webp'
import img2 from '../assets/img/gallery/HoHoHomeworkhub3.webp'


const HoHoHomeworkhub = () => {
    const About = () => {
        return (
            <section id="about" className="about">
                <div className="container-fluid">
                    <div class="row">
                        <div class="d-flex flex-row align-items-center flex-wrap" style={{margin: "20px"}}>
                            <div class="col-8 col-lg-8 icon-boxes d-flex flex-column py-5 px-lg-5" data-aos="fade-left">
                                <h3>What is Ho Ho HomeworkHub? </h3>
                                <p>In December 2023, the HomeworkHub team proudly hosted our second "Ho Ho HomeworkHub" gift wrapping event, and for the first time, it was held in person! This event brought together our team, generous sponsors, and dedicated volunteers, all united by the spirit of giving.</p>
                                <p>Thanks to everyone's efforts, we were able to donate over $2000 worth of gifts to students in need at our community partners: Compass Refugee, Healing of the Seven Generations, and the Angel's Project at Mill Courtland Community Center. The joy of giving was truly felt as these gifts were distributed, bringing smiles and holiday cheer to those who need it most.</p>
                                <p>We want to extend our deepest thanks to all the sponsors and volunteers who made this event possible. Your support helped create a memorable and impactful day for our community. We look forward to continuing this tradition and making an even bigger difference in the future!</p>
                            </div>
                            <img data-aos="fade-down" src={img2} alt="let's code poster" srcset="" class="img-fluid rounded-3" width="400"></img>

                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <>
            <Hero
                h1={{text: "Ho Ho", underlined: "HomeworkHub", reversed: false}}
                buttons={[
                    // 
                ]}
                img={img1}
            />
            
            <main id="main">
                <About />
                <Faq />
                <Contact />

            </main>
        </>
    )
}

export default HoHoHomeworkhub