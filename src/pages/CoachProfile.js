import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ProgressBar from 'react-bootstrap/ProgressBar';
import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded';
import AddIcon from '@mui/icons-material/Add';

const CoachProfile = () => {
    return (
        <>
            <section>
                <Container>
                    <Row className='ms-4 mt-4'>
                        <Col sm={4}>
                            <h6 className='fw-bolder'><KeyboardArrowLeftIcon className='color-red' />CREATE A NEW PACKADGE</h6>
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
                <Container className='mb-5'>
                    <Row className='flex-column bg-light p-5      round '>
                        <Col sm={12} className='position-relative '>
                            <Form>
                                <div className='w-25 flex-column  border border-secondary text-center rounded bg-white'>
                                    <p className=' text-center border border-secondary border-bottom rounded'>Add Photo</p>
                                    <Form.Group controlId="formFileSm" className="">
                                        <Form.Label><UploadFileRoundedIcon className='text-secondary m-5' sx={{ fontSize: 50 }} /></Form.Label>
                                        <Form.Control type="file" size="sm" ></Form.Control>
                                    </Form.Group>
                                </div>
                                <div className='text-center w-25'>
                                    <p>Drag a photo or <span className='text-danger '> Browse</span></p>
                                </div>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='fw-bolder text-dark ps-1'>Headline title</Form.Label>
                                    <Form.Control type="email" placeholder="LOrem ipsum" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='fw-bolder text-dark ps-1'>Categorey</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Select a Categorey</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className='fw-bolder text-dark ps-1'>Describe your packge</Form.Label>
                                    <Form.Control as="textarea" rows={5} placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                     industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                     It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
                                </Form.Group>
                            </Form>
                            <div className='position-absolute top-0 end-0'>
                                <Button variant='danger'>ADD MORE <AddIcon className='text-warning ms-4'/></Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default CoachProfile
