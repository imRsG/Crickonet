import React from 'react'
import Card from 'react-bootstrap/Card';
import { Container, Row, Col,    Button } from 'react-bootstrap'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ListGroup from 'react-bootstrap/ListGroup';

const CoachProfile2 = () => {
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
                                        <ProgressBar variant="danger" now={100} key={1} />
                                    </ProgressBar>
                                </div>
                                <div className='position-absolute top-0 start-0  d-flex justify-content-between w-100 '>
                                    <div><Button variant='danger rounded-circle ' size='lg'>01</Button><p className='color-red fw-bold text-center'>Descriptions</p></div>
                                    <div><Button variant='danger rounded-circle ' size='lg' className='mt-3 p-2'></Button></div>
                                    <div> <Button variant='danger rounded-circle ' size='lg'>02</Button><p className='color-red fw-bold text-center'>Price</p></div>
                                    <div><Button variant='danger rounded-circle ' size='lg' className='mt-3 p-2'></Button></div>
                                    <div> <Button variant='danger rounded-circle ' size='lg'>03</Button><p className='text-grey fw-bold text-center'>Preview</p></div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container className='mb-5 bg-light round ' >
                    <Row className='flex-column  pt-4 '>
                        <Col sm={5} className=' p-4 '>
                            <Card className='border border-secondary'>
                                <Card.Body className=' border-bottom '>
                                    <Card.Title className='text-center text-danger fw-bolder'>HEADLINE SIMPLE</Card.Title>
                                    <Card.Text className='text-center'>
                                        Batting
                                    </Card.Text>
                                </Card.Body>
                                
                                <ul>
                                    <li><p className='text-black fw-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></li>
                                    <li><p className='text-black fw-normal'> Aenean elementum velit non commodo convallis. </p></li>
                                    <li><p className='text-black fw-normal'>Morbi tempus lacus quis nisl ultricies, in eleifend nisl posuere.</p></li>
                                    <li><p className='text-black fw-normal'>Vestibulum pellentesque tellus ut velit feugiat hendrerit facilisis in eros.</p></li>
                                    <li><p className='text-black fw-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p></li>
                                    <li><p className='text-black fw-normal'>Nunc hendrerit metus at varius ullamcorper. </p></li>
                                    <li><p className='text-black fw-normal'> Aenean elementum velit non commodo convallis.</p></li>
                                    <li><p className='text-black fw-normal'>Morbi tempus lacus quis nisl ultricies, in eleifend nisl posuere.</p></li>
                                    <li><p className='text-black fw-normal'>Vestibulum pellentesque tellus ut velit feugiat hendrerit facilisis in eros.</p></li>
                                </ul>
                                <Card.Body className='border-top d-flex justify-content-between'>
                                    <div>
                                    <h6><span className='text-danger fw-bolder'>Price:</span> 2000/-</h6>
                                    <p className='text-muted'><small>Valid for a Month</small></p>
                                    </div>
                                    <div>
                                        <Button variant='danger' size='lg' >SELECT</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className='justify-content-end'>
                        <Col sm={3} className='cleafix'>
                            <div className='float-end me-4 mb-5'>
                                <Button variant="outline-dark" size='md' className='me-3 fw-bolder'>CANCLE</Button>
                                <Button variant="danger" size='md' className='fw-bolder'>SAVE</Button>{' '}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CoachProfile2
