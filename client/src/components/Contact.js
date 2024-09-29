import React from 'react';
 

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container px-4">

        <div className="section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </div>

        <div className="row">

          <div className="col-lg-4" data-aos="fade-right" data-aos-delay="100">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Ontario, Canada</p>
              </div>

              <div className="email">
                <a href="mailto:info@homeworkhubtutoring.ca"><i className="bi bi-envelope"></i></a>
                <h4>Email:</h4>
                <a href="mailto:info@homeworkhubtutoring.ca">
                  <p>info@homeworkhubtutoring.ca</p>
                </a>
              </div>

              <div className="phone">
                <a href="tel:+19176603871"><i className="bi bi-phone"></i></a>
                <h4>Call:</h4>
                <p>+1 917 660 3871</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
