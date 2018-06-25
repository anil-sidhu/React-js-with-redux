import React, { Component } from 'react';
import { ThemeContext, theme } from './theme-context';
import Container from './Containers/Container';
import Graph from 'react-graph-vis';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import ProductsComponent from './Components/ProductsComponent'
import HomeComponent from './Components/HomeComponent'
import { unregister } from './Interceptor'
import Loader from './utility/loader'
import Logout from './Containers/LogoutContainer'
import ProfileComponent from './Components/ProfileComponent'
import ProtectedComponent from './Components/ProtectedComponent'
import Navbar from './Containers/NavbarContainer';
import Upload from './Containers/UploadContainer';
import LazyLoad from './Containers/LazyLoadContainer';
import Map from './Containers/MapContainer';
import Validation from './Containers/ValidationContainer';


class App extends Component {
  constructor(props) {
    super(props)  
  };


  render() {    
    return ( 
      <Router> 
        <Switch >
        <div >
          <Loader toggle={this.props.isLoading} />
          <Navbar  /> 
         
          <div className="container customContainer">
            <div className="row">
                <Route path="/Product/:id?" component={ProductsComponent} />
                <Route exact path="/" component={HomeComponent} />
                <Route exact path="/logout" component={Logout} />
                <ProtectedComponent path="/ProfileComponent" component={ProfileComponent} />
                <Route exact path="/lazyLoad" component={LazyLoad} />
                <Route exact path="/map" component={Map} />  
                <Route exact path="/validation" component={Validation} />   
                 
                         
                
            </div>
          </div> 
        </div>
        </Switch>
      </Router>
     
    );
  }
}

App.defaultProps={
  counter:'tap'
} 
export default App; 
