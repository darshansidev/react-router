
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Form as BootstrapForm, Container, Row, Col } from 'react-bootstrap';
import './Registration.css'; // Combined CSS file for Registration styles
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className="registration-wrapper">
            <Container className="registration-container">
                <Row>
                    <Col xs={12} md={6} className="image-container">
                        <img src='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' alt="Registration Image" className="registration-image" />
                    </Col>
                    <Col xs={12} md={6} className="form-container">
                        <h1 className="registration-header">Registration</h1>
                        <Formik
                            initialValues={{ username: '', email: '', password: '' }}
                            onSubmit={(values) => {
                                // Handle form submission for registration
                                console.log(values);
                            }}
                        >
                            <Form>
                                <BootstrapForm.Group controlId="username">
                                    <BootstrapForm.Label>Username</BootstrapForm.Label>
                                    <Field type="text" name="username" className="form-control" />
                                    <ErrorMessage name="username" component="div" />
                                </BootstrapForm.Group>

                                <BootstrapForm.Group controlId="email">
                                    <BootstrapForm.Label>Email</BootstrapForm.Label>
                                    <Field type="email" name="email" className="form-control" />
                                    <ErrorMessage name="email" component="div" />
                                </BootstrapForm.Group>

                                <BootstrapForm.Group controlId="password">
                                    <BootstrapForm.Label>Password</BootstrapForm.Label>
                                    <Field type="password" name="password" className="form-control" />
                                    <ErrorMessage name="password" component="div" />
                                </BootstrapForm.Group>

                                <Button type="submit" className="registration-button">Register</Button>
                                <p className='mt-3'>
                                    I have already an account? <Link to="/" className="">Login here</Link>
                                </p>
                            </Form>
                        </Formik>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Registration;
