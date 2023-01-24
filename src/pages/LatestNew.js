import React from 'react'
import { Container, Row, Col, Figure } from 'react-bootstrap'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

const LatestNew = () => {
    const data = [
        {
            image: "https://www.thecitizen.in/h-upload/2022/07/31/357044-sports.webp",
            cardsubtle: "MAY 01, 2014 5:50 AM",
            cardtitle: "The Pandemic and Its Drastic Impact on Aspiring",
            catdtext: "Amidst the pandemic, Criconet is an online cricket e-Coaching platform to learn and improve skills while sitting in home from BCCI Accredited Coaches."

        },
        {
            image: "https://www.thecitizen.in/h-upload/2022/07/31/357044-sports.webp",
            cardsubtle: "MAY 01, 2014 5:50 AM",
            cardtitle: "The Pandemic and Its Drastic Impact on Aspiring",
            catdtext: "Amidst the pandemic, Criconet is an online cricket e-Coaching platform to learn and improve skills while sitting in home from BCCI Accredited Coaches."

        },
        {
            image: "https://www.thecitizen.in/h-upload/2022/07/31/357044-sports.webp",
            cardsubtle: "MAY 01, 2014 5:50 AM",
            cardtitle: "The Pandemic and Its Drastic Impact on Aspiring",
            catdtext: "Amidst the pandemic, Criconet is an online cricket e-Coaching platform to learn and improve skills while sitting in home from BCCI Accredited Coaches."

        }, {
            image: "https://www.thecitizen.in/h-upload/2022/07/31/357044-sports.webp",
            cardsubtle: "MAY 01, 2014 5:50 AM",
            cardtitle: "The Pandemic and Its Drastic Impact on Aspiring",
            catdtext: "Amidst the pandemic, Criconet is an online cricket e-Coaching platform to learn and improve skills while sitting in home from BCCI Accredited Coaches."

        },
        {
            image: "https://www.thecitizen.in/h-upload/2022/07/31/357044-sports.webp",
            cardsubtle: "MAY 01, 2014 5:50 AM",
            cardtitle: "The Pandemic and Its Drastic Impact on Aspiring",
            catdtext: "Amidst the pandemic, Criconet is an online cricket e-Coaching platform to learn and improve skills while sitting in home from BCCI Accredited Coaches."

        },
        {
            image: "https://www.thecitizen.in/h-upload/2022/07/31/357044-sports.webp",
            cardsubtle: "MAY 01, 2014 5:50 AM",
            cardtitle: "The Pandemic and Its Drastic Impact on Aspiring",
            catdtext: "Amidst the pandemic, Criconet is an online cricket e-Coaching platform to learn and improve skills while sitting in home from BCCI Accredited Coaches."

        },
        {
            image: "https://www.thecitizen.in/h-upload/2022/07/31/357044-sports.webp",
            cardsubtle: "MAY 01, 2014 5:50 AM",
            cardtitle: "The Pandemic and Its Drastic Impact on Aspiring",
            catdtext: "Amidst the pandemic, Criconet is an online cricket e-Coaching platform to learn and improve skills while sitting in home from BCCI Accredited Coaches."

        },
        {
            image: "https://www.thecitizen.in/h-upload/2022/07/31/357044-sports.webp",
            cardsubtle: "MAY 01, 2014 5:50 AM",
            cardtitle: "The Pandemic and Its Drastic Impact on Aspiring",
            catdtext: "Amidst the pandemic, Criconet is an online cricket e-Coaching platform to learn and improve skills while sitting in home from BCCI Accredited Coaches."

        },
        {
            image: "https://www.thecitizen.in/h-upload/2022/07/31/357044-sports.webp",
            cardsubtle: "MAY 01, 2014 5:50 AM",
            cardtitle: "The Pandemic and Its Drastic Impact on Aspiring",
            catdtext: "Amidst the pandemic, Criconet is an online cricket e-Coaching platform to learn and improve skills while sitting in home from BCCI Accredited Coaches."

        }

    ]

    return (
        <>
            <section id='bannerab1' className='parallax1'>
                <Container className='p-4 '>
                    <Row className='mt-5 justify-content-between'>
                        <Col sm={3} className='d-flex justify-content-start'>
                            <h1>LATEST NEWS</h1>

                        </Col>
                        <Col sm={3} className='d-flex justify-content-end align-self-end '>
                            <p  className='bg-danger p-1'>Home <KeyboardArrowRightIcon /> MEDIA RELEASES</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
            <Container>
                <Row className='justify-content-center p-5'>
                    <Col sm={12} className='pt-5 justify-content-center'>
                        <h1>LATEST MEDIA RELEASES, NEWS <span className='color-red'>NOTES AND STATEMENTS</span></h1>
                        <hr className='hr_footer' />
                    </Col>
                </Row>
                <Row>
                    <Col className='input-group'>
                        <select class="form-select" id="inputGroupSelect01">
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <select class="form-select" id="inputGroupSelect01">
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <input type="text" className='form-control' placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                    </Col>
                </Row>
                </Container>
            </section>
            <section>
            <Container>
                <Row className='p-4 justify-content-center'>
                    <Col sm={10} className="">
                        <Row className='justify-content-evenly'>
                            {
                                data.map((data) => (
                                    <Col sm={4}>
                                        <Card className='ln-card clearfix'>
                                            <Card.Img variant="top" className='img-fluid card-img-top2' src={data.image} />
                                            <Card.Body className='clearfix'>
                                                <Card.Subtitle className="mb-2 text-muted bn6col1">{data.cardsubtle}</Card.Subtitle>
                                                <Card.Title>{data.cardtitle}</Card.Title>
                                                <Card.Text className='bn6col1 lh-sm'>
                                                    {data.catdtext}
                                                </Card.Text>
                                                <hr></hr>
                                                <div className=''>
                                                    <Button variant="danger" className=''>TIMES OF INDIA</Button>
                                                    <span className='float-sm-end'>Know more <EastOutlinedIcon className='color-red' /></span>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                                )
                            }
                        </Row>
                    </Col>
                </Row>
                <br />
                <Row className='mb-5'>
                    <Col sm={12} className='d-flex justify-content-center'>
                        <Button variant='danger'>View ALL <ArrowForwardIcon className='ms-5 colro-yellow' /></Button>
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
                        <Col sm={8} className='ps-5 align-self-center'>
                            <h1>CRICKET LIVE <span className='color-yellow'>STREAMING MATCH</span></h1>
                            <hr></hr>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s it to make a type specimen book.
                                It has survived not only five centuriesLorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s it to make a type specimen book.</p>
                                <br/>
                                <Button variant='light'>KNOW MORE <ArrowForwardIcon className='ms-5 color-red   ' /></Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default LatestNew