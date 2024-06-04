import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Form as BootstrapForm, Container } from 'react-bootstrap';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="login-wrapper">
            <Container className="login-container">
                <div className="login-content">
                    <div className="image-container">
                        <img src='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' alt="Login Image" className="login-image" />
                    </div>
                    <div className="form-container">
                        <h1 className="login-header">Login</h1>
                        <Formik
                            initialValues={{ email: '', password: '' }}
                            onSubmit={(values) => {
                                // Handle form submission here
                                console.log(values);
                                navigate('/admin');
                            }}
                        >
                            <Form>
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

                                <Button type="submit" className="login-button">Login</Button>
                                <p className='mt-3'>
                                    Don't have an account? <Link to="/registration" className="registration-link">Register here</Link>
                                </p>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Login;
