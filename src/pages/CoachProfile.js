import React from 'react'
import { Container, Row, Col, Figure, Form, Button } from 'react-bootstrap'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ProgressBar from 'react-bootstrap/ProgressBar';


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
                            <div className='position-relative'>
                                <ProgressBar className='me-2 ms-2 mb-4' style={{height:'5px'}} >
                                    <ProgressBar variant="danger" now={51} key={1} />
                                </ProgressBar>
                                <div className='position-absolute top-50 start-0 d-flex justify-content-between w-100 '>
                                    <div><Button variant='danger rounded-circle btn-lg'>01</Button><p className='color-red fw-bold text-center'>Descriptions</p></div>
                                    <div><Button variant='danger rounded-circle btn-lg'></Button></div>
                                    <div> <Button variant='danger rounded-circle btn-lg'>02</Button><p className='color-red fw-bold text-center'>Price</p></div>
                                    <div><Button variant='light rounded-circle btn-lg'></Button></div>
                                    <div> <Button variant='light rounded-circle btn-lg'>03</Button><p className='text-grey fw-bold text-center'>Preview</p></div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <row>
                        <Col sm={12}>
                        <Form>
                            <div>
                                <p>Add Photo</p>
                               
                                <p>Drag a photo or Browse</p>
                            </div>
                        </Form>

                        </Col>
                    </row>
                </Container>
            </section>
        </>
    )
}

export default CoachProfile
