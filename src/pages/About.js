import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const About = () => {
  return (
    <>
      <section id='bannerab1'>
        <Container className='p-4 '>
          <Row className='mt-5 justify-content-between'>
            <Col sm={3} className='d-flex justify-content-start'>
              <h1>TERSM OF USE</h1>
            </Col>
            <Col sm={3} className='d-flex justify-content-end align-self-end'>
              <p>Home <KeyboardArrowRightIcon style={{ colro: "#97a1a4" }} /> <span className='color-red'>TERSM OF USE</span></p>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col sm={4} className='pt-5 justify-content-center banner2-bg colorbn5 p-font abtbanner2'>
              <ol className='ms-5'>
                <li className='color-red'>Definitions</li>
                <li>Privacy Policy</li>
                <li>Registration; Rules For User Conduct And Use Of The Service & Security</li>
                <li>Use Restrictions</li>
                <li>Posting And Conduct Restrictions</li>
                <li>Online Content Disclaimer</li>
                <li>Links To Other Sites And/Or Materials</li>
                <li>License Grant</li>
                <li>Intellectual Property</li>
                <li>Email May Not Be Used To Provide Notice</li>
                <li>User Consent To Receive Communications In Electronic Form</li>
                <li>Warranty Disclaimer</li>
                <li>Limitation of Liability</li>
                <li>Limitation Of Damages; Release</li>
                <li>Modification Of Terms Of Use</li>
                <li>Detailed Description Of Product/ Service – e-Coaching</li>
                <li>Specific Obligations Of Coaches</li>
                <li>Specific Obligations Of Users</li>
                <li>Access Or User Rights</li>
                <li>Fees Cancellation And Refunds</li>
                <li>Grievance Officer</li>
                <li>General Terms</li>
                <li>Visitor Bill Of Rights</li>
                <li>Registration and Security</li>
              </ol>
            </Col>
            <Col sm={8} className='p-5'>
              <Row>
                <Col sm={12}>
                  <h2>TERMS OF USE</h2>
                  <hr className='hr_footer' />
                  <p className='colorbn5 ps-5 p-font'><small> Welcome to the www.criconet.com (hereinafter referred to as the website, being owned, run and managed by Criconet (Company)”.
                    The following Terms of Use apply when you view or use www.criconet.com or any of its services or facilities. Please review the
                    following terms carefully. By accessing or using the Service, you signify your agreement to these Terms of Use. If you do not agree to these Terms of Use, you may not access or use the Service.</small></p>
                </Col>
                <Col sm={12} className='pt-5'>
                  <h4>1. <span className='color-red'>DEFINITIONS</span></h4>
                  <p className='ps-4 pt-1 p-font'> Definition of User - ‘user’ means any person who accesses or avails any computer resource of Criconet for the purpose of hosting, publishing, sharing, transacting, viewing, displaying, downloading or uploading information and includes other persons jointly participating in using such computer resource and includes addressee and originator. Definition of User Account - ‘user account’ means the account registration of a user with an intermediary Or publisher and includes profiles, accounts, pages, handles and other similar presences by means of which a user is able to access the services offered by the intermediary or publisher. Unless expressly stated otherwise or the context shows otherwise, the following terms have the meanings given: Access - with its grammatical variations and cognate expressions means gaining entry into, instructing or communicating with the logical, arithmetical, or memory function resources of a computer, computer system or computer network; Access Services - means any measure, including technical measure such as closed captioning, subtitles and audio descriptions, through which the accessibility of online curated content may be improved for persons with disabilities; Access Control Mechanism means any measure, including a technical measure, through which access to online curated content may be restricted based on verification of the identity or age of a user; Communication Link means a connection between a hypertext or graphical element,
                    and one or more items in the same or different electronic document wherein upon clicking on a hyperlinked item, the user is automatically transferred to the other end of the hyperlink which can be another electronic record or another website or application or graphical element; Content means the electronic record defined in clause (t) of section 2 of the Information Technology Act, 2000; Computer means any electronic magnetic, optical or other high-speed data processing device or system which performs logical, arithmetic, and memory functions by manipulations of electronic, magnetic or optical impulses, and includes all input, output, processing, storage, computer software, or communication facilities which are connected or related to the computer in a computer system or computer network; Computer Network means the inter-connection of one or more computers or computer systems or communication device through— the use of satellite, microwave, terrestrial line, wire, wireless or other communication media; and terminals or a complex consisting of two or more inter-connected computers or communication device whether or not the inter-connection
                    is continuously maintained; <span className='color-red'>Read more...</span>
                  </p>
                </Col>
                <Col sm={12} className='pt-2'>
                  <h4>2. PRIVACY <span className='color-red'>POLICY</span></h4>
                  <p className='ps-4 pt-1 p-font'>The Company respects the privacy of its users. Please refer to the website's Privacy Policy (found here: Privacy Policy ) which explains how we collect, use, and disclose information that pertains to your privacy. When you access or use the Service,
                    you signify your agreement to this Privacy Policy.
                  </p>
                </Col>
                <Col sm={12} className='pt-2'>
                  <h4>3. ABOUT THE<span className='color-red'>  SERVICE</span></h4>
                  <p className='ps-4 pt-1 p-font'>The Service allows you to access, use and enjoy the services, products and offerings provided by the website and/or any of its business partners.
                    The Service does not include any illegal or banned services and/or products.
                  </p>
                </Col>
                <Col sm={12} className='pt-2'>
                  <h4>4. YOU AGREE THAT BY CLICKING <span className='color-red'> “LOGIN”, “REGISTER”</span></h4>
                  <p className='ps-4 pt-1 p-font'> You agree that by clicking “Login”, “Register”, or similar, registering, accessing or using our services (described below), you are agreeing to enter into a legally binding contractwith Criconet (even if you are using our Services on behalf of a company). If you do not agree to this contract (“Contract” or “User Agreement”), do notclick “Login”, "Register" (or similar) and do not access or otherwise use any of our Services. If you wish to terminate this contract,
                    at any time you can do so by closing your account and no longer accessing or using our Services.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default About