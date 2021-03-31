import Carousel from 'react-bootstrap/Carousel'

import React from 'react'
import './carousel.css'

const Carosel = () => {
  return (
    <div className="carousel">
            
<Carousel>
  <Carousel.Item className="carosel.item">
    <img
       className="d-block img-fluid"
       
      src="https://pss-computerpoint.tech/images/images2222.jpg"
      alt="First slide"
    />
    <Carousel.Caption className="caption">
      <h2>COMPUTER POINT IS NOW ONLINE</h2>
      <p>
                  Knowledge is Power and there is no better time than now to keep students occupied and make the most out of their time. Encouraging our students to better utilize their extra time and to learn Programming.
                </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="carousel.item">
    <img
      className="d-block img-fluid"
      style={{ width: "100%" }}
      src="https://pss-computerpoint.tech/images/students_boys_girls_study_friends_80723_1920x1080.jpg"
      alt="Second slide"
    />

    <Carousel.Caption className="caption">
      <h2>Training for ICSE(BlueJ),PUC(C++),CBSE(Python) students as per the syllabus and for Engineering students as well</h2>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="carousel.item" >
    <img
      className="d-block img-fluid"
      src="https://pss-computerpoint.tech/images/amritha-institute-of-computer-technology-kaloor-ernakulam-computer-training-institutes-382usue.jpg"
      alt="Third slide"
    />

    <Carousel.Caption className="caption">
      <h2>21 days crash course on C/C++/JAVA/Python by a qualified IT trainer</h2>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</div>
);
}

export default Carosel


 


