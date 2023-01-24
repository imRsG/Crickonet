import React from 'react'
import Container from 'react-bootstrap/Container';
import logo1 from "./logo.png";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <section w-100>
      <Navbar collapseOnSelect expand="lg"  >
        <Container fluid="md">
         <Link to={"/"}> <Navbar.Brand href="#home"><img
            src={logo1}
            width="120"
            height="100"
            className="d-inline-block align-top border-0"
            alt="">
          </img></Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto  justify-content-center">
           <NavDropdown title="Features" id="collasible-nav-dropdown">
           <Link className='text-decoration-none' to={"/pages/privacypolicy"}>  <NavDropdown.Item href="#test/3.1">privacy policy</NavDropdown.Item></Link>
           <Link className='text-decoration-none' to={"/pages/laatestnews"}>  <NavDropdown.Item href="#test/3.1">Latest New</NavDropdown.Item></Link>
              </NavDropdown>
             <Link className='text-decoration-none' to={"/pages/ContactUs"}><NavDropdown title="Services" id="collasible-nav-dropdown">
             <Link className='text-decoration-none' to={"/pages/blogs"}>  <NavDropdown.Item href="#test/3.1">BLOGS</NavDropdown.Item></Link>
             <Link className='text-decoration-none' to={"/pages/cricketjobs"}>  <NavDropdown.Item href="#test/3.1"> CARRER</NavDropdown.Item></Link>
             <Link className='text-decoration-none' to={"/pages/gallery"}>  <NavDropdown.Item href="#test/3.1">GALLERY</NavDropdown.Item></Link>
              </NavDropdown></Link>
              <NavDropdown title="E-coaching" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#test/3.1">test</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#features">Live Streaming</Nav.Link>
              <NavDropdown title="Partners" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#test/3.1">test</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Resources" id="collasible-nav-dropdown">
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