import React, { Component } from 'react';
import {
    Button, Alert, Navbar, MenuItem, NavDropdown, Nav, NavItem, Header, SplitButton, Modal,
} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import Login from '../Containers/LoginContainer'
class NavbarComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            show: false,
        }
    }
    handleShow() { this.setState({ show: true }); }
    logOut() { this.props.logOut() }
    hideModel() { this.setState({ show: false }) }
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
                            {
                                this.props.loginReply ?
                                    <NavItem >
                                        <Link to="/logout">logout</Link>
                                    </NavItem>
                                    :
                                    <NavItem eventKey={2} href="#" className="primary" onClick={() => this.handleShow()}>
                                        Login
                             </NavItem>
                            }
                            <NavItem eventKey={3} href="#"><Link to="/Product">Product</Link></NavItem>
                            <NavItem eventKey={3} href="#"><Link to="/ProfileComponent">ProfileComponent</Link></NavItem>
                            <NavItem eventKey={3} href="#"><Link to="/map">Map</Link></NavItem>
                            {
                                this.props.loginReply ?
                                    <NavItem eventKey={3} href="#"><Link to="/upload">Upload</Link>
                                        <Link style={{ paddingLeft: "20px" }} to="/lazyLoad">lazy Load</Link>
                                    </NavItem>
                                    : null

                            }

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Login showModal={this.state.show} hideModel={this.hideModel.bind(this)} />
            </div>

        );
    }
}


export default NavbarComponent; 
