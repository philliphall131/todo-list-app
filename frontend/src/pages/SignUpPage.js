import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Col } from "react-bootstrap";
import AuthAPI from "../utils/auth_utils";


function SignUpPage(props) {
    const navigate = useNavigate()

    const submitSignup = async (evt)=>{
        evt.preventDefault()
        let signupData = {
            username: evt.target.elements["username"].value,
            password: evt.target.elements["password"].value
        }
        let response = await AuthAPI.signUp(signupData)
        if (response) {
            props.setUser(response.username)
            navigate('/')
        }
    }
      
    return (
      <div className="login">
            <Col md="6">
                <h3>Signup Page</h3>
                <Form onSubmit={ (e)=>submitSignup(e) }>
                    <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control name="username" type="text" placeholder="Enter username" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
      </div>
    );
  }
  
  export default SignUpPage;