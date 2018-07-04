
import React, { Component } from 'react';
import axios from 'axios';

const API_KEY = "AIzaSyDGYPsuniZyRC18C2wTO7HBLnmmr8ipLbI" // fake
export class GoogleComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collection: null,
      collectionShow: false,
      place: '',
      allowCountry: '',
      location: '',
    };
  }

  componentDidMount() {
    document.addEventListener("mousedown", (e) => this.handleClickOutside(e));

  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", (e) => this.handleClickOutside(e));
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ collectionShow: false })
    }
  }
  getInfo(param) {
    let child = []
    let _co = this.props.country ? 'components=' + this.props.country + '&' : '';
    let _lang = this.props.language ? 'language=' + this.props.language + '&' : '';

    if (this.props.apiKey) {
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      let _fire = fetch(proxyurl + 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' +
        param + '&' + _lang + _co + 'key=' + this.props.apiKey
      )
      _fire.then((dataJson) => {
        return dataJson.json().then((data) => {
          if (data.status == "OK" && data.predictions.length > 0) {
            for (let loc = 0; loc < data.predictions.length; loc++) {
              child.push(React.createElement("li",
                { className: 'style-list', onClick: () => this.arrangeList(data.predictions[loc].description), },
                data.predictions[loc].description));
            }
          }
          else if (data.state == "REQUEST_DENIED") {
            child.push(React.createElement("li",
              { className: 'style-list' }, data.error_message));
          }
          else {
            child.push(React.createElement("li",
              { className: 'style-list' },
              "NO Result Found"));
          }
          let collection = React.createElement("ul", { className: 'style-unordered-list' },
            child
          )
          this.setState({ collection: collection, collectionShow: true })
        })
      })
    }
    else {
      child.push(React.createElement("li",
        { className: 'style-list', }, "No Api Key Provided"));
      let collection = React.createElement("ul", { className: 'style-unordered-list' },
        child
      )
      this.setState({ collection: collection, collectionShow: true })
    }
  }

  getCoordinates(address) {
    let key = "AIzaSyDGwf3wXD5z0XqaolwPbRVRKGIkDnK5ql4"

    if (this.props.apiKey) {
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      let _fire = fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '*key=' + key
      )
      return _fire.then((resp) => {
        return resp.json().then((res) => {
          console.warn("res,,,", res)
          return res

        })
      })
    }

  }

  async arrangeList(place) {
    let location = await this.getCoordinates(place)
    let googleObj = {}
    googleObj.place = place
    console.warn("location", location)
    if (location.status == 'OK') {
      googleObj.coordinates = location.results[0].geometry.location
    }
    else {
      googleObj.coordinates = "Error"
    }
    this.setState({ place: place })

    if (this.props.onChange) {
      this.props.onChange(googleObj)
    }

    this.setState({ collectionShow: false })

  }
  arrangeValue(item) {
    this.setState({ place: item })
    this.getInfo(item)

    if (this.props.onChange) {
      this.props.onChange(item)
    }
  }
  render() {
    return (
      React.createElement("div", { className: 'test', ref: (node) => this.setWrapperRef(node) },
        React.createElement("div", {},
          React.createElement("div", {},
            React.createElement("input", {
              type: "text",
              onChange: (e) => this.arrangeValue(e.target.value),
              placeHolder: 'Enter Location...',
              value: this.state.place
            }
            )
          )
        ),
        this.state.collectionShow ?
          React.createElement("div", { className: "google-covert" },
            this.state.collection
          )
          : null


      )
    )
  }
}