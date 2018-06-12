import React, { Component } from 'react';
import { ThemeContext, theme } from './theme-context';
import Container from './Containers/Container';
import Graph from 'react-graph-vis';
import { Row, Col, Grid } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from './Components/NavBar';
import ProductsComponent from './Components/ProductsComponent'
import HomeComponent from './Components/HomeComponent'
import { unregister } from './Interceptor'
console.warn("________", unregister)
// import Button from 'react-bootstrap/lib/Button';
class App extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <div>
            <Route exact path="/" component={HomeComponent} />
          </div>
          <div className="container customContainer">
            <div className="row">
              <div>
                <Route path="/Product/:id?" component={ProductsComponent} />

                {/* <Route path="/Product" component={ProductsComponent} />
                <Route path="/Product/:id" component={ProductsComponent} /> */}
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}


export default App; 
