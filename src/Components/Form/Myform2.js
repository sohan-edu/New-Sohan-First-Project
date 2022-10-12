import React,{useState,useEffect} from 'react'
import './Myform2.css'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

const formValidate = (formValue) => {
    const errors = {};

    if (!formValue.degree) {
        errors.degree = "Please enter Degree";
    }
    if (!formValue.degree) {
        errors.compli = "Please enter Complition Year";
    }


   
    console.log("Errors :", errors);
    return errors;
}

export default function Myform2() {
    const formik = useFormik({
        initialValues: {
            degree: '',
            compli: '',
            che:''
            
            
            
        },
        validate: formValidate,
        onSubmit: (values) => {
            console.log("Reaceived Values :", values);

        }
    });

    const degrees =[
        {id:"1",name:"B.E Or B.Tech CS/IT/ECE"},
        {id:"2",name:"B.E Or B.Tech Other"},
        {id:"1",name:"M.S Or M.Tech"},
        {id:"1",name:"BCA"},
        {id:"1",name:"MCA"}
    ];
    const [degree, setDegree] = useState([]);
    useEffect(()=>{
        setDegree(degrees);
    },[])

    const completions =[
        {id:"1",name1:"Before 2021"},
        {id:"2",name1:"2021"},
        {id:"1",name1:"2022"},
        {id:"1",name1:"2023"},
        {id:"1",name1:"After 2023"}
    ];
    const [completion, setCompletion] = useState([]);
    useEffect(()=>{
        setCompletion(completions);
    },[])


    return (
        <div className='s50'>
            <div className='print'>
                <h2 className='hb80'>Help us get to</h2><h2 className='hb62'> know you</h2>
            </div>
            <Container>
                <Form onSubmit={formik.handleSubmit}>
                    <Row className='rt'>
                        <Col xs={12} lg={6}>
                            <Form.Group className="mb-3">

                                <label className='lb'>Highest Degree*</label>
                                <Form.Control  as="select" name='degree' placeholder='degree' value={formik.values.degree} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                                <option value="0">Select Degrees</option>
                                    {
                                        degree &&
                                        degree !==undefined ?
                                        degree.map((ctr,index) => {
                                            return(
                                                <option key={index} value={ctr.id}>{ctr.name}</option>
                                            )
                                        })
                                        :"No Degree"
                                    }
                                     
                                        
                                      
                                    
                                </Form.Control>
                                {formik.touched.degree && formik.errors.degree ? (<p className='err'>{formik.errors.degree}</p>) : null}




                            </Form.Group>
                        </Col>

                        <Col xs={12} lg={6}>
                            <Form.Group className="mb-3">
                               
                                <label className='lb'>Year of Completion*</label>
                                <Form.Control as="select" name='compli' placeholder="Year Of Complition" value={formik.values.compli} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                                <option value="0">Year Of Complition</option>
                                    {
                                        completion &&
                                        completion !==undefined ?
                                        completion.map((ctr,index) => {
                                            return(
                                                <option key={index} value={ctr.id}>{ctr.name1}</option>
                                            )
                                        })
                                        :"No Degree"
                                    }
                                </Form.Control>
                                {formik.touched.compli && formik.errors.compli ? (<p className='err'>{formik.errors.compli}</p>) : null}


                            </Form.Group>
                        </Col>
                        <Row>
                            <Col xs={12} lg={12} className='sp100'>
                            
                            <Form.Group className="mb-3">
                              
                                <Form.Check
                                    inline
                                    type="checkbox"
                                    name='che'
                                    
                                    value={formik.values.che}
                                   
                                    id="greek"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    
                                   
                                 />
                              
                                 
                            </Form.Group>
                            <label className='lb2'><p className='pb23'> By signing up, you agree to the</p><p className='pb27'>Terms and Conditions</p><p className='pb29'> of Geekster (QuantumBit technologies Pvt. Ltd)*</p></label>
                            </Col>
                        </Row>
                    </Row>
                    <div className='bt99'>
                    <Button className='bt300' type="submit" name='submit'><Link to={"/formpage"}>Back</Link></Button>
                    <Button className='bt100' type="submit" name='submit' disabled={!(formik.isValid && formik.dirty)}><Link to={"/congretpage"}>Submit</Link></Button>
                    </div>
                    
                </Form>
            </Container>


        </div >
    )
}
