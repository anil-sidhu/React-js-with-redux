import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Loader from '../utility/loader'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


class MapScreen extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        currentLocation: null

    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    getCurrent() {
        var obj = null
        navigator.geolocation.getCurrentPosition((location) => {
            var obj = { lat: location.coords.latitude, lng: location.coords.longitude }
            this.setState({
                currentLocation: obj
            })
        });
    }
    render() {

        console.warn("currentLocation", this.state.currentLocation)
        var icon = {
            url: "https://loc8tor.co.uk/wp-content/uploads/2015/08/stencil.png", // url
            scaledSize: new this.props.google.maps.Size(90, 42), // scaled size
        };



        return (
            <div>
                <button onClick={() => { this.getCurrent() }}>Get Current Location</button>
                <a
                    href="https://maps.google.com/maps?t=m&f=d&saddr=Current+Location&daddr=delhi"
                >test</a>

                <Map style={{ height: "500px", width: "800px" }} google={this.props.google}
                    initialCenter={{
                        lat: 28.4595,
                        lng: 77.0266,
                    }}
                    zoom={12}
                    onClick={this.onMapClicked}>
                    <Marker onClick={this.onMarkerClick}
                        title={'The marker`s title will appear as a tooltip.'}
                        name={'SOMA2'}
                        position={{ lat: 28.4595, lng: 77.0100 }}

                    />
                    <Marker onClick={this.onMarkerClick}
                        title={'The marker`s title will appear as a tooltip.'}
                        name={'SOMA'}
                        position={{ lat: 28.4595, lng: 77.0300 }} />

                    <Marker
                        onClick={this.onMarkerClick}
                        name={'Dolores park'}
                        position={{ lat: 28.4595, lng: 77.0600 }} />
                    {
                        this.state.currentLocation ?
                            <Marker onClick={this.onMarkerClick}
                                name={'Current location'}
                                icon={icon}

                                position={this.state.currentLocation} />
                            : null
                    }


                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow>
                </Map>
            </div>
        )
    }
}

const MapComponent = GoogleApiWrapper({
    apiKey: ("AIzaSyA6cxISAaECV2jqVCofwdQDS46ev8puvyg")
})(MapScreen)

export default MapComponent; 
