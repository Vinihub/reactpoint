import React from 'react'
import './Course.css'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import styled from 'styled-components'

import { FaWindows } from 'react-icons/fa'
import { FaPaintBrush } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'
import { FaLeaf } from 'react-icons/fa'
import { FaDesktop } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa'

const Title = styled.h1`
text-align: center;
color: #efefef !important;
padding-bottom: 10px;
`;
const Info = styled.h3`
text-align: center;color: #007bff !important;
margin-bottom: .5rem;
    font-weight: 500;
    line-height: 1.2;
    font-size:2.5em;
`;
const Courses = () => {
    return (
        <>
            <div className="Courses">
                <div className="container">
                    <h1>OUR COURSES</h1>
                    <div className="row courses">

                        <CardColumns>
                            <Card bg="transparent">


                                <Card.Body >
                                    <div className="icon">

                                        <FaWindows />
                                    </div>
                                    <Card.Title>Diploma in Advanced Computer Application</Card.Title>
                                    <Card.Text>
                                        MS Windows,MS Office(Word,Excel,
                                        Advanced Excel,Power Point,Access)
                                        Internet,E-mail,HTML,VBA
      </Card.Text>
                                </Card.Body>

                            </Card>
                            <Card bg="transparent">

                                <Card.Body>
                                    <div className="icon">

                                        <FaPaintBrush />
                                    </div>
                                    <Card.Title>Diploma in Desktop Publishing</Card.Title>
                                    <Card.Text>
                                        MS Windows,Adobe,Photoshop,
                                        Indesign,Coral Draw
      </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card bg="transparent">

                                <Card.Body>
                                    <div className="icon">

                                        <FaStar />
                                    </div>
                                    <Card.Title>Diploma in J2EE Programming</Card.Title>
                                    <Card.Text>
                                        JDBC,RMI,Networking,Servlets,
                                        JSP,EJB,XML,Web Logic
      </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card bg="transparent">

                                <Card.Body>
                                    <div className="icon">

                                        <FaWindows />
                                    </div>
                                    <Card.Title>Diploma in Computer Application</Card.Title>
                                    <Card.Text>
                                        MS Windows,MS Office(Word,
                                        Excel,Advanced Excel,Power Point)
                                        ,Internet,E-mail
      </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card bg="transparent">

                                <Card.Body>
                                    <div className="icon">

                                        <FaStar />
                                    </div>
                                    <Card.Title>Diploma in Software Programming</Card.Title>
                                    <Card.Text>
                                        JAVA,C,C++,Python
   </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card bg="transparent">

                                <Card.Body>
                                    <div className="icon">

                                        <FaDesktop />
                                    </div>
                                    <Card.Title>Basic Computer For Beginners</Card.Title>
                                    <Card.Text>
                                        Inroduction to Computers,MS Windows,
                                        MS Word,Internet,MS Outlook
      </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card bg="transparent">

                                <Card.Body>
                                    <div className="icon">

                                        <FaWindows />
                                    </div>
                                    <Card.Title>Diploma in Information Technology</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
      </Card.Text>
                                </Card.Body>
                            </Card>


                            <Card bg="transparent">

                                <Card.Body>
                                    <div className="icon">

                                        <FaLeaf />
                                    </div>
                                    <Card.Title>Diploma in Web Page Designing</Card.Title>
                                    <Card.Text>
                                        MS Windows,HTML,DHTML,
                                        CSS,JavaScript
      </Card.Text>
                                </Card.Body>
                            </Card>


                            <Card bg="transparent">
                                <div className="icon">

                                    <FaUsers />
                                </div>
                                <Card.Body>
                                    <Card.Title>Certification courses on Basic and Professional Tally</Card.Title>

                                </Card.Body>
                            </Card>
                        </CardColumns>


                    </div>
                </div>
            </div>
            <div className="row Courses">
                <div className="container">
                    <Title>ONLINE COURSES</Title>
                    <Info>*For ICSE/CBSE/PUC/BE students</Info>
                    <Info>*A batch of 10 students - 21 sessions(Mon-Sat)</Info>
                    <Info>*First come First serve - Limited seats only</Info>
                    <Info>*Feel free to contact us via mail or call</Info>
                    <Info>*Game Designing Skills for kids(10+) using Python</Info>

                    <div className="row Courses">
                        <div className="col-md-6 text-center" style={{ marginBottom: "3%" }}>
                            <h2>JAVA</h2>
                            <p>8th,9th,10th grade ICSE(Java on BlueJ environment)</p>
                        </div>

                        <div className="col-md-6 text-center" style={{ marginBottom: "5%" }}>
                            <h2>Python</h2>
                            <p>11th and 12th grade CBSE(Python,Django Framework)</p>


                        </div>


                        <div className="col-md-6 text-center" style={{ marginBottom: "3%" }}>
                            <h2>C/C++</h2>
                            <p>1st and 2nd PUC(C/C++)</p>

                        </div>


                        <div className="col-md-6 text-center" style={{ marginBottom: "3%" }}>
                            <h2>C/C++/Python/Core Java and Advanced Java</h2>
                            <p>BE/BCA/MCA</p>
                        </div>

                        <div className="col-md-6 text-center" style={{ marginBottom: "3%" }}>
                            <h2>Tally</h2>
                            <p>Tally ERP9</p>
                        </div>

                        <div className="col-md-6 text-center" style={{ marginBottom: "3%" }}>
                            <h2>Ms Excel and Advanced Excel</h2>
                        </div>


                    </div>

                </div>




            </div>
        </>
    )
}

export default Courses
