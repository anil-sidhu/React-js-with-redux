import React, { Component } from 'react';
import {
    Button, Alert, Navbar, MenuItem, NavDropdown, Nav, NavItem, Header, SplitButton, Modal,
} from 'react-bootstrap';
// import Button from 'react-bootstrap/lib/Button';
import { BrowserRouter as Router, Route, Link, } from "react-router-dom";

import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import validator from 'validator';
const required = (value) => {
    if (!value.toString().trim().length) {
        // We can return string or jsx as the 'error' prop for the validated Component
        return 'require';
    }
};

const email = (value) => {
    if (!validator.isEmail(value)) {
        return `${value} is not a valid email.`
    }
};

const lt = (value, props) => {
    // get the maxLength from component's props
    if (!value.toString().trim().length > props.maxLength) {
        // Return jsx
        return <span className="error">The value exceeded {props.maxLength} symbols.</span>
    }
};

const password = (value, props, components) => {
    // NOTE: Tricky place. The 'value' argument is always current component's value.
    // So in case we're 'changing' let's say 'password' component - we'll compare it's value with 'confirm' value.
    // But if we're changing 'confirm' component - the condition will always be true
    // If we need to always compare own values - replace 'value' with components.password[0].value and make some magic with error rendering.
    if (value !== components['confirm'][0].value) { // components['password'][0].value !== components['confirm'][0].value
        // 'confirm' - name of input
        // components['confirm'] - array of same-name components because of checkboxes and radios
        return <span className="error">Passwords are not equal.</span>
    }
};
class Login extends Component {

    constructor(props) {
        super(props);


        this.state = {
            show: false
        };
    }

   
    render() {
        console.warn("login reply",this.props.loginReply)
        return (
            <div>
                <Modal show={this.props.showModal}>
                    <Modal.Header >
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <div>
                                <label>
                                    Email*
                            <Input value='' className="form-control" name='email' validations={[required, email]} />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Password*
                            <Input type='password' name='password' className="form-control" validations={[required]} />
                                </label>
                            </div>
                            <div>
                                <Button onClick={()=>{this.props.login(3)}} className="btn btn-primary">Submit</Button>
                                <Button onClick={() =>  this.props.hideModel()}>Close</Button>
                            </div>
                        </Form>
                    </Modal.Body>
                </Modal>


            </div>

        );
    }
}


export default Login; 
