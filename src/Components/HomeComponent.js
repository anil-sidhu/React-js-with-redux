import React, { Component } from 'react';
import Container from '../Containers/Container';
import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactGooglePlacesSuggest from "react-google-places-suggest"
const API_KEY = "AIzaSyDGYPsuniZyRC18C2wTO7HBLnmmr8ipLbI" // fake

class HomeComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: null,
    };
  }
  handleCallback(data) {
    console.warn("status", data)
  }
  state = {
    search: "",
    value: "",
  }

  handleInputChange(e) {
    this.setState({ search: e.target.value, value: e.target.value })
  }

  handleSelectSuggest(suggest) {
    console.log(suggest)
    this.setState({ search: "", value: suggest.formatted_address })
  }

  render() {
    const { search, value } = this.state
    return (
      <ReactGoogleMapLoader
        params={{
          key: API_KEY,
          libraries: "places,geocode",
        }}
        render={googleMaps =>
          googleMaps && (
            <div>
              <ReactGooglePlacesSuggest
                autocompletionRequest={{ input: search }}
                googleMaps={googleMaps}
                onSelectSuggest={this.handleSelectSuggest.bind(this)}
              >
                <input
                  type="text"
                  value={value}
                  placeholder="Search a location"
                  onChange={this.handleInputChange.bind(this)}
                />
              </ReactGooglePlacesSuggest>
            </div>
          )
        }
      />
    )
  }
}


export default HomeComponent;
