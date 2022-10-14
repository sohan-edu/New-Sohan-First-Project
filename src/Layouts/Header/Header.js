import React from 'react'

import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import { Nav, Navbar, Container, Button } from 'react-bootstrap'
import './Header.css'


export default function Header() {
  // let location = useLocation();
  // useEffect(() => {
  //   console.log("Location :", location, "\nPathName :", location.pathname);
  // }, [location]);
  return (
    <div>
      {/* <Navbar className='head'>
        <div className='headermid'>
          <Container className='nav1'>


            <Navbar.Brand as={Link} to="/">Navber</Navbar.Brand>

            <Nav className="me">
              <div className='my'>
                <div className='img'>
                  <img className='mylogo' src="../../../../Images/logo.svg" alt='logo' />
                </div>
                <div className='links2'>
                  <Nav.Link as={Link} to="/" className={`${location.pathname === "/" ? "active" : " "}`}>Home</Nav.Link>
                  <Nav.Link as={Link} to="/coursespage" className={`${location.pathname === "/coursespage" ? "active" : " "}`}>Courses</Nav.Link>
                  <Nav.Link as={Link} to="/hiretalentpage" className={`${location.pathname === "/hiretalentpage" ? "active" : " "}`}>Hire Talent</Nav.Link>

                  <Nav.Link as={Link} to="/blogpage" className={`${location.pathname === "/blogpage" ? "active" : " "}`}>Blog</Nav.Link>
                  <Nav.Link as={Link} to="/isapage" className={`${location.pathname === "/isapage" ? "active" : " "}`}>ISA</Nav.Link>
                  
                  <div className='bt'>
                    <button className='bt56'>Register Now</button>
                  </div>
                </div>



              </div>

            </Nav>


          </Container>
        </div>
      </Navbar> */}

      {/* <span class="MuiTouchRipple-root css-w0pj6f"></span></button></div></div></div></div></div> */}
      <div class="jsx-b36e8fc7955e62bb header sticky hidden">
        <div class="jsx-b36e8fc7955e62bb header-container">
          <div class="jsx-b36e8fc7955e62bb p-1 d-flex header-inner max-width mo">
            <div class="jsx-2053da81e1574215 float-left mr-auto cursor-ptr dis">
              <img className='mylogo' src="../../../../Images/edureify.svg" alt='logo' class="jsx-2053da81e1574215 geekster-logo" />

            </div>
            <div class="jsx-b36e8fc7955e62bb sm-hide mr-auto my">
              <div class="jsx-301128d6458f1593 mr-auto ml-auto">
                <div class="jsx-301128d6458f1593 d-flex menu mp">
                  <div class="jsx-301128d6458f1593 link active ac">
                    <a class="jsx-301128d6458f1593 menu__item" href="/" target="_blank">Home</a>
                  </div>
                  {/* <div class="jsx-301128d6458f1593 link">
                    <div class="css-1t62lt9">
                      <a class="jsx-301128d6458f1593 menu__item" href="/coursespage">Courses</a>
                    </div>
                  </div> */}
                  {/* <div class="jsx-301128d6458f1593 link">
                    <a class="jsx-301128d6458f1593 menu__item" href="/hiretalentpage">HireTalent</a>
                  </div> */}
                  <div class="jsx-301128d6458f1593 link">
                    <a class="jsx-301128d6458f1593 menu__item" href="/blogpage">Blog</a>
                  </div>
                  <div class="jsx-301128d6458f1593 link">
                    <a class="jsx-301128d6458f1593 menu__item" href="/isapage">ISA</a>
                  </div>

                </div>
              </div>

            </div>
            <div class="bt2">
            <div class="bt">
            <button class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root btn secondary small contained  css-j06rf4" tabindex="0" type="button">
            <a className='lin' href="/formpage">Register Now</a>  
            {/* <Link className='lin' style={{color: 'white'}} to={"/formpage"}>Register Now</Link> */}
              
              <span class="MuiTouchRipple-root css-w0pj6f"></span>
            </button>
            </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}
