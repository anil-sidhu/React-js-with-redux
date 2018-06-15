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
            loggedIn: !!localStorage.getItem('loggedIn')
        }
    }
    handleShow() {
        this.setState({ show: true });
    }
    logOut() {
        this.props.logOut() 
    }
    test() {
        this.setState({ show: false })
    } 

    componentDidUpdate(prevProps) {
        {
          if (prevProps.loginReply != this.props.loginReply) {
            console.warn("inside nav",this.props.loginReply==prevProps.loginReply )
             if(this.props.loginReply){
            localStorage.setItem('loggedIn',this.props.loginReply);
             }
            this.setState({loggedIn:this.props.loginReply})
          }
        }      
      }  
      
    render() {
        console.warn("nav bar render",typeof(this.state.loggedIn),localStorage.getItem('loggedIn')) 
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
                                this.state.loggedIn ?
                                    <NavItem >
                                        <Link to="/logout">logout</Link>
                                    </NavItem>
                                    :
                                    <NavItem eventKey={2} href="#" bsStyle="primary" bsSize="large" onClick={() => this.handleShow()}>
                                        Login
                             </NavItem>
                            }
                            <NavItem eventKey={3} href="#"><Link to="/Product">Product</Link></NavItem>
                            <NavItem eventKey={3} href="#"><Link to="/ProfileComponent">ProfileComponent</Link></NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Login showModal={this.state.show} hideModel={this.test.bind(this)} />
            </div>

        );
    }
}


export default NavbarComponent; 
