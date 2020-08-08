import React from 'react';
import axios from 'axios'
import HarvestEvent from './HarvestEvent'
import Map from '../pg/map/map'
import Header from '../Header/Header'
import EventAdd from './AddEvent/AddEvent.js.bak'
import EventAddFormik from './AddEvent/AddEvent'
import SearchEvent from '../MiscComponents/SearchEventFormik'


class HarvestEventList extends React.Component {
    constructor(props) {
        super(props)
        this._isMounted = false

        this.state = {
            harvestEvents: [],
            addressCode: '',
            eventSearch: null,
            currentRecords: 0,
            centerLat: 0,
            centerLng: 0
        }
        //this.onChange = this.onChange.bind(this)
        //this.onSearchCallback = this.onSearchCallback.bind(this)

    }

    componentDidMount() {
        this._isMounted = true
        let baseURL = 'http://localhost:3001/event'

        //If search criteria is provided then search


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

        let results = await axios.get(baseURL)
            .catch((e) => {
                console.log(e)
            })

        this.setState({ harvestEvents: results.data.results }, () => {
            this.harvestEventListMaps()
        })


    }

    onSearchCallback = (searchResults) => {

        //Research returns from SearchEvent
        this.setState({ harvestEvents: searchResults })
        this.harvestEventListMaps()


        this.setState({ currentRecords: this.state.harvestEvents.length })

    }



    //As the search form is changed, update state.
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }




    harvestEventListMaps = () => {
        //TODO: Cycle through HarvestEvents and pull out markers, and max/min,center lat/long for maps
        let maxLat, maxLng, minLat, minLng, centerLat, centerLng = null
        let eventLocations = []
        this.setState({
            centerLat: null,
            centerLng: null
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

            if (!maxLng || maxLng < harvestEvent.longitude) { maxLng = harvestEvent.longitude }

            if (!minLng || minLng > harvestEvent.longitude) { minLng = harvestEvent.longitude }
        })


        centerLat = (maxLat + minLat) / 2
        centerLng = (maxLng + minLng) / 2

        this.setState({
            maxLat: maxLat + 1,
            minLat: minLat + 1,
            maxLng: maxLng + 1,
            minLng: minLng + 1,
            centerLat: centerLat,
            centerLng: centerLng,
            eventLocations: eventLocations
        })

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

            <div>

                < div className="tile is-vertical " >
                    <div className="tile">
                        <div className="tile is-parent">
                            <SearchEvent searchCallback={this.onSearchCallback} />
                        </div>
                    </div>
                </ div>

                {this.state.currentRecords > 0 && (
                    <div className="harvest-main-div">
                        <div className="harvest-event-left-wrap">
                            <div className="tile is-parent is-vertical">
                                <article className="tile is-child havest-event-card">



                                    <div>
                                        <section className="Events">
                                            {harvestEventLists}
                                        </section>


                                    </div>

                                </article>
                            </div>
                        </div>

                        <div className="tile is-parent">
                            <article className="tile is-child ">
                                <div >
                                    {/* Commended out so map does not load everytime

                                    <Map key={this.state.currentRecords}
                                        centerLat={this.state.centerLat}
                                        centerLng={this.state.centerLng}
                                        eventLocations={this.state.eventLocations}
                                        maxLat={this.state.maxLat}
                                        minLat={this.state.minLat}
                                        maxLng={this.state.maxLng}
                                        minLng={this.state.minLng} />*/}
                                </div>

                            </article>
                        </div>
                    </div>
                )}
            </div>




        )
    }
}


export default HarvestEventList
