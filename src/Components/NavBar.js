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
class NavBar extends Component {

    constructor(props, context) {
        super(props, context);


        this.state = {
            show: false
        };
    }


    handleShow() {
        this.setState({ show: true });
    }

    handleClose() {
        this.setState({ show: false });
    }
    
    render() {
        return (
            <div>

                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Company-x</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#"><Link to="/">Home</Link></NavItem>
                            <NavItem eventKey={2} href="#" bsStyle="primary" bsSize="large" onClick={() => this.handleShow()}>
                                Launch demo modal
                             </NavItem>
                            <NavItem eventKey={3} href="#"><Link to="/Product">Product</Link></NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Modal show={this.state.show}>
                    <Modal.Header >
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <h3>Login</h3>
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
                                <Button>Submit</Button>
                            </div>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => this.handleClose()}>Close</Button>
                    </Modal.Footer>
                </Modal>


            </div>

        );
    }
}


export default NavBar; 
