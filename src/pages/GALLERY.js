import React from 'react'
import { Container, Row, Col, Figure, Form } from 'react-bootstrap'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from 'react-bootstrap/esm/Button';

const GALLERY = () => {
    return (
        <>
            <section id='bannerab1' className='parallax2'>
                <Container className='p-4 '>
                    <Row className='mt-5 justify-content-between'>
                        <Col sm={3} className='d-flex justify-content-start'>
                            <h1 className='fw-bolder fs-1'>GALLERY</h1>
                        </Col>
                        <Col sm={3} className='d-flex justify-content-end align-self-end '>
                            <p className='bg-danger p-1 fw-normal'>Home <KeyboardArrowRightIcon /> GALLERY</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='mt-5 d-flex justify-content-around'>
                <Container className='w-80 mx-auto'>
                    <Row>
                        <Col sm={4}>
                            <h1 className='fw-bold'>LATEST <span className='color-red'>IMAGES</span></h1>
                            <hr></hr>
                        </Col>
                    </Row>
                    <Row className='pt-5  d-flex justify-content-evenly'>
                        <Col sm={3} className='border border-2 p-1 rounded'> 
                        <img className='img-fluid img-gallery ' src='https://media.istockphoto.com/id/505583215/photo/cricket-batsman.jpg?s=612x612&w=0&k=20&c=1wHYrD4fY_4uBM8hQ-WpFcVeVsCZh0kRrw9w4YkcVLc=' alt=''/>
                        </Col>
                        <Col sm={3} className='border border-2 p-1'>
                        <img className='img-fluid  img-gallery ' src='https://images.theconversation.com/files/346531/original/file-20200709-22-g4pede.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip' alt=''/>
                        </Col>
                        <Col sm={3} className='border border-2 p-1'>
                        <img className='img-fluid  img-gallery ' src='https://media.istockphoto.com/id/505583215/photo/cricket-batsman.jpg?s=612x612&w=0&k=20&c=1wHYrD4fY_4uBM8hQ-WpFcVeVsCZh0kRrw9w4YkcVLc=' alt=''/>
                        </Col>
                    </Row>
                    <Row className='pt-3 d-flex justify-content-evenly'>
                        <Col sm={2} className='border border-2 p-1 rounded'><img className='img-fluid  img-gallery ' src='https://images.theconversation.com/files/346531/original/file-20200709-22-g4pede.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip' alt=''/></Col>
                        <Col sm={6} className='border border-2 p-1 rounded'> <img className='img-fluid  img-gallery ' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Pollock_to_Hussey.jpg/1200px-Pollock_to_Hussey.jpg' alt=''/></Col>
                        <Col sm={2} className='border border-2 p-1 rounded'><img className='img-fluid  img-gallery ' src='https://images.theconversation.com/files/346531/original/file-20200709-22-g4pede.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip' alt=''/></Col>
                    </Row>
                    <Row className='pt-3  d-flex justify-content-evenly'>
                        <Col sm={3} className='border border-2 p-1 rounded'> 
                        <img className='img-fluid img-gallery ' src='https://media.istockphoto.com/id/505583215/photo/cricket-batsman.jpg?s=612x612&w=0&k=20&c=1wHYrD4fY_4uBM8hQ-WpFcVeVsCZh0kRrw9w4YkcVLc=' alt=''/>
                        </Col>
                        <Col sm={3} className='border border-2 p-1'>
                        <img className='img-fluid  img-gallery ' src='https://images.theconversation.com/files/346531/original/file-20200709-22-g4pede.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip' alt=''/>
                        </Col>
                        <Col sm={3} className='border border-2 p-1'>
                        <img className='img-fluid  img-gallery ' src='https://media.istockphoto.com/id/505583215/photo/cricket-batsman.jpg?s=612x612&w=0&k=20&c=1wHYrD4fY_4uBM8hQ-WpFcVeVsCZh0kRrw9w4YkcVLc=' alt=''/>
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

export default GALLERY
