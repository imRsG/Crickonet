import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { useState } from 'react';
import { Button } from 'react-bootstrap';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Image from 'react-bootstrap/Image'
import EngineeringRoundedIcon from '@mui/icons-material/EngineeringRounded';
import Banner5img from './banner5img.png'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SportsCricketOutlinedIcon from '@mui/icons-material/SportsCricketOutlined';
import absimg1 from './abs-img-1.png'
import absimg2 from '../images/homeEight-image.png'
import { Figure } from 'react-bootstrap';
// import Child from './Child';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import Thumbnailtv8 from '../images/thumbnailTV18.png'
import Homeimg from '../images/homeimg.jpg'




const Home = () => {
    const data = [
        {
            image: "https://www.pngkey.com/png/full/18-184155_this-free-icons-png-design-of-round-golden.png",
            cardtitle: "Live Coaching",
            catdtext: "Personalized insights from best/world-class/experienced coaches."

        },
        {
            image: "https://www.pngkey.com/png/full/18-184155_this-free-icons-png-design-of-round-golden.png",
            cardtitle: "EASY TO SEARCH",
            catdtext: "Advanced filters to find your coach, or a local match in a minute."
        },
        {
            image: "https://www.pngkey.com/png/full/18-184155_this-free-icons-png-design-of-round-golden.png",
            cardtitle: "LIVE STREAMING",
            catdtext: "Integrated e-scoreboards, portable video equipment, and complete automation."
        },
        {
            image: "https://www.pngkey.com/png/full/18-184155_this-free-icons-png-design-of-round-golden.png",
            cardtitle: "USER-FRIENDLY INTERFACE",
            catdtext: "The simplest way to learn and take your shot."
        },
        {
            image: "https://www.pngkey.com/png/full/18-184155_this-free-icons-png-design-of-round-golden.png",
            cardtitle: "TOP-RATED COACHES",
            catdtext: "Reviewed directly by the players."
        },
        {
            image: "https://www.pngkey.com/png/full/18-184155_this-free-icons-png-design-of-round-golden.png",
            cardtitle: "MULTIPLE PAYMENT METHODS",
            catdtext: "Secure, convenient, and faster transactions in multiple-currencies."
        }
    ]
    const dataa = [
        {
            cardtitle: "1-ON-1 COACHING",
            catdtext: "Live and interactive sessions to learn that perfect form across the pitch coupled with anytime access to a library of expert videos."
        },
        {
            cardtitle: "READY FOR EVERY WEATHER",
            catdtext: "Never miss a single day of training, even when the academy is closed."
        },
        {
            cardtitle: "PROFESSIONAL SCORECARD AND SCOUTING",
            catdtext: "Keep track of your progress with deep insights on your performance as you come closer to being selected for your dream team."
        },
        {
            cardtitle: "SMART VIDEO ANALYSIS",
            catdtext: "Understand your goals, weak spots, and strengths like never before through advanced analytics on every delivery."
        }
    ]

    // const [name, setName] =  useState("Har");
    // const handleClick = ( newName ) => {
    //     setName(newName);
    // }
    return (
        <>
            <section id='banner1'>
                <Container className='w-80 op-1'>
                    <Row className=' justify-content-around m-4'>
                        <Col sm={6} className=' align-self-center'>
                            <h1 className='color-red h1' ><strong>Watch. Learn. Play.</strong></h1>
                            <h1 className='h1'>ALL ON ONE PLATFORM</h1>

                            <br></br>
                            <p><samll>Were bringing all the players, scouts, coaches, and fans together to build a community
                                that breathes and lives cricket. Whether finding your next e-coach or watching that local match, weve got you covered.</samll>
                            </p>
                            <br>
                            </br>
                            <Button variant='danger'>KNOW MORE <ArrowForwardIcon className='ms-5' /></Button>
                        </Col>
                        <Col sm={4}>
                            <div className='rounded d-flex justify-content-center pt-3'>
                                <iframe className='round' width="470" height="415" src="https://www.youtube.com/embed/R0alThHNb0Y?controls=0"
                                    title=".." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"></iframe>
                            </div>
                        </Col>

                    </Row>
                    <Row className='mt-5 ms-4 mb-5'>
                        <Col>
                            <ArrowCircleLeftIcon fontSize="large" style={{ color: "red" }} />
                            <ArrowCircleRightOutlinedIcon fontSize="large" />
                        </Col>
                    </Row>

                </Container>
            </section>
            <section className='banner2-bg w-100'>
                <Container className='p-5'>
                    <Row>
                        <Col sm={4}>
                            <h1>WHY <span className='color-red'>CRICONET</span></h1>
                            <hr className='hr_footer1'></hr>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={8}>
                            <Row>
                                {
                                    data.map((data) => (
                                        <Col sm={6} className="align-self-center">
                                            <div className="card card1 mb-3">
                                                <div className="row g-0">
                                                    <div className="col-sm-2 align-items-center">
                                                        <Image src={data.image} className="img-fluid card-img-top1" alt="" />
                                                    </div>
                                                    <div className="col-sm-10 align-items-center">
                                                        <div className="card-body ">
                                                            <h5 className="card-title fs-4  ">{data.cardtitle}</h5>
                                                            <p class="card-text"><small class="text-muted">{data.catdtext}</small></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    )
                                    )
                                }
                            </Row>
                        </Col>
                        <Col sm={4}>
                            <img src='https://priyadarshinimobile.com/image/cache/catalog/apple/13%20PRO%20MAX%20BLUE/13%20PRO%20MAX%20BLUE%20FB-800x800.png' className='img-fluid' alt=''></img>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* <Child name={name} onHandleClick={handleClick} /> */}
            <section>
                <Container className='p-5'>
                    <Row className='justify-content-center'>
                        <Col sm={4}><h1>
                            FOR THE <span className='color-red'>PLAYERS</span>
                        </h1>
                            <hr className='hr_footer1' />
                        </Col>
                    </Row>
                    <Row className='pt-5'>
                        <Col sm={5}>
                            <div className='position-relative round'>
                                <Figure >
                                    <Figure.Image
                                        className='round'
                                        alt=""
                                        src="https://media.istockphoto.com/id/522183069/photo/hes-got-some-talent-with-the-bat.jpg?s=612x612&w=0&k=20&c=mhAkaoIQGREAtBPiYbU1ZnBKswUdXlnLAbBiPTPP2V8=" />
                                </Figure>
                                <div className=' position-absolute top-50 start-100 translate-middle'>
                                    <Figure >
                                        <Figure.Image
                                            width={190}
                                            height={210}
                                            className='round'
                                            alt=""
                                            src="https://t4.ftcdn.net/jpg/04/37/46/85/360_F_437468553_EytNBWbamaVYP11QvvFwUJcTiNKKBWVG.jpg" />
                                    </Figure>
                                </div>
                            </div>
                        </Col>
                        <Col sm={5}>
                            <Row className='d-flex justify-content-center'>
                                {
                                    dataa.map((data) => (
                                        <Col sm={10} className="justify-content-start">
                                            <div className="card mb-3">
                                                <div className="row g-0">
                                                    <div className="col-sm-2 align-self-top d-flex justify-content-center">
                                                        <EngineeringRoundedIcon sx={{ fontSize: 40 }} className='icon-banner3 mt-2' />
                                                    </div>
                                                    <div className="col-sm-10 align-items-center">
                                                        <div className="card-body ">
                                                            <h5 className="card-title fs-4  ">{data.cardtitle}</h5>
                                                            <p class="card-text"><small className="text-muted">{data.catdtext}</small></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr />
                                            </div>

                                        </Col>
                                    )
                                    )
                                }
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section id='banner4'>
                <Container className=''>
                    <Row className='p-5'>
                        <Col sm={6}>
                            <h1 className='color-red'>E-COACHING</h1>
                            <hr></hr>
                            <br></br>
                            <p class="card-text"><small className="text-muted">Learn the right techniques and skills
                                through one-of-a-kind experience that takes you from amateur to professional in no time. Choose your coach,
                                pick your time and start improving today!</small></p>
                        </Col>
                    </Row>
                    <Row className='pb-5 d-flex justify-content-center'>
                        <Col sm={3} >
                            <div className='divbn4rl position-relative'>
                                <div className='divbn4ab position-absolute bottom-0 start-0 p-3 '>
                                    <p>SIMPLE HEADLINE</p>
                                    <small className="text-muted">Lorem Ipsum is simply dummy text of the printing</small>
                                </div>
                            </div>
                        </Col>
                        <Col sm={3}>
                        <div className='divbn4rl position-relative'>
                            <div className='divbn4ab position-absolute bottom-0 start-0 p-3'>
                                <p>SIMPLE HEADLINE</p>
                                <small className="text-muted">Lorem Ipsum is simply dummy text of the printing</small>
                            </div>
                        </div>
                        </Col>
                        <Col sm={3}>
                        <div className='divbn4rl position-relative'>
                            <div className='divbn4ab position-absolute bottom-0 start-0 p-3'>
                                <p>SIMPLE HEADLINE</p>
                                <small className="text-muted">Lorem Ipsum is simply dummy text of the printing</small>
                            </div>
                        </div>
                        </Col>
                        <Col sm={3}>
                        <div className='divbn4rl position-relative'>
                            <div className='divbn4ab position-absolute bottom-0 start-0 p-3'>
                                <p>SIMPLE HEADLINE</p>
                                <small className='text-muted'>Lorem Ipsum is simply dummy text of the printing</small>
                            </div>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section id='banner5'>
                <Container>
                    <Row className='p-5'>
                        <Col><h1>CRICONET <span className='color-red'> COMMUNITY </span></h1>
                            <hr className='hr_footer' />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={5} className="p-5 align-self-center">
                            <p className='colorbn5'>Learn the right techniques and skills through one-of-a-kind experience that takes you from
                                amateur to professional in no time. Choose your coach, pick your time and start improving today!</p>
                            <br />
                            <br />
                            <Button variant='danger'>KNOW MORE <ArrowForwardIcon className='ms-5' /></Button>
                        </Col>
                        <Col sm={6} className="banner5_bgimg">
                            <Row className='d-flex justify-content-center'>
                                <Col><img src={Banner5img} className="img-fluid" alt="" /></Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section id='banner6'>
                <Container className='p-5'>
                    <Row >
                        <Col sm={5}>
                            <h1>LIVE <span className='color-red'> STREAMING</span></h1>
                            <hr className='hr_footer' />
                        </Col>
                    </Row>
                    <Row >
                        <Col sm={8}>
                            <p className='bn6col1'>Watch that local tournament from the comfort of your home with professional
                                e-scorecards, 360-degree video capture and live social streams. Choose your match!</p>
                        </Col>
                        <Col sm={2} className=" align-self-top justigy-content-end">
                            <div className=' '>
                                <ArrowCircleLeftIcon sx={{ fontSize: 80 }} style={{ color: "red" }} />
                                <ArrowCircleRightIcon sx={{ fontSize: 70 }} className="icon-bg-black" style={{ color: "white" }} />
                            </div>
                        </Col>
                    </Row>
                    <Row className='d-flex justify-content-evenly pt-5'>
                        <Col sm={3} className='bn6-card'>
                            <div className='iframerl'>
                                <iframe className='round iframeres' src="https://www.youtube.com/embed/gAge1yZ8-3I?start=2" title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>
                            </div>
                            <div>
                                <h4 className='ps-4 pt-4'>Headline live cricket #1</h4>
                                <p className='ps-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <div className='d-flex justify-content-center align-self-center pb-3'>
                                <LocationOnOutlinedIcon className=' ' /> <small>Location</small>
                                <CalendarMonthOutlinedIcon className='ms-2 ' /><small> 23 March 2022</small>
                                <SportsCricketOutlinedIcon className='ms-2 ' /><small> Ground Name</small>
                            </div>
                        </Col>
                        <Col sm={3} className='bn6-card'>
                            <div className='iframerl'>
                                <iframe className='round iframeres' src="https://www.youtube.com/embed/gAge1yZ8-3I?start=2" title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>
                            </div>
                            <div >
                                <h4 className='ps-4 pt-4'>Headline live cricket #1</h4>
                                <p className='ps-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <div className='d-flex justify-content-center align-self-center pb-3'>
                                <LocationOnOutlinedIcon className=' ' /> <small>Location</small>
                                <CalendarMonthOutlinedIcon className='ms-2 ' /><small> 23 March 2022</small>
                                <SportsCricketOutlinedIcon className='ms-2 ' /><small> Ground Name</small>
                            </div>
                        </Col>
                        <Col sm={3} className='bn6-card'>
                            <div className='iframerl'>
                                <iframe className='round iframeres' src="https://www.youtube.com/embed/gAge1yZ8-3I?start=2" title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>
                            </div>
                            <div>
                                <h4 className='ps-4 pt-4'>Headline live cricket #1</h4>
                                <p className='ps-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <div className='d-flex justify-content-center align-self-center pb-3'>
                                <LocationOnOutlinedIcon className=' ' /> <small>Location</small>
                                <CalendarMonthOutlinedIcon className='ms-2 ' /><small> 23 March 2022</small>
                                <SportsCricketOutlinedIcon className='ms-2 ' /><small> Ground Name</small>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
            <section id='banner7' className='position-relative'>
                <Container>
                    <Row className='pt-5'>
                        <Col sm={5}>
                            <h1>WELCOME TO YOUR <span className='color-yellow'>ACADEMY </span></h1>
                            <hr className='hr_footer'></hr>
                        </Col>
                    </Row>
                    <Row className='pt-2 ps-2 pb-5'>
                        <Col sm={2}>
                            <img className='img-fluid round' src='https://images.newindianexpress.com/uploads/user/ckeditor_images/article/2023/1/7/AP23007545485234.jpg' alt='' />
                        </Col>
                        <Col sm={4} className=" ps-5 align-self-center">
                            <p className=''>
                                Cricket is meant to be learnt on the field. So, we’re placing you on it. Experience a hybrid model that connects the players, coaches and academies across the online and physical
                                platforms. We’re talking end-to-end tracking of growth, sessions, attendance, payments and training.
                            </p>
                            <br />
                            <Button variant='light' className='fw-bolder'>KNOW MORE <ArrowForwardIcon className='ms-5 color-red' /></Button>
                        </Col>
                        <Col ms={3}>

                        </Col>
                    </Row>
                    <Figure className='position-absolute bottom-0 end-0 m-0 p-0'>
                        <Figure.Image
                            width={190}
                            height={210}
                            alt=""
                            src={absimg1}
                        />
                    </Figure>
                </Container>
            </section>
            <section id='banner8'>
                <Container>
                    <Row className='p-5'>
                        <Col sm={5} className='text-center'>
                            <Row>
                                <Col sm={4}><img className='img-fluid bn-img-8 ' src='https://www.sportphotogallery.com/content/images/cmsfiles/product/35587/36339-list.jpg' alt='' />
                                    <p>players</p>
                                </Col>
                                <Col sm={4}><img className='img-fluid bn-img-8' src='https://media.istockphoto.com/id/522183069/photo/hes-got-some-talent-with-the-bat.jpg?s=612x612&w=0&k=20&c=mhAkaoIQGREAtBPiYbU1ZnBKswUdXlnLAbBiPTPP2V8=' alt='' />
                                    <p>Coaches</p>
                                </Col>
                                <Col sm={4}><img className='img-fluid bn-img-8' src='https://thumbs.dreamstime.com/b/cricket-player-batsman-1832339.jpg' alt='' />
                                    <p>Academies</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={5} className='ps-5 ms-5 '>
                            <Row>
                                <Col sm={12}>
                                    <h1>CALL IT A <span className='color-red'>DIRECT HIT!</span></h1>
                                    <hr className='hr_footer ' />
                                </Col>

                                <Col sm={10} className='align-self-center fw-normal'>
                                    <p className='color-grey pt-5'>Cricket is meant to be learnt on the field. So, we’re placing you on it. Experience a hybrid model that
                                        connects the players, coaches and academies across the
                                        online and physical platforms. We’re talking end-to-end tracking of growth,
                                        sessions, attendance, payments and training.</p>
                                    <br />
                                    <Button variant='danger'>KNOW MORE <ArrowForwardIcon className='ms-5 color-yellow   ' /></Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='position-relative'>
                <Container>
                    <Row>
                        <Col sm={6} >
                            <Row className='justify-content-center align-self-center pt-5'>
                                <Col sm={10}>
                                    <h2>FROM THE <span className="color-red" >LOCKER ROOM</span></h2>
                                    <hr className='hr_footer' />
                                    <p className='color-grey fw-bold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard whtype</p>
                                </Col>
                            </Row>
                            <div className='bgimgbn8 pb-5 mb-2'>
                                <MilitaryTechIcon className='color-red m-0' sx={{ fontSize: 50 }} /><MilitaryTechIcon className='color-red m-0' sx={{ fontSize: 50 }} />
                                <Row className='pt-4 d-flex justify-content-center'>
                                    <Col sm={8} className='color-darkgrey  align-self-center  fw-bold '>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                            unknown printer took a galley of type and scrambled it to make a type</p>
                                    </Col>
                                </Row>
                                <Row className='pt-1 d-flex justify-content-center'>
                                    <Col sm={7} >
                                        <div className="card mb-3">
                                            <div className="row g-0">
                                                <div className="col-md-3 align-self-center">
                                                    <AccountCircleIcon className='color-red rounded-start' sx={{ fontSize: 60 }} />
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="card-body">
                                                        <h5 className="card-title color-red">AHMED ELSAYED</h5>
                                                        <p className="card-text"><small class="text-muted">PLAYERS</small></p>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 card-body d-flex justify-content-end align-self-top"  >
                                                    <ArrowBackIcon className=' color-red' />
                                                    <ArrowForwardIcon className=' color-red' />
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Col sm={4} className='position-absolute top-0 end-0'><img className='img-fluid' src={absimg2} alt=''/></Col>
            </section>
            <section id='banner9'>
                <Container>
                    <Row className='pt-5'>
                        <Col sm={4}>
                            <h1 className='fw-bolder'><span className='color-yellow'>FEATURED</span> IN</h1>
                            <hr className='hr_footer'></hr>
                        </Col>
                    </Row>
                    <Row className='mb-4'>
                        <Col sm={6}><p><small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard when an unknown printer took a galley of type</small></p></Col>
                        <Col sm={6} className='d-flex justify-content-end align-self-center'>
                            <ArrowCircleLeftOutlinedIcon sx={{ fontSize: 60 }} />
                            <ArrowCircleRightIcon sx={{ fontSize: 60 }} className='color-yellow' /></Col>
                    </Row>
                    <Row className='pb-5 d-flex justify-content-center'>
                        <Col sm={2}><img className='rounded' src={Thumbnailtv8} alt='' /></Col>
                        <Col sm={2}><img className='rounded' src={Thumbnailtv8} alt='' /></Col>
                        <Col sm={2}><img className='rounded' src={Thumbnailtv8} alt='' /></Col>
                        <Col sm={2}><img className='rounded' src={Thumbnailtv8} alt='' /></Col>
                        <Col sm={2}><img className='rounded' src={Thumbnailtv8} alt='' /></Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col sm={4} className='d-flex justify-content-center mx-auto mt-5'>
                            <h1>IN THE  <sapn className='color-red'>  NEWS</sapn></h1>
                            <hr />
                        </Col>
                    </Row>
                    <Row className='d-flex justify-content-around mt-4'>
                        <Col sm={5}>
                            <Row className='d-flex justify-content-end'>
                                <Col sm={12} className='clearfix mb-2'>
                                    <p className='float-end mb-0'><small className='text-muted'>MAY 01, 2014 5:50 AM</small><span className='ms-3'>KNOW MORE </span><ArrowForwardIcon className=' color-red' /></p>
                                    
                                </Col>
                                <hr></hr>
                            </Row>
                            <Row>
                                <Col sm={6}>
                                <div className='position-relative'>
                                <img className='rounded img-fluid' src={Homeimg} alt='' />
                                <div className='position-absolute top-0 start-0'><Button variant='danger' size="sm" className='m-2'>EXLUSIVE</Button></div>
                                </div>
                                </Col>
                                <Col sm={6} className='align-self-center'> <Card>
                                    <Card.Body>
                                        <Card.Title className='fw-bolder'>The Pandemic and Its Drastic Impact on Aspiring</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted fw-bold lh-base">Amidst the pandemic, Criconet is an online cricket e-Coaching platform to learn and improve skills while sitting in home from BCCI Accredited Coaches.</Card.Subtitle>
                                    </Card.Body>
                                </Card></Col>
                            </Row>
                        </Col>
                        <Col sm={5}>
                        <Row className='d-flex justify-content-end'>
                                <Col sm={12} className='clearfix mb-2'>
                                    <p className='float-end mb-0'><small className='text-muted'>MAY 01, 2014 5:50 AM</small><span className='ms-3'>KNOW MORE </span><ArrowForwardIcon className=' color-red' /></p>
                                    
                                </Col>
                                <hr></hr>
                            </Row>
                            <Row>
                                <Col sm={6}>
                                <div className='position-relative'>
                                <img className='rounded img-fluid' src={Homeimg} alt='' />
                                <div className='position-absolute top-0 start-0'><Button variant='danger' size="sm" className='m-2'>EXLUSIVE</Button></div>
                                </div>
                                </Col>
                                <Col sm={6} className='align-self-center'> <Card>
                                    <Card.Body>
                                        <Card.Title className='fw-bolder'>The Pandemic and Its Drastic Impact on Aspiring</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted fw-bold lh-base">Amidst the pandemic, Criconet is an online cricket e-Coaching platform to learn and improve skills while sitting in home from BCCI Accredited Coaches.</Card.Subtitle>
                                    </Card.Body>
                                </Card></Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className='d-flex justify-content-around mt-3'>
                        <Col sm={5}>
                            <Row className='d-flex justify-content-end'>
                                <Col sm={12} className='clearfix mb-2'>
                                    <p className='float-end mb-0'><small className='text-muted'>MAY 01, 2014 5:50 AM</small><span className='ms-3'>KNOW MORE </span><ArrowForwardIcon className=' color-red' /></p>
                                    
                                </Col>
                                <hr></hr>
                            </Row>
                            <Row>
                                <Col sm={6}>
                                <div className='position-relative'>
                                <img className='rounded img-fluid' src={Homeimg} alt='' />
                                <div className='position-absolute top-0 start-0'><Button variant='danger' size="sm" className='m-2'>EXLUSIVE</Button></div>
                                </div>
                                </Col>
                                <Col sm={6} className='align-self-center'> <Card>
                                    <Card.Body>
                                        <Card.Title className='fw-bolder'>The Pandemic and Its Drastic Impact on Aspiring</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted fw-bold lh-base">Amidst the pandemic, Criconet is an online cricket e-Coaching platform to learn and improve skills while sitting in home from BCCI Accredited Coaches.</Card.Subtitle>
                                    </Card.Body>
                                </Card></Col>
                            </Row>
                        </Col>
                        <Col sm={5}>
                        <Row className='d-flex justify-content-end'>
                                <Col sm={12} className='clearfix mb-2'>
                                    <p className='float-end mb-0'><small className='text-muted'>MAY 01, 2014 5:50 AM</small><span className='ms-3'>KNOW MORE </span><ArrowForwardIcon className=' color-red' /></p>
                                    
                                </Col>
                                <hr></hr>
                            </Row>
                            <Row>
                                <Col sm={6}>
                                <div className='position-relative'>
                                <img className='rounded img-fluid' src={Homeimg} alt='' />
                                <div className='position-absolute top-0 start-0'><Button variant='danger' size="sm" className='m-2'>EXLUSIVE</Button></div>
                                </div>
                                </Col>
                                <Col sm={6} className='align-self-center'> <Card>
                                    <Card.Body>
                                        <Card.Title className='fw-bolder'>The Pandemic and Its Drastic Impact on Aspiring</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted fw-bold lh-base">Amidst the pandemic, Criconet is an online cricket e-Coaching platform to learn and improve skills while sitting in home from BCCI Accredited Coaches.</Card.Subtitle>
                                    </Card.Body>
                                </Card></Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default Home