import React, { Component } from 'react';
import {
    Button, Alert, Navbar, MenuItem, NavDropdown, Nav, NavItem, Header, SplitButton, Modal,
} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, } from "react-router-dom";
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Calendar, { formatDate } from 'react-calendar';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            email: '',
            password: '',
            account: true,
            name: '',
            dob: "",
            showCalender: false,
            nameError: '',
            emailError: ''
        };
    }
    signUp() {
        alert("done")
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
                    if (itemValue.length < 2) {
                        item.target.style.color = "red";
                        this.state.nameError = <span style={{ color: 'red' }}>Error Message </span>;
                    }
                    else {
                        item.target.style.color = "";
                        this.state.nameError = "";
                    }
                    this.setState({ name: itemValue });
                    break;
                }
            case "email":
                let errorMsg
                var emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                let validation = emailValidation.test(String(itemValue).toLowerCase());
                if (!validation) {
                    errorMsg = "Not valid"
                    item.target.style.color = "red";
                    this.state.emailError = <span style={{ color: 'red' }}>Error Message </span>;
                }
                else {
                    item.target.style.color = "";
                    this.state.emailError = "";
                }
                this.setState({ email: itemValue, });
                break;
            case "password":
               { this.setState({ password: itemValue });}
                break;

        }
    }
    onChangeDob(selectedDate) {
        var month = selectedDate.getMonth();
        var year = selectedDate.getFullYear();
        var date = selectedDate.getDate();
        this.setState({
            dob: date + "/" + month + "/" + year,
            showCalender: false
        })
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
                                                Email* {this.state.emailError}
                                                <Input value={this.state.email} className="form-control" name='email' onChange={(text) => { this.valid(text, "email") }} />
                                            </label>
                                        </div>
                                        <div>
                                            {
                                                this.state.showCalender ?
                                                    <Calendar
                                                        maxDate={new Date("2014-05-11")}
                                                        onChange={this.onChangeDob.bind(this)}

                                                    />
                                                    : null
                                            }
                                            <label>
                                                DOB
                                                <Input onClick={() => this.setState({ showCalender: true })} type="text" value={this.state.dob} className="form-control" name='set' />
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                Password*
                                                      <Input type='password' name='password' value={this.state.password} className="form-control" onChange={(text) => { this.valid(text, "password") }} />
                                            </label>
                                        </div>
                                        <div>
                                            <Button onClick={() => { this.signUp() }} className="btn btn-primary">Sign up</Button>
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
