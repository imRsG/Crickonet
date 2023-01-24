import React from 'react'

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
                <Container>
                    <Row>
                        <Col sm={4}>
                            <h1 className='fw-bold'>LATEST <span className='color-red'>IMAGES</span></h1>
                            <hr></hr>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default GALLERY
