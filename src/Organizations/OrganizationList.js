import React from 'react';
import Map from '../Map/map'
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

        const organizationLists = this.state.organizations.map(org => {
            return (
                <Organization
                    key={org._id}
                    id={org._id}
                    name={org.name}
                    address1={org.address1}
                    city={org.city}
                    stateRegion={org.stateRegion}
                    addressCode={org.addressCode}
                    url={org.url}
                    phones={org.phones}
                    social={org.social}
                    type={org.type}
                    events={org.events}
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
