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
            password: '',
            account: true,
            name: '',
            dob:'',
            nameError:''
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
    valid(item, type) {

        let itemValue = item.target.value;


        switch (type) {
            case "name":
               {
                   if(itemValue.length<6)
                    {
                        item.target.style.color="red";
                        this.state.nameError=<span style={{color:'red'}}>Error Message </span>;
                    }
                    else
                        {
                            item.target.style.color="";
                            this.state.nameError="";
                        }
                this.setState({ name: itemValue });
                break;
               }
            case "email":
                this.setState({ email: itemValue });
                break;
            case "dob":
                this.setState({ dob: itemValue });
                break;
            case "password":
                this.setState({ password: itemValue });
                break;
               
        }
        console.warn("valid obj", itemValue.length)
        
        
        
        
    }

    render() {
        return (
            <div>
                <Modal show={this.props.showModal}>
                    <Modal.Header >
                        <Modal.Title>Login/Sign up</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        {
                            this.state.account ?
                                <div>
                                    <Form>
                                        <div>
                                            <label>
                                                Email*
                                                    <Input value={this.state.name} className="form-control email" name='email' onChange={(text) => { this.setState({ email: text.target.value }) }} />
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                Password*
                                                     <Input type='password' name='password' value={this.state.password} className="form-control" onChange={(text) => { this.setState({ password: text.target.value }) }} />
                                            </label>
                                        </div>
                                        <div>
                                            <Button onClick={() => { this.login() }} className="btn btn-primary">Login</Button>
                                            <Button onClick={() => this.props.hideModel()}>Close</Button>
                                        </div>
                                    </Form>
                                    <a className="btn" onClick={() => { this.setState({ account: false }) }} >Sign Up</a>
                                </div>
                                :
                                <div>
                                    <Form>
                                        <div>

                                            <label>
                                                Name* {this.state.nameError}
                                                      <Input value={this.state.name} className="form-control " name='name' onChange={(text) => { this.valid(text, "name") }} />
                                            </label>
                                        </div>
                                        <div>

                                            <label>
                                                Email*
                                                      <Input value={this.state.email} className="form-control" name='email' onChange={(text) => { this.valid(text, "email") }} />
                                            </label>
                                        </div>
                                        <div>

                                            <label>
                                                DOB
                                                      <Input value={this.state.dob} className="form-control" name='email' onChange={(text) => { this.valid(text,"dob") }} />
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                Password*
                                                      <Input type='password' name='password' value={this.state.password} className="form-control" onChange={(text) => { this.valid(text,"password") }} />
                                            </label>
                                        </div>
                                        <div>
                                            <Button onClick={() => { this.login() }} className="btn btn-primary">Sign up</Button>
                                            <Button onClick={() => this.props.hideModel()}>Close</Button>
                                        </div>
                                    </Form>
                                    <a className="btn" onClick={() => { this.setState({ account: true }) }}  >Login</a>
                                </div>

                        }
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}


export default Login; 
