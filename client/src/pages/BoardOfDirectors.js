import React from 'react'
import Hero from '../components/Hero'
import Faq from '../components/Faq'
import Contact from '../components/Contact'
import Paris from '../assets/img/team/Paris.webp'
import Gurman from '../assets/img/team/Gurman.webp'
import girl from '../assets/img/homepage/paris-ted-talk.jpg'

const BoardOfDirectors = () => {
  return (
    <>
      <Hero 
          showText={true}
          h1={{text: "Volunteer at", underlined: "HomeworkHub!", reversed: false}} 
          h2="Let's learn and teach together!"
          buttons={[]}
          img={girl}
      />

      <section id="board" class="team">
        <div class="container">
          <div class="section-title" data-aos="fade-up">
            <h2>Board of Directors</h2>
            <p>Our Board of Directors</p>
          </div>

          <div class="row" data-aos="fade-left">

            <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic" data-bioName="Paris"><img src={Paris} class="img-fluid tmpSize" alt="Paris Cai"/>
                </div>
                <div class="member-info">
                  <h4>Paris Cai</h4>
                  <span>Executive Director</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={Gurman} width="6000" class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Gurman Sahota</h4>
                  <span>Board Member</span>
                </div>
              </div>
            </div>
            
            <p> </p>
            <p> </p>
            <p><i>Contact info@homeworkhubtutoring.ca to apply to be a board director</i></p>
            <Faq/>
          </div>
          </div>
      </section>
      <Contact />
    </>
  )
}

export default BoardOfDirectors;
