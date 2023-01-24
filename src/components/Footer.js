import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';


const Footer = () => {

  return (
    <section className="bgcolro w-100">
      <Container>
        <Row className='pt-5 justify-content-end pb-3'>
          <Col sm={4} className='justify-content-end '>
          <Button variant='danger' >SUBSCRIBE FOR CRICONET UPDATE <ArrowForwardIcon className='ms-4' /></Button></Col>

        </Row>
        <Row xs={1} md={2} lg={4} className='mt-4 justify-content-center ' >
          <Col className="align-content-center pe-5"><h1 className='color-red fw-bolder'>CRICONET</h1>
            <hr className="hr_footer"></hr>
            <br></br>
            <p><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspen disse non est dignissim risus auctor accumsan.</small></p>
            <br />
            <Row className="d-flex justify-content-start pb-2">
              <Col> <FacebookIcon className='me-3' /> <YouTubeIcon className='me-3' />  <InstagramIcon className='me-3' /><LinkedInIcon className='me-3' /></Col>
            </Row>
          </Col>
          <Col className="align-content-center pt-3 ps-3"><h4 className='align-bottom'>ABOUT US</h4>
            <hr className="hr_footer align-items-center" />
            <nav className="navbar justify-content-satrt footer_links container">
              <ul className="navbar-nav nav-hov">
                <li className="nav-item">
                  <a className="nav-link nav-link-footer" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-link-footer" href="#">E-coaching</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-link-footer" href="#">Live Streaming</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-link-footer" href="#">partners</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-link-footer" href="#">Resources</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-link-footer" href="#">FAQ's</a>
                </li>
              </ul>
            </nav>
          </Col>
          <Col className="align-content-center pt-3 ps-3"><h4 className='align-bottom'>USEFULL LINKS</h4>
            <hr className="hr_footer align-items-center" />
            <nav className="navbar justify-content-satrt footer_links container">
              <ul className="navbar-nav nav-hov">
              <Link className='text-decoration-none' to={"/pages/useragreement"}> <li className="nav-item">
                <a className="nav-link nav-link-footer" href="#"> User agreement</a>
                </li></Link>
                <Link className='text-decoration-none' to={"/pages/termofuse"}>
                <li className="nav-item">
                 <a className="nav-link nav-link-footer" href="#">Terms</a>
                </li>
                </Link>
                <Link className='text-decoration-none' to={"/pages/privacypolicy"}>
                <li className="nav-item">
                   <a className="nav-link nav-link-footer" href="#">Privacy  Ploicy</a>
                </li>
                </Link>
              </ul>
            </nav>
          </Col>
          <Col className="pt-3 ps-3">
            <h4 className='align-bottom'>REACH US</h4>
            <hr className="hr_footer align-items-center" />
           
              
                <EmailIcon /><p> Email: info@Criconet</p>
            
              <PhoneIcon /><p>Telephone : +91971258911</p>
            
              <LocationOnIcon /><p> Location: Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</p>
            
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </section>
  )
}

export default Footer;