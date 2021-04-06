import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import './navigation.css';

import styled from 'styled-components';
import {Link, animateScroll as scroll } from "react-scroll";

const NavLink=styled(Link)`
padding-left:2em;
color:grey;
`;


function Navigation() {
    return (
        <>
            <Navbar collapseOnSelect  fixed ="sticky" expand="lg" bg="light" variant="light">
                <Navbar.Brand  className="navbrand" href="#react">
                <img
        alt=""
        src="https://pss-computerpoint.tech/images/clogo.png"
        width="40"
        height="40"
        className="d-inline-block align-top"
      />

      {' '}
      COMPUTER POINT
      <h4 style={{padding:"0.5em" }}>Prime Soft System</h4>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink to="/">HOME</NavLink>
                        <NavLink activeClass="active"
                              to="about"
                             spy={true}
                             smooth={true}
                              offset={-70}
                              duration={500}>ABOUT US</NavLink>
                        <NavLink activeClass="active"
                                        to="courses"
                                        spy={true}
                                         smooth={true}
                                         offset={-70}
                                 duration={500}>COURSE</NavLink>
                        <NavLink 
                                        activeClass="active"
                                        to="courses"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500} >ONLINE COURSE
                          </NavLink>
                        <NavLink 
                                            activeClass="active"
                                            to="faculty"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}>
                                            FACULTY
                        </NavLink>
                        <NavLink 
                                            activeClass="active"
                                            to="testimonials"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}>
                                                TESTIMONIALS
                            </NavLink>
                        <NavLink 
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >CONTACT US
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Navigation
