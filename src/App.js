import React, { Component } from 'react';
import { ThemeContext, theme } from './theme-context';
import Container from './Containers/Container';
import Graph from 'react-graph-vis';
import { Row, Col, Grid } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from './Components/NavBar';
import ProductsComponent from './Components/ProductsComponent'
import HomeComponent from './Components/HomeComponent'
import Meter from './Containers/MeterContainer'




// import Button from 'react-bootstrap/lib/Button';


class App extends Component {
  render() {
    console.warn("props")
    return (
      <Router>
        <div>
          <NavBar />
          <div>
            <Route exact path="/" component={HomeComponent} />
          </div>
          <div className="container customContainer">
            <div className="row">
              <div className="col-sm-7">
                <Route path="/Product" component={ProductsComponent} />
              </div>
              <div className="col-sm-2">
                <Meter data={10} />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}


export default App; 
