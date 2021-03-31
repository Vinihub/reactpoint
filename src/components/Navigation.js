import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import './navigation.css';
import styled from "styled-components"
const NavLink=styled.div`
font-color:black;
padding-left:2em;
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
                        <NavLink href="#home">HOME</NavLink>
                        <NavLink href="#about-us">ABOUT US</NavLink>
                        <NavLink href="#course">COURSE</NavLink>
                        <NavLink href="#online-course">ONLINE COURSE</NavLink>
                        <NavLink href="#faculty">FACULTY</NavLink>
                        <NavLink href="#testimonials">TESTIMONIALS</NavLink>
                        <NavLink href="#contact-us">CONTACT US</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Navigation
