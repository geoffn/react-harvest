import React from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import apigoogle from './mapapi'

export class MapContainer extends React.Component {
    render() {
        console.log('centerpoint = ' + this.props.centerPoint)
        return (

            <Map google={this.props.google} zoom={14}
                initialCenter={{
                    lat: this.props.centerLat,
                    lng: this.props.centerLong
                }}>

                < Marker onClick={this.onMarkerClick}
                    name={'Current location'} />


                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>test</h1>
                    </div>
                </InfoWindow>
            </Map >
        );
    }
}

export default GoogleApiWrapper({
    apiKey: apigoogle
})(MapContainer)