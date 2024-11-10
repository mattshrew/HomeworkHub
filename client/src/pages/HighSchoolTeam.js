import React from 'react'
import Hero from '../components/Hero'
import Faq from '../components/Faq'
import Contact from '../components/Contact'

import girl from '../assets/img/homepage/paris-ted-talk.jpg'

import Priyanshi from '../assets/img/team/Priyanshi.webp'
import Jimmy from '../assets/img/team/Jimmy.webp'

import Leah from '../assets/img/team/Leah C.webp'
import Krisha from '../assets/img/team/Krisha Raichura.webp'
// Rio Cao
// Tanvi Sunkara
// Arshiya Malik

import Zaynah from '../assets/img/team/Zaynah.webp'
import Erin from '../assets/img/team/Erin.webp'
// Brandon Gerosa
// Arnav Kotian

import Matthew from '../assets/img/team/Matthew.webp'
import Naayeli from '../assets/img/team/Naayeli.webp'
// Abhimanyu Malik

import Lucy from '../assets/img/team/Lucy Chen.webp'
// Olivia Taylor
// Claire Belcourt

const HighSchoolTeam = () => {
  return (
    <>
      <Hero 
        showText={true}
        h1={{text: "Volunteer at", underlined: "HomeworkHub!", reversed: false}} 
        h2="Let's learn and teach together!"
        buttons={[]}
        img={girl}
      />

      <section id="team" class="team">
        <div class="container">
          <div class="section-title" data-aos="fade-up">
            <h2>Team</h2>
            <p>Our High School Team</p>
          </div>
          <div class="row" data-aos="fade-left">
            <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={Priyanshi} class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Priyanshi Dokania</h4>
                  <span>President</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={Jimmy} class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Jimmy Tao</h4>
                  <span>Vice President</span>
                </div>
              </div>
            </div> 

            <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={Leah} class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Leah Chin</h4>
                  <span>Pairing Team Director</span>
                </div>
              </div>
            </div>

            {/* <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={} class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Tanvi Sunkara</h4>
                  <span>Pairing Team Member</span>
                </div>
              </div>
            </div> */}

            {/* <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={} class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Rio Cao</h4>
                  <span>Pairing Team Member</span>
                </div>
              </div>
            </div> */}

            <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={Krisha} class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Krisha Raichura</h4>
                  <span>Pairing Team Member</span>
                </div>
              </div>
            </div>
            
            {/* <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={} class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Arshiya Malik</h4>
                  <span>Pairing Team Member</span>
                </div>
              </div>
            </div> */}


            <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={Zaynah} class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Zaynah Kashif</h4>
                  <span>Volunteers Team Director</span>
                </div>
              </div>
            </div>
            
            {/* <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={} class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Brandon Gerosa</h4>
                  <span>Volunteers Team Member</span>
                </div>
              </div>
            </div> */}
            
            <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={Erin} class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Erin Yang</h4>
                  <span>Volunteers Team Member</span>
                </div>
              </div>
            </div>

            {/* <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={} class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Arnav Kotian</h4>
                  <span>Volunteers Team Member</span>
                </div>
              </div>
            </div> */}

            <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={Matthew} class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Matthew Yang</h4>
                  <span>Tech Team Director</span>
                </div>
              </div>
            </div>
      
            <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={Naayeli} class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Naayeli Prakash</h4>
                  <span>Tech Team Member</span>
                </div>
              </div>
            </div>

            {/* <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={} class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Abhimanyu Malik</h4>
                  <span>Tech Team Member</span>
                </div>
              </div>
            </div> */}

            <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={Lucy} class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Lucy Chen</h4>
                  <span>QA Team Director</span>
                </div>
              </div>
            </div>

            {/* <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={} class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Olivia Taylor</h4>
                  <span>QA Team Member</span>
                </div>
              </div>
            </div> */}

            {/* <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={} class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Claire Belcourt</h4>
                  <span>QA Team Member</span>
                </div>
              </div>
            </div> */}

          </div>
          <Faq/>
        </div>
      </section>
      <Contact />

    </>
  )
}

export default HighSchoolTeam
