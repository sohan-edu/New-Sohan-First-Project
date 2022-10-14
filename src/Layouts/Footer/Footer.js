import React from 'react'
import './Footer.css'
import { Row, Col, Container } from 'react-bootstrap'
import { FaFacebook } from "react-icons/fa";
import { BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <div>
      <section className='s10'>
        <Container className='con'>
          <Row>
            <Col xs={12} lg={4}>
              <div className='foot1'>
                <div className='img'>
                  <img className='myfoot' src="../../../../Images/edureify.svg" alt='logo' />
                </div>
                <div className='p1'>
                  Edureify Is on a mission to help people
                  build great careers,We belive that quality education
                  should be accessible to everyone without financial or
                  geographical barriers-thus, We offer skill based
                  programs complete placement assistance.
                </div>
              </div>
            </Col>
            <Col xs={12} lg={2}>
              <Container>
                <div className='foot'>
                  <h4 className='hb15'>Resources</h4>



                  <ul className='le'>
                    <li className='list6'>Privacy Policy</li>
                    <li className='list6'>Terms</li>
                    <li className='list6'>ISA</li>
                    <li className='list6'>FAC</li>
                    <li className='list6'>Blog</li>

                  </ul>




                </div>
              </Container>
            </Col>
            <Col xs={12} lg={3}>
              <div className='foot'>
                <h1 className='hb15'>Connect</h1>
                <ul>

                  <li className='list6'>Mentor</li>
                  <li className='list6'>Hiring Partners</li>
                  <li className='list6'>Work With Us</li>
                  <li className='list6'>Contact Us</li>
                </ul>
              </div>
            </Col>
            <Col xs={12} lg={3}>
              <div className='foot'>
                <h1 className='hb15'>Stay In Touch</h1>
                <ul>
                  <li className='list6'>
                    <FaFacebook />Facebook
                  </li>
                  <li className='list6'>
                    <BsInstagram />Instagram
                  </li>
                  <li className='list6'>
                    <BsLinkedin />Linkedin
                  </li>
                  <li className='list6'>
                    <BsYoutube />Youtube
                  </li>

                </ul>
              </div>
            </Col>

          </Row>
        </Container>
        <div className='fz'>
          <h5 className='fb'>© Copyright 2022 QuantumBit technologies Pvt. Ltd. All Rights Reserved.</h5>
        </div>
      </section>
    </div>
  )
}
