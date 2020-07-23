import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import apigoogle from './mapapi'



export class MapContainer extends React.Component {


    render() {

        return (

            <Map google={this.props.google} zoom={14}
                initialCenter={{
                    lat: this.props.centerLat,
                    lng: this.props.centerLong
                }}>

                < Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
                <Marker title={'The marker`s title will appear as a tooltip.'} name={'SOMA'} position={{ lat: 48.706, lng: -122.446 }} />

                {
                    this.markerList
                }
                < InfoWindow onClose={this.onInfoWindowClose}>
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