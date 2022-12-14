import React, { useState } from 'react'
import './Home.css'
import { Row, Col, Button, Container, Carousel, Card, Modal, Form } from 'react-bootstrap'
import Logojson from './Homemap.json'
import Cardjson from './Cardmap.json'
import { Link } from 'react-router-dom'
import { M_modal } from '../Form/M_modal'
import { Spring } from 'react-spring'



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
                      <p className='p3'>Get trained for top tech jobs by</p><p4 className='hb4'>industry experts and pay rupee 0 until</p4><p className='p5'>you land a job</p>

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
                            buttonRef={(n) => (this.closeButton = n)}
                            closeModal={closeModal}
                            onKeyDown={onKeyDown}
                            onClickOutside={onClickOutside}
                          />
                        ) : null
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
         
            
              <section  className='s2 tag'>
                <div className='pls'>
                  <div className='pl'>
                    <h2 className='hb6'>Our students</h2><h2 className='ht'> are hired</h2><h2 className='hb6'> by 10+ companies</h2>
                  </div>

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
                      <h1 className='hb10'>??? 7.43 LPA</h1>
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
                      <h1 className='hb9'>??? 21 LPA</h1>
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

                  {/* <div class="jsx-9b2a1c4f5d5159d9 card-title orange">??? 7.43 LPA</div><img src="https://images.geekster.in/we-have-delivered/average-salary.svg" alt="" class="jsx-9b2a1c4f5d5159d9"></div><div class="jsx-9b2a1c4f5d5159d9 card-subtitle">Average Salary</div></div></div> */}
                  <Container>
                    <Row>
                      <div className='MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-4 css-1tz8m30 dis5'>
                        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-4 MuiGrid-grid-lg-4 MuiGrid-grid-xl-4 css-19egsyp wer">

                          <div class="jsx-9b2a1c4f5d5159d9 placement-stats-new-card green-bkg">
                            <div class="jsx-9b2a1c4f5d5159d9 d-flex justify-between">
                              <div class="jsx-9b2a1c4f5d5159d9 card-title green">90% +</div>
                              <img src="https://images.geekster.in/we-have-delivered/placement-rate.svg" alt="" class="img100"></img>
                            </div>
                            <div class="jsx-9b2a1c4f5d5159d9 card-subtitle high">Placement rate</div>
                            <div class="jsx-9b2a1c4f5d5159d9 style4">* For the students who complete the program satisfactorily</div>




                          </div>
                        </div>
                        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-4 MuiGrid-grid-lg-4 MuiGrid-grid-xl-4 css-19egsyp wer">

                          <div class="jsx-9b2a1c4f5d5159d9 placement-stats-new-card orange-bkg">
                            <div class="jsx-9b2a1c4f5d5159d9 d-flex justify-between">
                              <div class="jsx-9b2a1c4f5d5159d9 card-title orange">??? 5 LPA</div>
                              <img src="https://images.geekster.in/we-have-delivered/average-salary.svg" alt="" class="img100"></img>
                            </div>
                            <div class="jsx-9b2a1c4f5d5159d9 card-subtitle high">Average Salary</div>





                          </div>
                        </div>
                        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-4 MuiGrid-grid-lg-4 MuiGrid-grid-xl-4 css-19egsyp wer">

                          <div class="jsx-9b2a1c4f5d5159d9 placement-stats-new-card blue-bkg">
                            <div class="jsx-9b2a1c4f5d5159d9 d-flex justify-between">
                              <div class="jsx-9b2a1c4f5d5159d9 card-title blue">??? 36 LPA</div>
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
           
          <section className='s3 tag'>
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
                    <Button className='bt22'><a className='lin2' href="/formpage">Get Started</a></Button>
                  </div>
                </Col>




              </Row>
            </Container>
          </section>

          <section className='s6 tag'>

            {/* <div class='p-3 our-courses-warper text-center sm-p-2'>
            <div class='max-width'>
              <h2 class='first-content-text-section-title mt-0'>
                <div>Join a program at</div>
                <div class='primary-text'>???0 upfront fee!</div>
              </h2>
              <div class='text-hero-sub secondary-text mb-4 sm-mb-2' style="color:rgb(185, 190, 192);">
              Yes, you read it right! We do not charge anything until you get your first salary.
              </div>
            </div>
          </div> */}
            <div className='nor'>
              <div className='write'>
                <h1 className='hb150'>Join a program at</h1>
                <h1 className='hb151'>???0 upfront fee!</h1>
                <div className='hb152'>
                  <h3 className='hb153'>Yes, you read it right! We do not charge anything until you get your first salary.</h3>
                </div>
              </div>
              <Container className='conti9'>
                <Row className='ro9'>
                  <Col xs={12} lg={6} className='ci'>
                    {/* <Container> */}
                    <Row>
                      <div className='con5'>
                        {/* <div className='con5'> */}
                        <h4 className='hb55'>For Graduates & Final Year Students</h4>
                        <h2 className='hb56'>Full Stack Web Development</h2>
                        <h4 className='hb57'>Build in-demand tech skills and accelerate your career with most aspirational tech jobs</h4>
                        {/* <h4 className='hb57'></h4> */}
                        {/* </div> */}
                      </div>


                      <div className='di'>
                        <div className='in'>
                          <h4 className='hb58'>Salary Commitment</h4>
                          <h4 className='hb59'>INR 5-30 LPA</h4>

                        </div>
                        <div className='con6'>
                          <h4 className='hb60'>Eligibility</h4>
                          <h4 className='hb61'>Basic</h4>
                          <h4 className='hb61'>Programming</h4>
                          <h4 className='hb61'>Skills</h4>
                        </div>
                      </div>


                      <div className='di2'>
                        <div className='con9'>
                          <h4 className='hb69'>Next batch starts on</h4>
                        </div>
                        <div className='con9'>
                          <h4 className='hb63'>15 Nov</h4>
                        </div>
                        <div className='con9'>
                          <button className='bt200'><a className='lin' href="/formpage">Know More</a></button>
                        </div>
                      </div>
                    </Row>
                    {/* </Container> */}
                  </Col>
                  <Col xs={12} lg={6} className='ci'>
                    <Row className='r11'>
                      <div className='di3'>
                        <h4 className='hb900'>Pay ??? 0 Until you land a 5 LPA Job.</h4>
                        <h4 className='hb901'>Edureify Job Ready Full Stack Software Development Online Live Course helps you to learn exactly what you need for a high-paying job.</h4>

                      </div>
                      <Form className='fx'>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                          <h4 className='ch'>???Get Hired In Just 6 Months</h4>
                          <h4 className='ch'>???Live Online Training Course</h4>
                          <h4 className='ch'>???Learn From The Industry Expert</h4>
                          <h4 className='ch'>???1 year of Dedicated Career Mentorship Support</h4>
                          <h4 className='ch'>???Full Stack Developer Certification</h4>
                         
                        </Form.Group>
                      </Form>

                    </Row>
                  </Col>
                </Row>
              </Container>
            </div>

          </section>
          <section className='s7 tag'>
            <div className='fe'>
              <h4 className='hb300'>Your mentors </h4>
              <h4 className='hb301'>through this journey</h4>
            </div>
            <div className='fetch2'>


              <Row className='cr'>
                {
                  Cardjson.Cardmap.map((prod) => {
                    return (
                      // <React.Fragment>

                      <Col xs={12} md={2} lg={3} className='cr2'>
                        {/* <Card className='cards'> */}
                        {/* <Card.Img variant="top" className='img20' src={prod.card_img} /> */}
                        <img className='img70' alt='logo' src={prod.card_img} />

                        <Card.Title><h5 className='ht2'>{prod.card_title}</h5></Card.Title>
                        {/* <h3>{prod.card_title}</h3> */}
                        <img className='img90' src={prod.card_logo} />


                        {/* <Card.Text>
                            <h3>Price :{prod1.price}</h3>
                            <p>{prod1.description}</p>
                          </Card.Text> */}



                        {/* </Card> */}
                      </Col>

                      // </React.Fragment>
                    )
                  })
                }


              </Row>

              <button className='bt250'><a className='lin' href="/formpage">Start Learning</a></button>

            </div>
          </section>
          <section className='s8 tag'>
            <div className='fe2'>
              <h2 className='hb302'>Featured in</h2>
            </div>
            <Container>
              <Row className='ro11'>
                {/* <Col xs={12} sm={1} md={2} lg={4}>
              <img src='../../../../Images/seen-1.webp' className='img189' />
            </Col> */}
                <Col xs={12} sm={1} md={2} lg={4}>
                  <img src='../../../../Images/seen-2.webp' className='img189' />
                </Col>
                {/* <Col xs={12} sm={1} md={2} lg={4}>
              <img src='../../../../Images/seen-5.webp' className='img189' />
            </Col> */}
              </Row>
              {/* <Row className='ro12'>
            <Col xs={12} sm={1} md={2} lg={4}>
              <img src='../../../../Images/seen-9.webp' className='img190' />
            </Col>
            <Col xs={12} sm={1} md={2} lg={4} className='co9'>
              <img src='../../../../Images/seen-8.webp' className='img192' />
            </Col>
            <Col xs={12} sm={1} md={2} lg={4} className='co9'>
              <img src='../../../../Images/seen-6.webp' className='img192' />
            </Col>
          </Row> */}
            </Container>

          </section>
        </div>
    

  )
}
