import React from 'react'
import SearchOrgEvents from './SearchOrganization'


//Render Organization passed in as Org

//render events from list
class OrganizationEvents extends React.Component {

    constructor(props) {
        super(props)

        this.setState.orgID = this.props.match.params.ordId

        const searchResults = new SearchOrgEvents.SearchByOrg(this.props.match.params.orgId)

    }

    searchCallback = (searchResults) => {
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
                            <article className="tile is-child harvest-event-card">



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
