import React from 'react'
import Container from 'react-bootstrap/Container';
import logo1 from "./logo.png";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/esm/Button';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <section w-100>
      <Navbar collapseOnSelect expand="lg"  >
        <Container fluid="md">
         <NavLink to={"/"}> <Navbar.Brand href="#home"><img
            src={logo1}
            width="120"
            height="100"
            className="d-inline-block align-top border-0"
            alt="">
          </img></Navbar.Brand></NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto  justify-content-center">
           <NavDropdown className="fw-bold" title="Features" id="collasible-nav-dropdown">
           <NavLink className='text-decoration-none fw-bold' to={"/pages/privacypolicy"}>  <NavDropdown.Item href="#test/3.1">privacy policy</NavDropdown.Item></NavLink>
           <NavLink className='text-decoration-none fw-bold' to={"/pages/laatestnews"}>  <NavDropdown.Item href="#test/3.1">Latest New</NavDropdown.Item></NavLink>
              </NavDropdown>
             <NavLink className='text-decoration-none fw-bold' to={"/pages/ContactUs"}><NavDropdown className="fw-bold" title="Services" id="collasible-nav-dropdown">
             <NavLink className='text-decoration-none fw-bold' to={"/pages/blogs"}>  <NavDropdown.Item href="#test/3.1">BLOGS</NavDropdown.Item></NavLink>
             <NavLink className='text-decoration-none fw-bold' to={"/pages/cricketjobs"}>  <NavDropdown.Item href="#test/3.1"> CARRER</NavDropdown.Item></NavLink>
             <NavLink className='text-decoration-none fw-bold' to={"/pages/gallery"}>  <NavDropdown.Item href="#test/3.1">GALLERY</NavDropdown.Item></NavLink>
              </NavDropdown></NavLink>
              <NavDropdown className="fw-bold" title="E-coaching" id="collasible-nav-dropdown">
              <NavLink className='text-decoration-none fw-bold' to={"/pages/coachprofile"}>  <NavDropdown.Item href="#test/3.1">NEW PACKADGE</NavDropdown.Item></NavLink>
              <NavLink className='text-decoration-none fw-bold' to={"/pages/coachpackage"}>  <NavDropdown.Item href="#test/3.1">Coach package</NavDropdown.Item></NavLink>
              <NavLink className='text-decoration-none fw-bold' to={"/pages/coachProfile2"}>  <NavDropdown.Item href="#test/3.1">Coach package 2</NavDropdown.Item></NavLink>
              </NavDropdown>
              <Nav.Link href="#features" className="fw-bold">Live Streaming</Nav.Link>
              <NavDropdown className="fw-bold" title="Partners" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#test/3.1" className="fw-bold">test</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown className="fw-bold" title="Resources" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#test/3.1">test</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets"><Button variant="outline-dark">NOTICE BOARD</Button></Nav.Link>
              <Nav.Link eventKey={2} href="#memes"><Button variant='danger'>SIGN IN</Button>

              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
    </>
  )
}

export default Header;