import { Container } from "react-bootstrap";
import logo from '../../assets/catchabreak.65b115fe8b8dc3.01177570.png'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
function Forms({InputText,HandleInput,HandleSubmit}){


    return(
        <>
            <Container className="mt-5">
                <div className="row">
                    <div className="col-xxl-12 d-flex justify-content-center">
                        <div className="col-xxl-7">
                            <img src={logo}/>
                        </div>
                    </div>
                    <div className="col-xxl-12">
                        <h3 className="text-center">Hotel Reservation Form</h3>
                        <p className="text-center">Please complete the form below.</p>
                        <p className="text-center mt-4 mb-5">Your registration will be verified prior to your arrival.</p>
                    </div>
                    <div className="col-xxl-12 d-flex justify-content-center">
                        <div className="col-xxl-7">
                            <Form onSubmit={HandleSubmit}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Control type="text" placeholder="Enter ID" name='id' value={InputText.id} hidden />
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter First Name" name="fname" value={InputText.fname} onChange={HandleInput}/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Last Name" name="lname" value={InputText.lname} onChange={HandleInput}/>
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control placeholder="1234 Main St" name="addr" value={InputText.addr} onChange={HandleInput}/>
                                </Form.Group>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Phone No.</Form.Label>
                                    <Form.Control type="number" placeholder="99999 99999" name="phone" value={InputText.phone} onChange={HandleInput}/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>E-mail</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name="email" value={InputText.email} onChange={HandleInput}/>
                                    </Form.Group>
                                </Row>
                                
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Age</Form.Label>
                                    <Form.Control type="number" placeholder="20" name="age" value={InputText.age} onChange={HandleInput}/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Number Of People</Form.Label>
                                    <Form.Control type="number" placeholder="4" name="people" value={InputText.people} onChange={HandleInput}/>
                                    </Form.Group>
                                </Row>
                                <div className="d-flex  justify-content-center mt-5">
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Forms;