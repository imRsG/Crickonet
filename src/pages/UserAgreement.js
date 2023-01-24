import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const UserAgreement = () => {
  return (
    <>
    <section id='bannerab1'>
      <Container className='p-4 '>
        <Row className='mt-5 justify-content-between'>
          <Col sm={3} className='d-flex justify-content-start'>
            <h1>USER AGREEMENT</h1>

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
            <ul className='ms-5 ul pt-5'>
              <li className='color-red'>01. Introduction</li>
              <li>02. Availability of “Website”</li>
              <li>03. Use of Website</li>
              <li>04 .Definition of User</li>
              <li>05. Definition of User Account-</li>
              <li>06. You agree that by clicking “Login”, “Register”,</li>
              <li>7. Services</li>
              <li>8. Member and Visitor</li>
              <li>9. Sharing of Content</li>
              <li>10. Your Responsibility</li>
              <li>11. user agree under</li>
              <li>12. Criconet receives</li>
              <li>13. Your Consent</li>
              <li>14. Your Contributions</li>
              <li>15. Links</li>
              <li>16. Data Protection</li>
              <li>17. Intellectual Property</li>
              <li>18. Our Liability</li>
              <li>19. Small Print</li>
              <li>20. Complaints</li>
            </ul>
          </Col>
          <Col sm={8} className='p-5'>
            <Row>
              <Col sm={12} className='pt-5'>
                <h4>1. <span className='color-red'>INTRODUCTION</span></h4>
                <p className='ps-4 pt-1 p-font'> Use of www.criconet.com and the services provided via Criconet are conditional upon you accepting the following terms and conditions. Unless otherwise specified, your acceptance of this User Agreement shall be indicated by your use of and/or registration with www.criconet.com is provided by Selectronic Equipment. If there are any updates to this User Agreement or to the Terms and Conditions of Purchase,
                  we will bring this to your attention on the home page of www.criconet.com.
                </p>
              </Col>
              <Col sm={12} className='pt-2'>
                <h4>2. AVAILABILITY OF <span className='color-red'>“WEBSITE”</span></h4>
                <p className='ps-4 pt-1 p-font'>e will endeavour to ensure that www.criconet.com.is available 24 hours per day without any interruptions. However, we reserve the right to make www.criconet.com unavailable at any time or to restrict access to parts or all of www.criconet.com without notice. www.criconet.com is a general information service. We will endeavour not to make it misleading, but we cannot represent that the information
                  accessible on or via www.criconet.com is completely accurate, not-misleading, complete or up to date.
                </p>
              </Col>
              <Col sm={12} className='pt-2'>
                <h4>3. USE OF <span className='color-red'>WEBSITE</span></h4>
                <p className='ps-4 pt-1 p-font'>Use of Website (www.criconet.com) is designed for your personal, non-commercial use and you must not use it in any other way without our consent. Except as permitted under applicable law, you must not use, copy, translate, publish, license or sell any materials or information in www.criconet.com or the structure, overall style and program code of www.criconet.com without our consent. If you wish to make a request for consent, please contact info@criconet.com.
                </p>
              </Col>
              <Col sm={12} className='pt-2'>
                <h4>4. DEFINITION OF <span className='color-red'>USER</span></h4>
                <p className='ps-4 pt-1 p-font'> ‘user’ means any person who accesses or avails any computer resource of www.criconet.com for the purpose of hosting, publishing, sharing, transacting, viewing, displaying, downloading or uploading information and includes other persons jointly participating in using such computer resource and includes addressee and originator
                </p>
              </Col>
              <Col sm={12} className='pt-2'>
                <h4>5. DEFINITION OF <span className='color-red'>USER ACCOUNT</span></h4>
                <p className='ps-4 pt-1 p-font'> ‘user account’ means the account registration of a user with www.criconet.com and includes profiles, accounts, pages, handles and other similar presences by means of which a user is able to access the services offered by the intermediary or publisher.
                </p>
              </Col>
              <Col sm={12} className='pt-2'>
                <h4>6. YOU AGREE THAT BY CLICKING <span className='color-red'> “LOGIN”, “REGISTER”</span></h4>
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

export default UserAgreement
