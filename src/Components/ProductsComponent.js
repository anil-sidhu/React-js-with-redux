import React, { Component } from 'react';
import Container from '../Containers/Container';
import Meter from '../Containers/MeterContainer'
import { Link, } from "react-router-dom";

class ProductsComponent extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    console.warn("test match", )
    return (
      <div>
        {/* <Meter data={10} /> */}
           {/* <NavBar loggedIn={true} /> */}
        <div className="col-sm-7">
          
            {/* !this.props.match.params.id ?
              <Container />
              :
              <div>
                <Link to='/Product/'>Go Back</Link>
                <h1>User Id :{this.props.match.params.id}
                </h1> 
              </div> */}
          
        </div>  
        <div className="col-sm-2">
          <Meter data={10} />
        </div>
      </div>

    );
  }
}


export default ProductsComponent; 
