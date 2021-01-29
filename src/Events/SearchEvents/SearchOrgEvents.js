import React from 'react'
import axios from 'axios'

function SearchOrgEvents(props) {


    const SearchByOrg = async (orgId) => {

        let baseURL = 'http://localhost:3001/organization/' + orgId

        //If search criteria is provided then search


        console.log("Form Data:" + values.eventSearch)
        let results = await axios.get(baseURL)
            .catch((e) => {
                console.log(e)
            })


        console.log(results.data.results)

        props.searchCallback(results.data.results)

    }

}
