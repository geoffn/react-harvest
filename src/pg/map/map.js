import React from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import apigoogle from './mapapi'


export class MapContainer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            center: {
                lat: this.props.centerLat,
                lng: this.props.centerLng
            },
            bounds: null,
            points:
                [
                    {
                        lat: this.props.maxLat,
                        lng: this.props.maxLng
                    },
                    {
                        lat: this.props.maxLat,
                        lng: this.props.minLng
                    },
                    {
                        lat: this.props.minLat,
                        lng: this.props.maxLng
                    },
                    {
                        lat: this.props.minLat,
                        lng: this.props.minLng
                    }
                ]
        }


    }



    render() {

        const eventLocations = this.props.eventLocations


        let bounds = new this.props.google.maps.LatLngBounds();


        for (var i = 0; i < this.state.points.length; i++) {
            bounds.extend(this.state.points[i]);
        }






        const containerStyle = {
            position: 'relative',
            width: '500px',
            height: '600px'
        }



        return (
            <div style={{ height: '10vh', width: '90%' }}>


                <Map

                    containerStyle={containerStyle}
                    google={this.props.google} zoom={13}
                    style={{ width: '100%', height: '100' }}
                    initialCenter={
                        this.state.center
                    }
                    center={
                        this.state.center
                    }

                    bounds={bounds}>

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

            </div >
        );

    }
}

export default GoogleApiWrapper({
    apiKey: apigoogle
})(MapContainer)