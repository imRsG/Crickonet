import React from 'react'
import { Container, Row, Col, Figure, Form } from 'react-bootstrap'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { FormGroup } from '@mui/material';
import Card from 'react-bootstrap/Card';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from 'react-bootstrap/esm/Button';



const BLogs = () => {
    return (
        <>
            <section id='bannerab1' className='parallax2'>
                <Container className='p-2 '>
                    <Row className='mt-5 justify-content-between'>
                        <Col sm={3} className='d-flex justify-content-start align-self-end'>
                            <h1 className='fw-bolder fs-1'>BLOGS</h1>
                        </Col>
                        <Col sm={3} className='d-flex justify-content-end align-self-end '>
                            <p className='bg-danger p-1 fw-normal'>Home <KeyboardArrowRightIcon /> BLOGS</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='mt-5 d-flex justify-content-around'>
                <Container>
                    <Row>
                        <Col sm={4}>
                            <h1 className='fw-bold'>LATEST <span className='color-red'>BLOGS</span></h1>
                            <hr></hr>
                        </Col>
                        <Col sm={4} >
                            <Form>
                                <FormGroup>

                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
            <br />
            <section className='mt-5'>
                <Container className='p-5'>
                    <Row>
                        <Col sm={3}><Figure><Figure.Image className='round' alt='' src='https://images.newindianexpress.com/uploads/user/ckeditor_images/article/2023/1/7/AP23007545485234.jpg'>

                        </Figure.Image></Figure></Col>
                        <Col sm={3} className='align-self-center'>
                            <Card>
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 text-muted fw-bold color-grey">MAY 01, 2014 5:50 AM</Card.Subtitle>
                                    <Card.Title className='fw-bolder'>The Pandemic and Its Drastic Impact on Aspiring</Card.Title>
                                    <Card.Text className='lh-base fw-bold color-grey p-0'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id magna ut odio interdum mattis vitae eget metus. Vestibulum lacus nisi, varius eu leo id, iaculis lacinia nulla. Mauris rhoncus sodales odio ut congue. Vestibulum enim dui, gravida sit amet lacinia commodo, maximus ut risus. Cras maximus metus lectus, vitae pharetra risus pulvinar non.
                                    </Card.Text>
                                </Card.Body>
                            </Card></Col>
                            
                        <Col sm={3}>
                            <Card>
                                <Card.Img variant="top" className='cardimg1 round' src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&w=1000&q=80" />
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 text-muted fw-bold color-grey"><small>MAY 01, 2014 5:50 AM</small></Card.Subtitle>
                                    <Card.Title className='fw-bolder'>The Pandemic and Its Drastic Impact on Aspiring</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={3}>
                            <Card>
                                <Card.Img variant="top" className='cardimg1 round' src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&w=1000&q=80" />
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 text-muted fw-bold color-grey"><small>MAY 01, 2014 5:50 AM</small></Card.Subtitle>
                                    <Card.Title className='fw-bolder'>Donec id magna ut odio interdum mattis vitae eget metus</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col sm={12} className='d-flex justify-content-end align-self-end'>
                         <p className='fs-5 p-0'>KNOW MORE <ArrowForwardIcon className='ms-2 color-red' /></p>
                        </Col>
                        <hr></hr>
                    </Row>
                    <Row className='pt-4'>
                        <Col sm={3}>
                            <Card>
                                <Card.Img variant="top" className='cardimg1 round' src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&w=1000&q=80" />
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 text-muted fw-bold color-grey"><small>MAY 01, 2014 5:50 AM</small></Card.Subtitle>
                                    <Card.Title className='fw-bolder'>Donec id magna ut odio interdum mattis vitae eget metus</Card.Title>
                                    <Card.Text className='lh-base fw-bold color-grey p-0'>
                                        Amidst the pandemic, Criconet is an online cricke
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={3}>
                            <Card>
                                <Card.Img variant="top" className='cardimg1 round' src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&w=1000&q=80" />
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 text-muted fw-bold color-grey"><small>MAY 01, 2014 5:50 AM</small></Card.Subtitle>
                                    <Card.Title className='fw-bolder'>Donec id magna ut odio interdum mattis vitae eget metus</Card.Title>
                                    <Card.Text className='lh-base fw-bold color-grey p-0'>
                                        Amidst the pandemic, Criconet is an online cricke
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={3}>
                            <Card>
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 text-muted fw-bold color-grey"><small>MAY 01, 2014 5:50 AM</small></Card.Subtitle>
                                    <Card.Title className='fw-bolder'>Donec id magna ut odio interdum mattis vitae eget metus</Card.Title>
                                    <Card.Text className='lh-base fw-bold color-grey p-0'>
                                        Amidst the pandemic, Criconet is an online cricke
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <hr/>
                            <Card>
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 text-muted fw-bold color-grey"><small>MAY 01, 2014 5:50 AM</small></Card.Subtitle>
                                    <Card.Title className='fw-bolder'>Donec id magna ut odio interdum mattis vitae eget metus</Card.Title>
                                    <Card.Text className='lh-base fw-bold color-grey p-0'>
                                        Amidst the pandemic, Criconet is an online cricke
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={3}>
                            <Card>
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 text-muted fw-bold color-grey"><small>MAY 01, 2014 5:50 AM</small></Card.Subtitle>
                                    <Card.Title className='fw-bolder'>Donec id magna ut odio interdum mattis vitae eget metus</Card.Title>
                                    <Card.Text className='lh-base fw-bold color-grey p-0'>
                                        Amidst the pandemic, Criconet is an online cricke
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <hr/>
                            <Card>
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 text-muted fw-bold color-grey"><small>MAY 01, 2014 5:50 AM</small></Card.Subtitle>
                                    <Card.Title className='fw-bolder'>Donec id magna ut odio interdum mattis vitae eget metus</Card.Title>
                                    <Card.Text className='lh-base fw-bold color-grey p-0'>
                                        Amidst the pandemic, Criconet is an online cricke
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} className='d-flex justify-content-end align-self-end'>
                         <p className='fs-5 p-0'>KNOW MORE <ArrowForwardIcon className='ms-2 color-red' /></p>
                        </Col>
                        <hr></hr>
                    </Row>
                    <Row className='pt-4'>
                    <Col sm={3}>
                            <Card>
                                <Card.Img variant="top" className='cardimg1 round' src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&w=1000&q=80" />
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 text-muted fw-bold color-grey"><small>MAY 01, 2014 5:50 AM</small></Card.Subtitle>
                                    <Card.Title className='fw-bolder'>Donec id magna ut odio interdum mattis vitae eget metus</Card.Title>
                                    <Card.Text className='lh-base fw-bold color-grey p-0'>
                                        Amidst the pandemic, Criconet is an online cricke
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={3}>
                            <Card>
                                <Card.Img variant="top" className='cardimg1 round' src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&w=1000&q=80" />
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 text-muted fw-bold color-grey"><small>MAY 01, 2014 5:50 AM</small></Card.Subtitle>
                                    <Card.Title className='fw-bolder'>Donec id magna ut odio interdum mattis vitae eget metus</Card.Title>
                                    <Card.Text className='lh-base fw-bold color-grey p-0'>
                                        Amidst the pandemic, Criconet is an online cricke
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={3}>
                            <Card>
                                <Card.Img variant="top" className='cardimg1 round' src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&w=1000&q=80" />
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 text-muted fw-bold color-grey"><small>MAY 01, 2014 5:50 AM</small></Card.Subtitle>
                                    <Card.Title className='fw-bolder'>Donec id magna ut odio interdum mattis vitae eget metus</Card.Title>
                                    <Card.Text className='lh-base fw-bold color-grey p-0'>
                                        Amidst the pandemic, Criconet is an online cricke
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={3}>
                            <Card>
                                <Card.Img variant="top" className='cardimg1 round' src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&w=1000&q=80" />
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 text-muted fw-bold color-grey"><small>MAY 01, 2014 5:50 AM</small></Card.Subtitle>
                                    <Card.Title className='fw-bolder'>Donec id magna ut odio interdum mattis vitae eget metus</Card.Title>
                                    <Card.Text className='lh-base fw-bold color-grey p-0'>
                                        Amidst the pandemic, Criconet is an online cricke
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className='mb-5 mt-5'>
                    <Col sm={12} className='d-flex justify-content-center'>
                        <Button variant='danger'>View ALL <ArrowForwardIcon className='ms-5 color-yellow' /></Button>
                    </Col>
                </Row>
                </Container>
            </section>
            <section >
                <Container className='p-5 round mb-5' id='banner7'>
                    <Row >
                        <Col sm={4}>
                            <Figure >
                                <Figure.Image className='round'
                                    alt=""
                                    src="https://t4.ftcdn.net/jpg/04/37/46/85/360_F_437468553_EytNBWbamaVYP11QvvFwUJcTiNKKBWVG.jpg" />
                            </Figure>
                        </Col>
                        <Col sm={6} className='ps-5  align-self-center'>
                            <h1 className='fw-bolder'>CRICKET LIVE <span className='color-yellow'>STREAMING MATCH</span></h1>
                            <hr></hr>
                            <p className='fw-normal'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s it to make a type specimen book.
                                It has survived not only five centuriesLorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s it to make a type specimen book.</p>
                                <br/>
                                <Button variant='light fw-bold' >JOIN NOW <ArrowForwardIcon className='ms-5 color-red   ' /></Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default BLogs
