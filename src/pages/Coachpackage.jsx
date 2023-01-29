import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Coachpackage = () => {
  return (
    <>
    <section>
                <Container>
                    <Row className='ms-4 mt-4'>
                        <Col sm={4}>
                            <h6 className='fw-bolder bg-danger text-white w-50 p-1 ps-2 pt-2'><KeyboardArrowLeftIcon className='color-white' />CREATE A NEW PACKADGE</h6>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container className='p-5'>
                    <Row className='justify-content-center mb-5'>
                        <Col sm={6}>
                            <div className='position-relative '>
                                <div className='custom-height'>
                                    <ProgressBar className='me-2 ms-2 mb-4 ' style={{ height: '7px' }} >
                                        <ProgressBar variant="danger" now={51} key={1} />
                                    </ProgressBar>
                                </div>
                                <div className='position-absolute top-0 start-0  d-flex justify-content-between w-100 '>
                                    <div><Button variant='danger rounded-circle' size='lg'>01</Button><p className='color-red fw-bold text-center'>Descriptions</p></div>
                                    <div><Button variant='danger rounded-circle' size='lg' className='mt-3 p-2'></Button></div>
                                    <div> <Button variant='danger rounded-circle' size='lg'>02</Button><p className='color-red fw-bold text-center'>Price</p></div>
                                    <div><Button variant='secondary rounded-circle' size='lg' className='mt-3 p-2'></Button></div>
                                    <div> <Button variant='secondary rounded-circle' size='lg'>03</Button><p className='text-grey fw-bold text-center'>Preview</p></div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container className='mb-5 bg-light round'>
                    <Row className='flex-column  pt-4 '>
                        <Col sm={12} className='mx-auto p-4'>
                            <Form>
                                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='fw-bolder text-dark ps-1'>Name your Package:</Form.Label>
                                    <Form.Control type="email" placeholder="Basic" />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='fw-bolder text-dark ps-1'>Price</Form.Label>
                                    <Form.Control type="number" placeholder="Rs. 10500/-"  min="0.00" max="10500.00" step="10.00"/>
                                </Form.Group>
                                <Form.Group className="mb-1 clearfix" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='fw-bolder text-dark ps-1'>Package time</Form.Label>
                                    <Form.Control type="" placeholder="One Week" />
                                    <p className='float-end'>260/600</p>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                    <Row className='justify-content-end'>
                        <Col sm={3} className='cleafix'>
                        <div className='float-end me-4 mb-5'>
                        <Button variant="outline-dark" size='md' className='me-3'>CANCLE</Button>
                        <Button variant="danger" size='md'>SAVE</Button>{' '}
                        </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
  )
}

export default Coachpackage
