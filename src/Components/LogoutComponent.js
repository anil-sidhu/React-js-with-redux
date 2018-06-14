import React, { Component } from 'react';
import {
    Button, Alert, Navbar, MenuItem, NavDropdown, Nav, NavItem, Header, SplitButton, Modal,
} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
 

class LogoutComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            email: '',
            password: ''
        }; 
    
    }
 componentDidMount()
 {
    this.props.logout();  
 }
    render() {
      console.warn("test...")
        return ( 
            <div>
                <h1>
                    Logout
                    </h1>
                    
                       <div>
                           
                           <Redirect
                                        to={{
                                            pathname: "/",
                                            state: { from: this.props.location }
                                        }}
                                    />
                           </div>
                        
            </div>

        );
    }
}


export default LogoutComponent; 
