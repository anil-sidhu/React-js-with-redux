import React, { Component } from 'react';
import Container from '../Containers/Container';
import ReactGoogleMapLoader from "react-google-maps-loader"
import { GoogleComponent } from './index.js'

const API_KEY = "AIzaSyDGwf3wXD5z0XqaolwPbRVRKGIkDnK5ql4"

class HomeComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      place: null,
    };
  }

  render() {
    // console.warn("test", this.state.place)
    return (
      <div className={"wrapper"} >
        <GoogleComponent
          apiKey={API_KEY}
          language={'en'}
          country={'country:in'}
          coordinates={true}
          //locationBoxStyle={'custom-style'}
          //locationListStyle={'custom-style-list'}
          onChange={(e) => { this.setState({ place: e }) }} />
      </div>
    )
  }
}


export default HomeComponent;
