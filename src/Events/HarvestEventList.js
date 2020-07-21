import React from 'react';
import axios from 'axios'
import HarvestEvent from './HarvestEvent'
import Map from '../pg/map/map'
//==================================
//HarvestEventList
//Display a List of Events
//Click do deep dive

class HarvestEventList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            harvestEvents: [{
                description: "desc",
                address1: "add",
                ownerName: "geoff"
            },
            {
                description: "desc",
                address1: "add",
                ownerName: "geoff"
            }]
        }
    }

    componentDidMount() {
        console.log("in Componentdidmount")
        axios.get('http://localhost:3001/event')
            .then(res => {

                console.log(res.data)
                //this.setState({ foodbanks: res.data.results })
                //this.setState({ harvestEvents: res.data.results })
                this.setHarvestEventList(res.data.results)
            })


    }

    setHarvestEventList(eventLists) {
        //const newHarvestEventList = this.state.harvestEvents.slice()

        console.log("in setharvest event list")

        // newHarvestEventList[0] = {
        //     description: "desc1",
        //     address1: "add",
        //     ownerName: "geoff"
        // }
        //console.log(newHarvestEventList[0])
        this.setState({
            harvestEvents: eventLists
        })
        this.harvestEventListMaps()

    }

    harvestEventListMaps() {
        //TODO: Cycle through HarvestEvents and pull out markers, and max/min,center lat/long for maps
        let maxLat, maxLong, minLat, minLong, centerLat, centerLong = null
        let centerPoint = null
        let eventLocations = []
        var i = 0



        this.state.harvestEvents.forEach((harvestEvent) => {
            eventLocations.push({
                lat: harvestEvent.latitude,
                lng: harvestEvent.longitude,
                id: harvestEvent._id
            })
            i++
            if (!maxLat || maxLat < harvestEvent.latitude) { maxLat = harvestEvent.latitude }

            if (!minLat || minLat > harvestEvent.latitude) { minLat = harvestEvent.latitude }

            if (!maxLong || maxLong < harvestEvent.longitude) { maxLong = harvestEvent.longitude }

            if (!minLong || minLong > harvestEvent.longitude) { minLong = harvestEvent.longitude }
        })

        centerLat = (maxLat + minLat) / 2
        centerLong = (maxLong + minLong) / 2
        centerPoint = {
            lat: centerLat,
            lng: centerLong
        }


        this.setState({
            maxLat: maxLat,
            minLat: minLat,
            maxLong: maxLong,
            minLong: minLong,
            centerLat: centerLat,
            centerLong: centerLong,
            eventLocations: eventLocations
        })
        console.log(eventLocations)
    }

    render() {
        const harvestEventLists = this.state.harvestEvents.map(harvest => {
            return (
                < HarvestEvent
                    key={harvest._id}
                    title={harvest.title}
                    description={harvest.description}
                    address1={harvest.address1}
                    city={harvest.city}
                    stateRegion={harvest.stateRegion}
                    addressCode={harvest.addressCode}
                    ownerName={harvest.name}

                />
            )
        }
        )

        return (
            <div> <div>MAX={this.state.centerPoint}{harvestEventLists} </div >
                <div><Map centerLat={this.state.centerLat} centerLong={this.state.centerLong} eventLocations={this.eventLocations} /></div>
            </div>




        )
    }
}


export default HarvestEventList
