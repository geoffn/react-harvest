import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import apigoogle from './mapapi'


export class MapContainer extends React.Component {



    render() {
        //const eventMarkers = this.props.eventLocations.map(eventLocation => {

        const eventLocations = this.props.eventLocations


        return (
            <div style={{ height: '10vh', width: '90%' }}>
                <Map

                    google={this.props.google} zoom={14}
                    style={{ width: '100%', height: '100' }}
                    initialCenter={{
                        lat: this.props.centerLat,
                        lng: this.props.centerLong
                    }}>



                    < Marker onClick={this.onMarkerClick}
                        name={'Current location'} />
                    <Marker title={'The marker`s title will appear as a tooltip.'} name={'SOMA'} position={{ lat: 48.706, lng: -122.446 }} />

                    {eventLocations.map(item => (
                        <Marker
                            key={item.id}
                            title={item.name}
                            name={item.name}
                            position={{ lat: item.lat, lng: item.lng }}
                            onClick={this.onMarkerClick}
                        />
                    ))}
                    < InfoWindow onClose={this.onInfoWindowClose}>
                        <div>
                            <h1>test</h1>
                        </div>
                    </InfoWindow>
                </Map >
            </div>
        );

    }
}

export default GoogleApiWrapper({
    apiKey: apigoogle
})(MapContainer)