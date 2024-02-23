import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './destination1.css';


class destination1 extends Component {
    render(){
        return (
            
            <div className="map-container">
                <Map google={this.props.google} zoom={14}>
                    
                    <Marker onClick={this.onMarkerClick}
                     name={'Current location'} />
                    
                    <InfoWindow onClose={this.onInfoWindowClose}>

                    </InfoWindow>
                </Map>
            </div>
        )
     }
}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyAdtUCBHrnflbwBuS7TAf-cO4u2p9HWITw")
  })(destination1)

