import React, { useState } from 'react'
import './Home.css'
import { Row, Col, Button, Container, Carousel, Card, Modal } from 'react-bootstrap'
import Logojson from './Homemap.json'
import Cardjson from './Cardmap.json'
import { Link } from 'react-router-dom'
import { M_modal } from '../Form/M_modal'



export default function Home() {
  const [showModal, setShowModal] = useState(false)

  
  const openModal = () => {
    setShowModal(true)
  };
  const closeModal = () => {
    setShowModal(false)
  };
 
 
  const onKeyDown = (event) => {
    if (event.keyCode === 27) {
      closeModal();
    }
  };
  const onClickOutside = (event) => {
    if (M_modal && M_modal.contains(event.target)) return;
    closeModal();
  };
  return (
    <div>
      <section className='s1'>
        <div className='sigmaband'>
          <Container>
            <Row>
              <Col xs={12} lg={6} className='c1'>
                <div className='hub'>

                  <h2 className='hb3'>Build your dream career</h2>
                  <h2 className='hb2'>in tech</h2>
                </div>
                <div className='hub2'>
                  <p className='p3'>Get trained for top tech jobs by</p><p4 className='hb4'>industry experts and pay rupee0 until</p4><p className='p5'>you land a job</p>

                </div>
                {/* <Button className='bt5' ><Link to={"/formpage"}>Apply Now For FreeLink</Link></Button> */}
                {/* <Button className='bt5' ></Button> */}
                <div>
                  {/* <Button
                    showModal={showModal}
                    className='bt5'
                  /> */}
                  <Button className='bt5' onClick={openModal}><a className='lin' href="/formpage">Apply Now For FreeLink</a></Button>
                  {
                    showModal ? (
                      <M_modal
                      // onSubmit={onSubmit}
                      setShowModal={setShowModal}
                      modalRef={(n) => (this.modal = n)}
                      // buttonRef={(n) => (this.closeButton = n)}
                      closeModal={closeModal}
                      onKeyDown={onKeyDown}
                      onClickOutside={onClickOutside}
                      />
                    ): null
                  }
                </div>


              </Col>
              <Col xs={12} lg={6} className='c5'>
                <img src='../../../../Images/banner.jpg' className='img5' />
              </Col>
            </Row>

          </Container>
        </div>
      </section>
      <section className='s2'>
        <div className='pls'>
          <h2 className='hb6'>Our students are hired by 300+ companies</h2>

          {/* <Container>
            <div className='pls2'>
              <Row className='ro1'>

                <Col xs={12} lg={4} sm={12} className='cp'>

                  <Row>
                    <Col md={8}>
                      <h1 className='hb7'>92% +</h1>
                    </Col>
                    <Col md={4}>
                      <img src='../../../../Images/placement.png' className='img6' />
                    </Col>
                  </Row>
                  <div className='place'>
                    <h4 className='hb8'>Placement Rate</h4>
                    <span className='sp1'>* For the students who complete the program satisfactorily</span>
                  </div>


                </Col>



                <Col xs={12} lg={4} sm={12} className='cp2'>

                  <Row>
                    <Col md={8}>
                      <h1 className='hb10'>₹ 7.43 LPA</h1>
                    </Col>
                    <Col md={4}>
                      <img src='../../../../Images/salary1.png' className='img6' />
                    </Col>
                  </Row>
                  <div className='place'>
                    <h4 className='hb8'>Average Salary</h4>

                  </div>


                </Col>


                <Col xs={12} lg={4} sm={12} className='cp3'>

                  <Row>
                    <Col md={8}>
                      <h1 className='hb9'>₹ 21 LPA</h1>
                    </Col>
                    <Col md={4}>
                      <img src='../../../../Images/highsalary.jpg' className='img6' />
                    </Col>
                  </Row>
                  <div className='place'>
                    <h4 className='hb8'>Highest Salary Offered</h4>

                  </div>


                </Col>

              </Row>
            </div>
          </Container> */}

          {/* <div class="jsx-9b2a1c4f5d5159d9 card-title orange">₹ 7.43 LPA</div><img src="https://images.geekster.in/we-have-delivered/average-salary.svg" alt="" class="jsx-9b2a1c4f5d5159d9"></div><div class="jsx-9b2a1c4f5d5159d9 card-subtitle">Average Salary</div></div></div> */}
          <Container>
            <Row>
              <div className='MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-4 css-1tz8m30 dis5'>
                <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-4 MuiGrid-grid-lg-4 MuiGrid-grid-xl-4 css-19egsyp wer">

                  <div class="jsx-9b2a1c4f5d5159d9 placement-stats-new-card green-bkg">
                    <div class="jsx-9b2a1c4f5d5159d9 d-flex justify-between">
                      <div class="jsx-9b2a1c4f5d5159d9 card-title green">92% +</div>
                      <img src="https://images.geekster.in/we-have-delivered/placement-rate.svg" alt="" class="img100"></img>
                    </div>
                    <div class="jsx-9b2a1c4f5d5159d9 card-subtitle high">Placement rate</div>
                    <div class="jsx-9b2a1c4f5d5159d9 style4">* For the students who complete the program satisfactorily</div>




                  </div>
                </div>
                <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-4 MuiGrid-grid-lg-4 MuiGrid-grid-xl-4 css-19egsyp wer">

                  <div class="jsx-9b2a1c4f5d5159d9 placement-stats-new-card orange-bkg">
                    <div class="jsx-9b2a1c4f5d5159d9 d-flex justify-between">
                      <div class="jsx-9b2a1c4f5d5159d9 card-title orange">₹ 7.43 LPA</div>
                      <img src="https://images.geekster.in/we-have-delivered/average-salary.svg" alt="" class="img100"></img>
                    </div>
                    <div class="jsx-9b2a1c4f5d5159d9 card-subtitle high">Average Salary</div>





                  </div>
                </div>
                <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-4 MuiGrid-grid-lg-4 MuiGrid-grid-xl-4 css-19egsyp wer">

                  <div class="jsx-9b2a1c4f5d5159d9 placement-stats-new-card blue-bkg">
                    <div class="jsx-9b2a1c4f5d5159d9 d-flex justify-between">
                      <div class="jsx-9b2a1c4f5d5159d9 card-title blue">₹ 21 LPA</div>
                      <img src="https://images.geekster.in/we-have-delivered/highest-salary.svg" alt="" class="img100"></img>
                    </div>
                    <div class="jsx-9b2a1c4f5d5159d9 card-subtitle high">Highest Salary Offered</div>
                    {/* <div class="jsx-9b2a1c4f5d5159d9 style2">* For the students who complete the program satisfactorily</div> */}




                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </section>
      <section className='s3'>
         <Container> 
        <div className='fetch1'>
          <Row xs={12} md={2} lg={5} className='ro'>
            {
              Logojson.Homemap.map((prod) => {
                return (
                  <React.Fragment>

                    <Col>
                      <>
                        <img className='img30' src={prod.logo_img} />

                      </>
                    </Col>

                  </React.Fragment>
                )
              })
            }

          </Row>
        </div>
        </Container> 
        <Container className='conti'>
          <Row>



            <Col xs={12} lg={6}>
              <div className='fq'>
                <h2 className='hb12'>Take a step forward towards</h2><h2 className='hb11'>your dream career</h2>
              </div>

            </Col>




            <Col xs={12} lg={6}>
              <div className='fq2'>
                <Button className='bt22'>Get Started</Button>
              </div>
            </Col>




          </Row>
        </Container>
      </section>
      <section className='s4'>
        <div className='car'>
          <ul>
            <li className='list30'>
              <h2 className='hb13'>Thousands</h2>
              <h2 className='hb14'> of lives changed</h2>
            </li>
          </ul>
          {/* <p className='pb30'>Hear it from the ones who have been on this journey already</p> */}
        </div>
        <div className='caro'>
          <Carousel className='caros'>
            <Carousel.Item className='caros2'>
              <div className='warper'>
                <div className='left'>
                  <img src='../../../../Images/Karri-Devi.webp' className='img40' />
                  <h2 className='hb20'>Karri Devi</h2>
                  <img src='../../../../Images/publicis-sapient.webp' className='img42' />
                </div>
                <div className='right'>
                  <p className='p50'>I did not know enough about coding before joining Geekster and had no job. All my friends had jobs by then. I joined Geekster and learned everything about full stack</p>
                  <button className='bt31'>Read More</button>
                </div>
              </div>

            </Carousel.Item>
            <Carousel.Item className='caros2'>
              <div className='warper'>
                <div className='left'>
                  <img src='../../../../Images/Pawan-Kumar.webp' className='img40' />
                  <h2 className='hb20'>Pawan Kumar</h2>
                  <img src='../../../../Images/Radiansys.webp' className='img42' />
                </div>
                <div className='right'>
                  <p className='p50'>Geekster educators were very good. We used to make live projects and with the help of educators and mentors I was able to transition from Petroleum engineering to software</p>
                  <button className='bt31'>Read More</button>
                </div>
              </div>


            </Carousel.Item>
            <Carousel.Item className='caros2'>
              <div className='warper'>
                <div className='left'>
                  <img src='../../../../Images/Utkarsh-singh.webp' className='img40' />
                  <h2 className='hb20'>Utkarsh Singh</h2>
                  <img src='../../../../Images/Bluewud.webp' className='img42' />
                </div>
                <div className='right'>
                  <p className='p50'>Geekster taught me in months what years of college work couldn't teach me. They honed my technical and non-technical skills, build my confidence and gave me a flavor of</p>
                  <button className='bt31'>Read More</button>
                </div>
              </div>


            </Carousel.Item>
            <Carousel.Item className='caros2'>
              <div className='warper'>
                <div className='left'>
                  <img src='../../../../Images/Saurabh-Garg.webp' className='img40' />
                  <h2 className='hb20'>Saurabh Garg</h2>
                  <img src='../../../../Images/publicis-sapient.webp' className='img42' />
                </div>
                <div className='right'>
                  <p className='p50'>Geekster taught me in months what years of college work couldn't teach me. They honed my technical and non-technical skills, build my confidence and gave me a flavor of</p>
                  <button className='bt31'>Read More</button>
                </div>
              </div>


            </Carousel.Item>
          </Carousel>
        </div>
        <Button className='bt55'>Read More Testimonials</Button>
      </section>
      <section className='s5'>
        <div className='newcaro'>
          <div className='poster'>
            <h2 className='hb16'>Unlock your true potential with Geekster</h2>
            <p className='p56'>Through our programs we ensure that you</p>

          </div>
          <Container>
            <Row>
              <Col xs={12} md={3} lg={6}>
                <Carousel fade className='caros2'>
                  <Carousel.Item className='caros4'>
                    <div className='warper2'>
                      <div className='left2'>
                        <img src='../../../../Images/full.png' className='img44' />

                      </div>

                    </div>


                  </Carousel.Item>
                  <Carousel.Item className='caros4'>
                    <div className='warper2'>
                      <div className='left2'>
                        <img src='../../../../Images/shail.png' className='img44' />

                      </div>

                    </div>


                  </Carousel.Item>
                  <Carousel.Item className='caros4'>
                    <div className='warper2'>
                      <div className='left2'>
                        <img src='../../../../Images/new.png' className='img44' />

                      </div>

                    </div>


                  </Carousel.Item>
                  <Carousel.Item className='caros4'>
                    <div className='warper2'>
                      <div className='left2'>
                        <img src='../../../../Images/student.png' className='img44' />

                      </div>

                    </div>


                  </Carousel.Item>
                  <Carousel.Item className='caros4'>
                    <div className='warper2'>
                      <div className='left2'>
                        <img src='../../../../Images/refelal.png' className='img44' />

                      </div>

                    </div>


                  </Carousel.Item>
                </Carousel>

              </Col>
              <Col xs={12} md={3} lg={6}>
                <div className='rb'>
                  <div className='ri1'>

                    <h3 className='hb18'>Learn the latest technical skills and best practices from Industry</h3>
                    <h3 className='hb19'>experts</h3>
                  </div>
                  <div className='ri1'>
                    <h3 className='hb18'>Receive expert guidance at every step of the way from top</h3>
                    <h3 className='hb19'>mentors</h3>
                  </div>
                  <div className='ri1'>
                    <h3 className='hb18'>
                      Learn how to showcase your knowledge better with soft-skills</h3>
                    <h3 className='hb19'>training</h3>
                  </div>
                  <div className='ri1'>
                    <h3 className='hb18'>Become interview ready by applying your coding and interview</h3>
                    <h3 className='hb19'>skills in mock interviews</h3>
                  </div>
                  <div className='ri1'>
                    <h3 className='hb18'>Get referrals to top companies</h3>

                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section className='s6'>

        {/* <div class='p-3 our-courses-warper text-center sm-p-2'>
            <div class='max-width'>
              <h2 class='first-content-text-section-title mt-0'>
                <div>Join a program at</div>
                <div class='primary-text'>₹0 upfront fee!</div>
              </h2>
              <div class='text-hero-sub secondary-text mb-4 sm-mb-2' style="color:rgb(185, 190, 192);">
              Yes, you read it right! We do not charge anything until you get your first salary.
              </div>
            </div>
          </div> */}
        <div className='nor'>
          <div className='write'>
            <h1 className='hb150'>Join a program at</h1>
            <h1 className='hb151'>₹0 upfront fee!</h1>
            <div className='hb152'>
              <h3 className='hb153'>Yes, you read it right! We do not charge anything until you get your first salary.</h3>
            </div>
          </div>
          <Container className='conti9'>
            <Row className='ro9'>
              <Col xs={12} lg={12}>
                <div className='con5'>
                  <h4 className='hb55'>For Graduates & Final Year Students</h4>
                  <h2 className='hb56'>Full Stack Web Development</h2>
                  <h4 className='hb57'>Build in-demand tech skills and accelerate your</h4>
                  <h4 className='hb57'>career with most aspirational tech jobs</h4>
                </div>
              </Col>


              <Col xs={12} lg={6}>
                <h4 className='hb58'>Salary Commitment</h4>
                <h4 className='hb59'>INR 5-30 LPA</h4>

              </Col>
              <Col xs={12} lg={6} className='con6'>
                <h4 className='hb60'>Eligibility</h4>
                <h4 className='hb61'>Basic</h4>
                <h4 className='hb61'>Programming</h4>
                <h4 className='hb61'>Skills</h4>
              </Col>


              <Col xs={12} lg={4}>
                <h4 className='hb69'>Next batch starts on</h4>
              </Col>
              <Col xs={12} lg={4}>
                <h4 className='hb63'>31st Oct</h4>
              </Col>
              <Col xs={12} lg={4}>
                <button className='bt200'>Know More</button>
              </Col>
            </Row>
          </Container>
        </div>

      </section>
      <section className='s7'>
        <div className='fe'>
          <h4 className='hb300'>Your mentors </h4>
          <h4 className='hb301'>through this journey</h4>
        </div>
        <div className='fetch2'>

          <Row className='cr'>
            {
              Cardjson.Cardmap.map((prod) => {
                return (
                  <React.Fragment>

                    <Col xs={12} md={2} lg={3} className='cr2'>
                      {/* <Card className='cards'> */}
                      {/* <Card.Img variant="top" className='img20' src={prod.card_img} /> */}
                      <img className='img70' src={prod.card_img} />

                      <Card.Title><h5>{prod.card_title}</h5></Card.Title>
                      {/* <h3>{prod.card_title}</h3> */}
                      <img className='img90' src={prod.card_logo} />


                      {/* <Card.Text>
                            <h3>Price :{prod1.price}</h3>
                            <p>{prod1.description}</p>
                          </Card.Text> */}



                      {/* </Card> */}
                    </Col>

                  </React.Fragment>
                )
              })
            }


          </Row>
          <button className='bt250' >Get Started</button>

        </div>
      </section>
      <section className='s8'>
        <div className='fe2'>
          <h2 className='hb302'>Featured in</h2>
        </div>
        <Container>
          <Row className='ro11'>
            <Col xs={12} sm={1} md={2} lg={4}>
              <img src='../../../../Images/seen-1.webp' className='img189' />
            </Col>
            <Col xs={12} sm={1} md={2} lg={4}>
              <img src='../../../../Images/seen-2.webp' className='img189' />
            </Col>
            <Col xs={12} sm={1} md={2} lg={4}>
              <img src='../../../../Images/seen-5.webp' className='img189' />
            </Col>
          </Row>
          <Row className='ro12'>
            <Col xs={12} sm={1} md={2} lg={4}>
              <img src='../../../../Images/seen-9.webp' className='img190' />
            </Col>
            <Col xs={12} sm={1} md={2} lg={4} className='co9'>
              <img src='../../../../Images/seen-8.webp' className='img192' />
            </Col>
            <Col xs={12} sm={1} md={2} lg={4} className='co9'>
              <img src='../../../../Images/seen-6.webp' className='img192' />
            </Col>
          </Row>
        </Container>

      </section>
    </div>
  )
}
