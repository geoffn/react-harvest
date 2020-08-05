import React from 'react'
import Header from '../Header/Header'
import axios from 'axios'
import HarvestEvent from '../Events/HarvestEvent'

class SearchEvent extends React.Component {

    constructor(props) {
        super(props)
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

        this.props.searchCallback(results.data.results)
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(e.target.name + " " + e.target.value)
    }

    render() {
        return (

            < div >

                <div className="search-bar">
                    <input className="search-bar-input search-bar-input-border" name="eventSearch" type="text" placeholder="Zip or City,State" onChange={(this.onChange)}></input>
                    <button className="search-bar-button search-bar-button-border" onClick={this.onClickSearch} >Event Search</button>
                </div>

            </div>


        )
    }
}

export default SearchEvent