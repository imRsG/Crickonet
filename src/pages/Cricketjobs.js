import React from 'react'
import { Container, Row, Col, Figure, Form } from 'react-bootstrap'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Card from 'react-bootstrap/Card';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from 'react-bootstrap/esm/Button';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import image8 from './image7.png'
import FloatingLabel from 'react-bootstrap/FloatingLabel';


const Cricketjobs = () => {
    return (
        <>
            <section id='bannerab1' className='parallax2'>
                <Container className='p-4 '>
                    <Row className='mt-5 justify-content-between'>
                        <Col sm={3} className='d-flex justify-content-start'>
                            <h1 className='fw-bolder fs-1'>CRICKET JOBS</h1>
                        </Col>
                        <Col sm={3} className='d-flex justify-content-end align-self-end '>
                            <p className='bg-danger p-1 fw-normal'>Home <KeyboardArrowRightIcon /> CARRER</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row className='justify-content-center'>
                        <Col sm={12} className='pt-5 justify-content-center'>
                            <h1>CURRENT <span className='color-red'>OPENINGS</span></h1>
                            <hr className='hr_footer' />
                        </Col>
                    </Row>
                    <Row className='border border-2 p-2 round'>
                        <Col className='input-group'>
                            <select className="form-select border border-0 " id="inputGroupSelect01">
                                <option selected>Location</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <select className="form-select border border-0" id="inputGroupSelect01">
                                <option selected>All Categorey</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <Button variant='danger'><SearchIcon className='me-2' />SEARCH</Button>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container className='pt-5 pb-5'>
                    <Row className=' gy-5 pb-5'>
                        <Col sm={3}>
                            <Card className='position-relative border border-2 justify-content-center'>
                                <Card.Img variant="top" className='position-absolute top-0 start-50 translate-middle card-img-top2 border border-2 p-2 bg-light' src="https://developer.android.com/static/guide/practices/ui_guidelines/images/adaptive-icon-mask-applied.png" />
                                <Card.Body>
                                    <Card.Title className='text-center pt-4 fw-bold'>User Experience Designer</Card.Title>
                                    <div className='w-75 mx-auto' >
                                        <Card.Text className='d-flex justify-content-between m-0'>
                                            <span><LocationOnOutlinedIcon /><small> Remote</small></span>
                                            <span><AccessTimeIcon /> <small>Full Time</small></span>
                                        </Card.Text>
                                        <Card.Text className='d-flex justify-content-between mt-1'>
                                            <Button variant="outline-dark" className='me-2 w-50' >SAVE</Button>
                                            <Button variant="danger" className='ms-2 w-50'>Apply</Button>
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={3}>
                            <Card className='position-relative border border-2 justify-content-center'>
                                <Card.Img variant="top" className='position-absolute top-0 start-50 translate-middle card-img-top2 border border-2 p-2 bg-light' src="https://icons.veryicon.com/png/Application/Smooth%20App/Apple%20Books%20Border.png" />
                                <Card.Body>
                                    <Card.Title className='text-center pt-4 fw-bold'>Interior Architect</Card.Title>
                                    <div className='w-75 mx-auto' >
                                        <Card.Text className='d-flex justify-content-between m-0'>
                                            <span><LocationOnOutlinedIcon /><small>Indore M.P</small></span>
                                            <span><AccessTimeIcon /> <small>Full Time</small></span>
                                        </Card.Text>
                                        <Card.Text className='d-flex justify-content-between mt-1'>
                                            <Button variant="outline-dark" className='me-2 w-50' >SAVE</Button>
                                            <Button variant="danger" className='ms-2 w-50'>Apply</Button>
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={3}>
                            <Card className='position-relative border border-2 justify-content-center'>
                                <Card.Img variant="top" className='position-absolute top-0 start-50 translate-middle card-img-top2 border border-2 p-2 bg-light' src="https://developer.android.com/static/guide/practices/ui_guidelines/images/adaptive-icon-mask-applied.png" />
                                <Card.Body>
                                    <Card.Title className='text-center pt-4 fw-bold'>Architectural Designer</Card.Title>
                                    <div className='w-75 mx-auto' >
                                        <Card.Text className='d-flex justify-content-between m-0'>
                                            <span><LocationOnOutlinedIcon /><small> Remote</small></span>
                                            <span><AccessTimeIcon /> <small>Full Time</small></span>
                                        </Card.Text>
                                        <Card.Text className='d-flex justify-content-between mt-1'>
                                            <Button variant="outline-dark" className='me-2 w-50' >SAVE</Button>
                                            <Button variant="danger" className='ms-2 w-50'>Apply</Button>
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={3}>
                            <Card className='position-relative border border-2 justify-content-center'>
                                <Card.Img variant="top" className='position-absolute top-0 start-50 translate-middle card-img-top2 border border-2 p-2 bg-light' src="https://icons.veryicon.com/png/Application/Smooth%20App/Apple%20Books%20Border.png" />
                                <Card.Body>
                                    <Card.Title className='text-center pt-4 fw-bold'>Graphic Designer</Card.Title>
                                    <div className='w-75 mx-auto' >
                                        <Card.Text className='d-flex justify-content-between m-0'>
                                            <span><LocationOnOutlinedIcon /><small>New Delhi</small></span>
                                            <span><AccessTimeIcon /> <small>Full Time</small></span>
                                        </Card.Text>
                                        <Card.Text className='d-flex justify-content-between mt-1'>
                                            <Button variant="outline-dark" className='me-2 w-50' >SAVE</Button>
                                            <Button variant="danger" className='ms-2 w-50'>Apply</Button>
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className=' gy-5 pb-5'>
                        <Col sm={3}>
                            <Card className='position-relative border border-2 justify-content-center'>
                                <Card.Img variant="top" className='position-absolute top-0 start-50 translate-middle card-img-top2 border border-2 p-2 bg-light' src="https://developer.android.com/static/guide/practices/ui_guidelines/images/adaptive-icon-mask-applied.png" />
                                <Card.Body>
                                    <Card.Title className='text-center pt-4 fw-bold'>User Experience Designer</Card.Title>
                                    <div className='w-75 mx-auto' >
                                        <Card.Text className='d-flex justify-content-between m-0'>
                                            <span><LocationOnOutlinedIcon /><small> Remote</small></span>
                                            <span><AccessTimeIcon /> <small>Full Time</small></span>
                                        </Card.Text>
                                        <Card.Text className='d-flex justify-content-between mt-1'>
                                            <Button variant="outline-dark" className='me-2 w-50' >SAVE</Button>
                                            <Button variant="danger" className='ms-2 w-50'>Apply</Button>
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={3}>
                            <Card className='position-relative border border-2 justify-content-center'>
                                <Card.Img variant="top" className='position-absolute top-0 start-50 translate-middle card-img-top2 border border-2 p-2 bg-light' src="https://icons.veryicon.com/png/Application/Smooth%20App/Apple%20Books%20Border.png" />
                                <Card.Body>
                                    <Card.Title className='text-center pt-4 fw-bold'>Interior Architect</Card.Title>
                                    <div className='w-75 mx-auto' >
                                        <Card.Text className='d-flex justify-content-between m-0'>
                                            <span><LocationOnOutlinedIcon /><small>Indore M.P</small></span>
                                            <span><AccessTimeIcon /> <small>Full Time</small></span>
                                        </Card.Text>
                                        <Card.Text className='d-flex justify-content-between mt-1'>
                                            <Button variant="outline-dark" className='me-2 w-50' >SAVE</Button>
                                            <Button variant="danger" className='ms-2 w-50'>Apply</Button>
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={3}>
                            <Card className='position-relative border border-2 justify-content-center'>
                                <Card.Img variant="top" className='position-absolute top-0 start-50 translate-middle card-img-top2 border border-2 p-2 bg-light' src="https://developer.android.com/static/guide/practices/ui_guidelines/images/adaptive-icon-mask-applied.png" />
                                <Card.Body>
                                    <Card.Title className='text-center pt-4 fw-bold'>Architectural Designer</Card.Title>
                                    <div className='w-75 mx-auto' >
                                        <Card.Text className='d-flex justify-content-between m-0'>
                                            <span><LocationOnOutlinedIcon /><small> Remote</small></span>
                                            <span><AccessTimeIcon /> <small>Full Time</small></span>
                                        </Card.Text>
                                        <Card.Text className='d-flex justify-content-between mt-1'>
                                            <Button variant="outline-dark" className='me-2 w-50' >SAVE</Button>
                                            <Button variant="danger" className='ms-2 w-50'>Apply</Button>
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={3}>
                            <Card className='position-relative border border-2 justify-content-center'>
                                <Card.Img variant="top" className='position-absolute top-0 start-50 translate-middle card-img-top2 border border-2 p-2 bg-light' src="https://icons.veryicon.com/png/Application/Smooth%20App/Apple%20Books%20Border.png" />
                                <Card.Body>
                                    <Card.Title className='text-center pt-4 fw-bold'>Graphic Designer</Card.Title>
                                    <div className='w-75 mx-auto' >
                                        <Card.Text className='d-flex justify-content-between m-0'>
                                            <span><LocationOnOutlinedIcon /><small>New Delhi</small></span>
                                            <span><AccessTimeIcon /> <small>Full Time</small></span>
                                        </Card.Text>
                                        <Card.Text className='d-flex justify-content-between mt-1'>
                                            <Button variant="outline-dark" className='me-2 w-50' >SAVE</Button>
                                            <Button variant="danger" className='ms-2 w-50'>Apply</Button>
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className=' gy-5 pb-5'>
                        <Col sm={3}>
                            <Card className='position-relative border border-2 justify-content-center'>
                                <Card.Img variant="top" className='position-absolute top-0 start-50 translate-middle card-img-top2 border border-2 p-2 bg-light' src="https://developer.android.com/static/guide/practices/ui_guidelines/images/adaptive-icon-mask-applied.png" />
                                <Card.Body>
                                    <Card.Title className='text-center pt-4 fw-bold'>User Experience Designer</Card.Title>
                                    <div className='w-75 mx-auto' >
                                        <Card.Text className='d-flex justify-content-between m-0'>
                                            <span><LocationOnOutlinedIcon /><small> Remote</small></span>
                                            <span><AccessTimeIcon /> <small>Full Time</small></span>
                                        </Card.Text>
                                        <Card.Text className='d-flex justify-content-between mt-1'>
                                            <Button variant="outline-dark" className='me-2 w-50' >SAVE</Button>
                                            <Button variant="danger" className='ms-2 w-50'>Apply</Button>
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={3}>
                            <Card className='position-relative  border border-2 justify-content-center'>
                                <Card.Img variant="top" className='position-absolute top-0 start-50 translate-middle card-img-top2 border border-2 p-2 bg-light' src="https://icons.veryicon.com/png/Application/Smooth%20App/Apple%20Books%20Border.png" />
                                <Card.Body>
                                    <Card.Title className='text-center pt-4 fw-bold'>Interior Architect</Card.Title>
                                    <div className='w-75 mx-auto' >
                                        <Card.Text className='d-flex justify-content-between m-0'>
                                            <span><LocationOnOutlinedIcon /><small>Indore M.P</small></span>
                                            <span><AccessTimeIcon /> <small>Full Time</small></span>
                                        </Card.Text>
                                        <Card.Text className='d-flex justify-content-between mt-1'>
                                            <Button variant="outline-dark" className='me-2 w-50' >SAVE</Button>
                                            <Button variant="danger" className='ms-2 w-50'>Apply</Button>
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={3}>
                            <Card className='position-relative  border border-2 justify-content-center'>
                                <Card.Img variant="top" className='position-absolute top-0 start-50 translate-middle card-img-top2 border border-2 p-2 bg-light' src="https://developer.android.com/static/guide/practices/ui_guidelines/images/adaptive-icon-mask-applied.png" />
                                <Card.Body>
                                    <Card.Title className='text-center pt-4 fw-bold'>Architectural Designer</Card.Title>
                                    <div className='w-75 mx-auto' >
                                        <Card.Text className='d-flex justify-content-between m-0'>
                                            <span><LocationOnOutlinedIcon /><small> Remote</small></span>
                                            <span><AccessTimeIcon /> <small>Full Time</small></span>
                                        </Card.Text>
                                        <Card.Text className='d-flex justify-content-between mt-1'>
                                            <Button variant="outline-dark" className='me-2 w-50' >SAVE</Button>
                                            <Button variant="danger" className='ms-2 w-50'>Apply</Button>
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={3}>
                            <Card className='position-relative border border border-2 justify-content-center'>
                                <Card.Img variant="top" className='position-absolute top-0 start-50 translate-middle card-img-top2 border border-2 p-2 bg-light' src="https://icons.veryicon.com/png/Application/Smooth%20App/Apple%20Books%20Border.png" />
                                <Card.Body>
                                    <Card.Title className='text-center pt-4 fw-bold'>Graphic Designer</Card.Title>
                                    <div className='w-75 mx-auto' >
                                        <Card.Text className='d-flex justify-content-between m-0'>
                                            <span><LocationOnOutlinedIcon /><small>New Delhi</small></span>
                                            <span><AccessTimeIcon /> <small>Full Time</small></span>
                                        </Card.Text>
                                        <Card.Text className='d-flex justify-content-between mt-1'>
                                            <Button variant="outline-dark" className='me-2 w-50' >SAVE</Button>
                                            <Button variant="danger" className='ms-2 w-50'>Apply</Button>
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className='mb-5'>
                        <Col sm={12} className='d-flex justify-content-center'>
                            <Button variant='danger'>View ALL <ArrowForwardIcon className='ms-5 color-yellow' /></Button>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section id='banner5'>
                <Container className='pb-5'>
                    <Row className='pt-5 '>
                        <Col><h1 className='fw-bolder'>APPLY FOR A  <span className='color-red'> JOB </span></h1>
                            <hr className='hr_footer' />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <img src={image8} className='img-fluid' alt='' />
                        </Col>
                        <Col sm={6}>
                            <Form>
                                <FloatingLabel
                                    controlId="floatingInput" label="Name" className="mb-3 ">
                                    <Form.Control className='form-bgcolor' type="Name" placeholder="name" />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingInput" label="Email" className="mb-3">
                                    <Form.Control className='form-bgcolor' type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                                <FloatingLabel controlId="phone" label="Phone" className="mb-3">
                                    <Form.Control className='form-bgcolor' type="password" placeholder="Password" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingSelect" label="" className="mb-3">
                                    <Form.Select className='form-bgcolor' aria-label="Floating label select example">
                                        <option>Select Your job profile</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </FloatingLabel>
                                    <Form.Control className='form-bgcolor' type="file" placeholder="Password" />
                                <Button variant='danger'>Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section >
                <Container className='p-5 round mb-5 mt-5' id='banner7'>
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
                            <br />
                            <Button variant='light fw-bold' >JOIN NOW <ArrowForwardIcon className='ms-5 color-red   ' /></Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Cricketjobs
