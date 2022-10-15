import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Blog from '../Components/Blog/Blog'
import Courses from '../Components/Courses/Courses'
import Congrate from '../Components/Form/Congrate'
import Modal from '../Components/Form/M_modal'

import Myform from '../Components/Form/Myform'
import Myform2 from '../Components/Form/Myform2'
// import Myform from '../Components/Form/Myform'
import HireTalent from '../Components/HireTalent/HireTalent'
import Home from '../Components/Home/Home'
import ISA from '../Components/ISA/ISA'
import PNF from '../Components/PageNotFound/PNF'
import Footer from '../Layouts/Footer/Footer'
import Header from '../Layouts/Header/Header'
import Whatsapp from '../Components/Whatsapp/Whatsapp'

export default function RootRoute() {
  const triggerText = 'Open form';
  const onSubmit = (event) => {
    event.preventDefault(event);
    // console.log(event.target.name.value);
    // console.log(event.target.email.value);
  };
  return (
    <>
      <Router>
        <Header />



        <Routes>
          <Route path="" element={<Home />} triggerText={triggerText} onSubmit={onSubmit} />


          <Route path="coursespage" element={<Courses />} />


          <Route path="hiretalentpage" element={<HireTalent />} />
          <Route path="blogpage" element={<Blog />} />
          <Route path="isapage" element={<ISA />} />
          
          <Route path="formpage" element={<Myform />} />
          <Route path="newformpage" element={<Myform2 />} />
          <Route path="congretpage" element={<Congrate />} />
          <Route path="modalpage" element={<Modal />} />
          


          <Route path="*" element={<PNF />} />










        </Routes>
        <Footer />
        <Whatsapp/>


      </Router>
    </>
  )
}
