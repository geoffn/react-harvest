import React from 'react';
import axios from 'axios'
import HarvestEvent from './HarvestEvent'
import Map from '../pg/map/map'
import Header from '../Header/Header'
import EventAdd from './EventAdd'


class HarvestEventList extends React.Component {
    constructor(props) {
        super(props)
        this._isMounted = false

        this.state = {
            harvestEvents: [],
            addressCode: '',
            eventSearch: null
        }
        //this.onChange = this.onChange.bind(this)

    }

    componentDidMount() {
        this._isMounted = true
        let baseURL = 'http://localhost:3001/event'

        //If search criteria is provided then search


        console.log("in Componentdidmount")
        axios.get(baseURL)
            .then(res => {
                if (this._isMounted) {
                    //console.log(res.data)
                    //console.log(res.data.result)
                    //this.setHarvestEventList()
                    this.setState({ harvestEvents: res.data.result })
                    this.harvestEventListMaps()
                }
            })
    }

    componentWillUnmount() {
        this._isMounted = false
    }

    onClickSearch = async () => {
        const eventSearch = this.state.eventSearch

        let baseURL = 'http://localhost:3001/event/search/' + eventSearch

        //If search criteria is provided then search


        console.log("search" + eventSearch)
        let results = await axios.get(baseURL)
            .catch((e) => {
                console.log(e)
            })

        console.log(results)
        //.then(res => {

        //console.log(res.data)
        //console.log(res.data.result)
        //this.setHarvestEventList()
        console.log(results.data)
        this.setState({ harvestEvents: results.data.results })
        this.harvestEventListMaps()


        //})


        //Create search

        //Run Search

        //Return results

        //One search

    }

    //As the search form is changed, update state.
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(e.target.name + " " + e.target.value)
    }




    harvestEventListMaps() {
        //TODO: Cycle through HarvestEvents and pull out markers, and max/min,center lat/long for maps
        let maxLat, maxLong, minLat, minLong, centerLat, centerLong = null
        let eventLocations = []
        this.setState({
            centerLat: null,
            centerLong: null
        })

        this.state.harvestEvents.forEach((harvestEvent) => {
            eventLocations.push({
                lat: harvestEvent.latitude,
                lng: harvestEvent.longitude,
                id: harvestEvent._id
            })
            //Find the boundries of the map and also calculate the centerpoint.
            if (!maxLat || maxLat < harvestEvent.latitude) { maxLat = harvestEvent.latitude }

            if (!minLat || minLat > harvestEvent.latitude) { minLat = harvestEvent.latitude }

            if (!maxLong || maxLong < harvestEvent.longitude) { maxLong = harvestEvent.longitude }

            if (!minLong || minLong > harvestEvent.longitude) { minLong = harvestEvent.longitude }
        })

        centerLat = (maxLat + minLat) / 2
        centerLong = (maxLong + minLong) / 2

        console.log("CLat" + centerLat + " cLng " + centerLong)

        this.setState({
            maxLat: maxLat,
            minLat: minLat,
            maxLong: maxLong,
            minLong: minLong,
            centerLat: centerLat,
            centerLong: centerLong,
            eventLocations: eventLocations
        })
        //console.log(eventLocations)


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
                                <div className="buttons">
                                    <input className="input is-primary" name="eventSearch" type="text" placeholder="Zip or Ciry,State" onChange={(this.onChange)}></input>
                                    <button className="button is-primary" onClick={this.onClickSearch} >Event Search</button>
                                </div>
                                <div className="navbar-start">

                                    <p className="title navbar-item">Events <i className="fab fa-twitter-square"></i></p>


                                </div>
                                <div className=".searchresults" id="searchresults">
                                    <EventAdd />


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
                                     */}
                                    <Map centerLat={this.state.centerLat}
                                        centerLong={this.state.centerLong}
                                        eventLocations={this.state.eventLocations} />
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
