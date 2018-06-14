import React, { Component } from 'react';
import {
    Button, Alert, Navbar, MenuItem, NavDropdown, Nav, NavItem, Header, SplitButton, Modal,
} from 'react-bootstrap';
// import Button from 'react-bootstrap/lib/Button';
import { BrowserRouter as Router, Route, Link, } from "react-router-dom";

import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';


class Login extends Component {

    constructor(props) {
        super(props);
 

        this.state = {
            show: false,
            email: '',
            password: ''
        };
    }
     login() {
        let loginObj = {};
        loginObj.email = this.state.email;
        loginObj.password = this.state.password; 
        this.props.loader(true),
        this.props.hideModel() 
        this.props.login(4)
    } 
    render() {
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
                            <Input value={this.state.email} className="form-control" name='email' onChange={(text) => { this.setState({ email: text.target.value }) }} />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Password*
                            <Input type='password' name='password' value={this.state.password} className="form-control" onChange={(text) => { this.setState({ password: text.target.value }) }}  />
                                </label>
                            </div>
                            <div>
                                <Button onClick={() => { this.login() }} className="btn btn-primary">Submit</Button>
                                <Button onClick={() => this.props.hideModel()}>Close</Button>
                            </div>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}


export default Login; 
