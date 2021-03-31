import React from 'react'
import './Testimonials.css'
import styled from 'styled-components'

const Head=styled.h1`
font-size:4em;
padding:1em;
`;

const Testimonials = () => {
    return (
        <section id="testimonials">
            <div className="container">
                <Head>TESTIMONIALS</Head>
                <p className="text-center" style={{fontSize:"2em"}}>Testimonials by some of our students</p>
            <div className="row">
          

              <div className="col-md-4 text-center">
                <div className="profile">
                  <img src="https://pss-computerpoint.tech/images/male_dummyimg.png"  alt="" class="user"/>
                  <blockquote>I am currently a 11th standard student and recently cbse have introduced new syllabus which is the Python language this year.Excellent teaching,can understand everything clearly better than in school .Before coming to this centre it was very difficult to cope up in Python language.
                    Now it seems so simple that u can do any program given to u .U get a complete mastery in the computer languages which are being taught.</blockquote>
                  <h3>Sourav Pai <span>HAL Public School</span></h3>
                </div>
              </div>

              <div className="col-md-4 text-center">
                <div className="profile">
                  <img src="https://pss-computerpoint.tech/images/female_dummyimg.png" alt="" className="user"/>
                  <blockquote>Hello... This is preethi here. I have completed BBM and joined Computer point, tippasandra for Tally ERP9 professional program. At the beginning I thought it will be difficult and not possible for me to learn but Sir encouraged, supported and helped me to learn it so easily and quickly. Now I really love to do Tally, and it's useful for my job. So I kindly request and suggest others to join this institution which will be very helpful for your future career. Thank you....! </blockquote>
                  <h3>Preethi Claudia <span>BBM student</span></h3>
                </div>
              </div>

              <div className="col-md-4 text-center">
                <div className="profile">
                  <img src="https://pss-computerpoint.tech/images/female_dummyimg.png" alt="" className="user"/>
                  <blockquote>Im Aasritha studying in class 11th CBSE . Cbse had introduced a new programming language python in the year 2019. Our batch was  the first batch which had this language and since this was new to us I had no clue about this language . I used to struggle a lot in the school before I joined this institution . Later when i came to know about this institution and then i joined .Computer Point is the best institution for learning Python.  After joining here my skills and knowledge about the subject got improved extremely .I finally got a trainer who could help me out and resolve my problem...</blockquote>
                  <h3>Asritha yarasingu <span>NCFE</span></h3>
                </div>
              </div>

              <div className="col-md-4 text-center">
                <div className="profile">
                  <img src="https://pss-computerpoint.tech/images/male_dummyimg.png" alt="" className="user"/>
                  <blockquote>I have learned c c++ Java in deeply good understanding more reliable concepts it is very well useful to me  in work place I'm feeling satsified now I'm working in good place with help of computer point</blockquote>
                  <h3>Predeep Raja <span>Software Company</span></h3>
                </div>
              </div>

              <div className="col-md-4 text-center">
                <div className="profile">
                  <img src="https://pss-computerpoint.tech/images/female_dummyimg.png" alt="" className="user"/>
                  <blockquote>Happy Teachers day maam. Thank you so much for making my programming basics strong... I remember you everyday :)</blockquote>
                  <h3>Revathi <span>Capgemini</span></h3>
                </div>
              </div>

              <div className="col-md-4 text-center">
                <div className="profile">
                  <img src="https://pss-computerpoint.tech/images/female_dummyimg.png" alt="" className="user"/>
                  <blockquote>I am Shilpa. I have completed my B com. I joined computer point for basic and tally. It was very easy and quick to learn in the institute. I suggest others also to join the institute. Very nice and supporting teachers.....thank you</blockquote>
                  <h3>Shilpa P <span>Bcom student</span></h3>
                </div>
              </div>
            </div>


            </div>
            
        </section>
    )
}

export default Testimonials

