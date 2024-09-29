import React from 'react'
import Collapsible from './Collapsible';
import '../assets/css/style.css'

const Faq = () => {
    return (
        <section id="faq" class="faq section-bg">
            <div class="container px-4">
                <div class="section-title" data-aos="fade-up">
                    <h2>F.A.Q</h2>
                    <p>Frequently Asked Questions</p>
                </div>

                <Collapsible label="Can I sign up for more than one subject?">
                                 <p>
                                    As of August 2023, we are now back to our regular 3 subject sign-up. Students can sign up for a maximum of 
                                    three subjects instead of one! If you have any urgent needs or requests, please email us.
                                </p>
                </Collapsible>

                <Collapsible label="My 8 weeks are up. Can I sign up again?" >
                <p>
                                    Yes! You can sign up as many times as you want! Again, availability may vary.
                                </p>
                </Collapsible>

                <Collapsible label="My Tutor/Student is unresponsive, what do I do?" >
                <p>
                                    Please email us! We'll get in touch with the person and sort it out. If they are still
                                    unresponsive, we'll assign you to someone new!
                                </p>
                </Collapsible>

                <Collapsible label="I finished my sessions! What do I do now?" >
                <p>
                                    Congratulations! Log in your hours and we'll contact you when we have someone new for
                                    you!
                                </p>
                </Collapsible>

                <Collapsible label="I signed up for HomeworkHub but no one has been in touch?" >
                <p>
                                    Please check your spam inbox! Our emails sometimes wind up in there.
                                    If you still haven’t heard from us, that may be because we don’t have anyone available for you at
                                    the moment.
                                    If you are in urgent need for a tutor, please send us an email and we will do our best to pair you
                                    ASAP.
                                </p>
                </Collapsible>

                <Collapsible label="I’m an adult looking to volunteer, can I register?" >
                <p>
                                    Thank you for your interest in volunteering!
                                    If you are in University, then you absolutely can so long as you provide a valid vulnerable sector
                                    police check.
                                    If you are an adult out of school, a check must still be provided and you will most likely be
                                    paired with an adult student.
                                </p>
                </Collapsible>
                
                <Collapsible label="I am tutoring/tutored with HomeworkHub, can I get a reference?" >
                <p>
                                    Absolutely! Current/past tutors with HomeworkHub can get references/letters of recommendations by
                                    emailing
                                    our <a style={{display: "inline", padding: 0}} href="mailto:zhou_xuan@homeworkhubtutoring.ca">references
                                    director</a>. Information regarding your
                                    time at HomeworkHub will need to be provided in your email.
                                </p>
                </Collapsible>

                <Collapsible label="How do I complete the checkout process?" >
                <p>
                                    For regular students, HomeworkHub asks for a non-mandatory $10 donation to help maintain our services. Please make sure to follow the checkout link after submitting the registration questions to complete payment if you decide on making a donation. 
                                </p>
                </Collapsible>
 

            </div>
        </section>
    )
}

export default Faq