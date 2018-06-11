import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import {Link, } from "react-router-dom";

class RedComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: true,
        };
     
    }
    async reduxTest() {
        await this.props.toggleTodo("simple")
        await this.props.SpeedMeter(2)
    }
    render() {
        console.warn("a sample", this.props.todos)
        return (
            <div className="App">
                {/* <h3>ID: {match.params.id}</h3> */}
                <button className="btn" onClick={() => { this.reduxTest() }} >Load Data </button>
                <Table striped bordered condensed hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    {this.props.todos.map((dataItem, i) =>

                        <tbody>
                            <tr>
                                <td>{i}</td>
                                <td> 
                                    <Link to={{pathname:'/Product/'+dataItem.id}}>{dataItem.id}</Link>
                                    <button className="btn" onClick={() => { this.props.SpeedMeter(dataItem.id) }} >{dataItem.id}</button></td>
                                <td>{dataItem.mobile}</td>
                                <td>{dataItem.email}</td>
                            </tr>
                        </tbody>
                    ) 
                    }

                </Table>

            </div>
        );
    }
}

export default RedComponent;




// import React, { Component } from 'react';
// import OtherScreen from './OtherScreen';
// import { ThemeContext, theme } from './theme-context';
// import Container from './Containers/Container';
// import Graph from 'react-graph-vis';
// import ReactSpeedometer from "react-d3-speedometer";
// import { Button, Alert, Navbar, MenuItem, NavDropdown, Nav, NavItem, Header, SplitButton } from 'react-bootstrap';
// NavBar
// // import Button from 'react-bootstrap/lib/Button';


// class App extends Component {
//   render() {

//     console.warn("props")
//     return (
//       <div>

//       </div>

//     );
//   }
// }


// export default App; 
