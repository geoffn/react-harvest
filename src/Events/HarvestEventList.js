import React from 'react';
import axios from 'axios'
import HarvestEvent from './HarvestEvent'
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
            <div> {harvestEventLists} </div >



        )
    }
}


export default HarvestEventList
