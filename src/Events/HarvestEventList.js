import React from 'react';
import axios from 'axios'
import HarvestEvent from './HarvestEvent'
import Map from '../pg/map/map'
import Header from '../Header/Header'
import EventAdd from './EventAdd'


class HarvestEventList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            harvestEvents: [],
            addressCode: '98225',
            eventAddVisible: false
        }
    }

    componentDidMount() {
        console.log("in Componentdidmount")
        axios.get('http://localhost:3001/event/addressCode/' + this.state.addressCode)
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

    seteventAddVisible = (value) => {
        if (value === 'add') {
            this.setState({ eventAddVisible: true })
        }
        if (value === 'cancel') {
            this.setState({ eventAddVisible: false })
        }
        console.log("seteven")
        console.log(this.state.eventAddVisible)
    }

    harvestEventListMaps() {
        //TODO: Cycle through HarvestEvents and pull out markers, and max/min,center lat/long for maps
        let maxLat, maxLong, minLat, minLong, centerLat, centerLong = null
        let eventLocations = []

        this.state.harvestEvents.forEach((harvestEvent) => {
            eventLocations.push({
                lat: harvestEvent.latitude,
                lng: harvestEvent.longitude,
                id: harvestEvent._id
            })

            if (!maxLat || maxLat < harvestEvent.latitude) { maxLat = harvestEvent.latitude }

            if (!minLat || minLat > harvestEvent.latitude) { minLat = harvestEvent.latitude }

            if (!maxLong || maxLong < harvestEvent.longitude) { maxLong = harvestEvent.longitude }

            if (!minLong || minLong > harvestEvent.longitude) { minLong = harvestEvent.longitude }
        })

        centerLat = (maxLat + minLat) / 2
        centerLong = (maxLong + minLong) / 2

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

    returnEventLocations() {
        return this.props.eventLocations
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
            <div>{Header}
                < div className="tile is-vertical " >
                    <div className="tile">
                        <div className="tile is-parent">
                            <article className="tile is-child notification is-info">
                                <div className="navbar-start">

                                    <p className="title navbar-item">Events <i className="fab fa-twitter-square"></i></p>

                                    <div className="navbar-end">

                                        <div className="navbar-item">
                                            <div className="buttons">
                                                <a className="button is-primary" onClick={() => this.seteventAddVisible('add')}>
                                                    <strong>New Event</strong>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=".searchresults" id="searchresults">
                                    <EventAdd eventAddVisible={this.state.eventAddVisible} seteventAddVisible={this.seteventAddVisible} />


                                    <div>
                                        <section className="Events">
                                            {harvestEventLists}
                                        </section>
                                    </div>

                                </div>

                            </article>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child notification is-success">
                                <div className="content">
                                    {/* Commended out so map does not load everytime
                                    <Map centerLat={this.state.centerLat}
                                        centerLong={this.state.centerLong}
        eventLocations={this.state.eventLocations} */}
                                </div>

                            </article>
                        </div>
                    </div>
                </div >


            </div >



        )
    }
}


export default HarvestEventList
