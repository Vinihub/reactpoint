import React from 'react'
import './Contact.css'
import {FaMapMarker,FaPhone,FaEnvelope}  from 'react-icons/fa'



const Contactus = () => {
    return (
        <section id="contact">
            <div className="container">
              <h1>GET IN TOUCH</h1>
              <div className="row">
                  <div className="col-md-20 contact-info">
                    <div className="follow"><b>Address: </b><i className="fa"> <FaMapMarker/></i>#45,2nd floor,HAL 2nd stage,Near Ganapathi Temple,Bengaluru-75
                    </div>      
                      <div className="follow"><b>Phone: </b><i className="fa"><FaPhone/></i>+91 9342107430, +91 9844454614, +91 8105407342
                      </div>
                    <div className="follow"><b>Email: </b><i className="fa"><FaEnvelope/></i>computerpoint.pss@gmail.com
                        </div>
                      </div> 
              </div>
            </div>
          </section>
    )
}

export default Contactus
