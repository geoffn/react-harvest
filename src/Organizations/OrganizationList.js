import React from 'react';
import axios from 'axios'
import Foodbank from './Organization'
import Map from '../Map/map'
import header from '../Header/Header'
import SearchOrganization from './SearchOrganization'
import Organization from './Organization'



class OrganizationList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            organizations: [],
            organizationSearch: [],
            currentRecords: 0
        }
    }

    onSearchCallback = (searchResults) => {

        this.setState({ organizations: searchResults })
        console.log(searchResults)

    }

    render() {
        const socialItems = (socials) => {
            console.log(socials)
            return socials.map((social => <div>{social.socialLink}</div>))
        }
        const organizationLists = this.state.organizations.map(org => {
            return (
                <Organization
                    key={org._id}
                    name={org.name}
                    address1={org.address1}
                    city={org.city}
                    stateRegion={org.stateRegion}
                    addressCode={org.addressCode}
                    url={org.url}
                    phone={org.phone}
                    social={org.social}
                    type={org.type}
                />


            )

        })


        return (
            <div>

                < div className="tile is-vertical " >
                    <div className="tile">
                        <div className="tile is-parent">
                            <SearchOrganization searchCallback={this.onSearchCallback} />
                        </div>
                    </div>
                </ div>
                <div className="harvest-main-div">
                    <div className="harvest-event-left-wrap">
                        <div className="tile is-parent is-vertical">
                            <article className="tile is-child havest-event-card">



                                <div>
                                    <section className="Events">
                                        {organizationLists}
                                    </section>


                                </div>

                            </article>
                        </div>
                    </div>

                </div>
            </div >
        )
    }


}

export default OrganizationList
