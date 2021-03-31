import React from 'react'
import './Faculty.css'
const Faculty = () => {
    return (
        <div className="team" style={{background:"white"}}>
        <div className="container">
            <h1 >FACULTY</h1>
            <div className="row">
              <div className="col-md-3 profile-pic text-center" style={{maxwidth: "none"}}>
                <div class="img-box">
                  <img src="https://pss-computerpoint.tech/images/pops.jpg"  alt="image1"class="img-responsive"/>
                </div>
                <h2>Lokesh G N</h2>
                <h4>Tally/Photoshop trainer</h4>
              </div>

              <div class="col-md-3 profile-pic text-center" style={{maxwidth: "none"}}>
                  <div class="img-box">
                    <img src="https://pss-computerpoint.tech/images/amma.jpg" alt="" class="img-responsive" />
                  </div>
                  <h2>Niveditha</h2>
                  <h4>JAVA,Advanced JAVA,C,C++,Python trainer</h4>
                </div>

                <div class="col-md-3 profile-pic text-center" style={{maxwidth: "none"}}>
                    <div class="img-box">
                      <img src="https://pss-computerpoint.tech/images/pramila.jpg" alt="" class="img-responsive" />
                    </div>
                    <h2>Pramila</h2>
                    <h4>MS Office,VBA,Web Desginer trainer</h4>
                  </div>

                  <div class="col-md-3 profile-pic text-center" style={{maxwidth: "none"}}>
                      <div class="img-box">
                        <img src="https://pss-computerpoint.tech/images/jayashree.jpg" alt="" class="img-responsive"/>
                      
                      </div>
                      <h2>Jayashree</h2>
                      <h4>MS Office trainer</h4>
                    </div>
            </div>
        </div>
        </div>
    )
}

export default Faculty
