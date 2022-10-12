import React,{useRef,useState} from 'react'

import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
// import { Radio, RadioGroup } from 'react-radio-group'
import './Myform.css'

const formValidate = (formValue) => {
    const errors = {};
    let emailValidate = RegExp('^([a-z0-9,-]+)@([a-z]{5,12}).([a-z.]{2,20})$');
    let validatePhone = RegExp('^[7-9][0-9]{9}$')
    if (!formValue.name) {
        errors.name = "Please enter Full Name";
    }

    if (!formValue.email) {
        errors.email = "Please enter Email";
    } else if (!emailValidate.test(formValue.email)) {
        errors.email = "Wrong Pattern";
    }
    if (!formValue.phone) {
        errors.phone = "Please enter Phone Number";
    } else if (!validatePhone.test(formValue.phone)) {
        errors.phone = "Please Enter 10 digit number";
    }
   
    console.log("Errors :", errors);
    return errors;
}

export default function Myform() {
    
//   const [showModal, setShowModal] = useState(false);
//     const modalRef = useRef();
//     const closeModal = (e) => {
//       if (e.target === modalRef.current) {
//         setShowModal(false);
//       }
//     };
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone:'',
            gen:''
            
            
        },
        validate: formValidate,
         onSubmit: (values) =>  {
            console.log("Reaceived Values :", values);

        }
    });






    return (
        <div className='s50'>
            <div className='pop' >
                <button  className='btpop'>X</button>
            </div>
            <div className='print'>
                <h2 className='hb80'>Help us get to</h2><h2 className='hb62'> know you</h2>
            </div>
             <Container> 
                <Form onSubmit={formik.handleSubmit}>
                    <Row>
                        <Col xs={12} lg={6}>
                            <Form.Group className="mb-3 sp5">
                                {/* <Form.Label className='lb' htmlFor='name'>Full Name</Form.Label> */}
                                <label className='lb'>Full Name*</label>
                                <Form.Control type="text" name='name' placeholder="Enter full name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.touched.name && formik.errors.name ? (<p className='err'>{formik.errors.name}</p>) : null}

                            </Form.Group>
                        </Col>
                        <Col xs={12} lg={6}>
                            <Form.Group className="mb-3 sp5">
                                {/* <Form.Label className='lb' htmlFor='email'>Email</Form.Label> */}
                                <label className='lb'>Email*</label>
                                <Form.Control type="email" name='email' placeholder="Enter email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.touched.email && formik.errors.email ? (<p className='err'>{formik.errors.email}</p>) : null}

                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} lg={6}>
                            <Form.Group className="mb-3" sp5>
                                {/* <Form.Label className='lb' htmlFor='phone'>Phone</Form.Label> */}
                                <label className='lb'>Phone*</label>
                                <Form.Control type="text" name='phone' placeholder="Enter phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.touched.phone && formik.errors.phone ? (<p className='err'>{formik.errors.phone}</p>) : null}

                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} lg={6} className='sp3'>
                            <label className='lb'>Are you a:</label>
                            <Form.Group className="mb-3">
                              
                                <Form.Check
                                    inline
                                    type="radio"
                                    name='gen'
                                    value={formik.values.gen}
                                   
                                    id="fresher"
                                    label="Fresher"
                                    onChange={formik.handleChange}
                                    // defaultChecked={formik.values.gen === formik.values.name & formik.values.elail & formik.values.phone}
                                    onBlur={formik.handleBlur}
                                 />
                                <Form.Check
                                    inline
                                    type="radio"
                                    name='gen'
                                    value={formik.values.gen}
                                    
                                    id="gen"
                                    label="Experienced Candidate"
                                    onChange={formik.handleChange}
                                    // defaultChecked={formik.values.gen === formik.values.name & formik.values.elail & formik.values.phone}
                                    onBlur={formik.handleBlur}
                                />
                                 
                            </Form.Group>
                            
                        </Col>
                    </Row>
                    <Button className='bt100' type="submit" name='submit' disabled={!(formik.isValid && formik.dirty)}><Link to={"/newformpage"}>Next</Link></Button>
                </Form>
             </Container> 
        </div>
    )
}
