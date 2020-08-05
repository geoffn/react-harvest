import React from 'react';

//=================================
//HarvestEvent
//Display individual Event
function HarvestEvent(props) {
    return (
        <div className="harvest-event-card">

            <p className="harvest-event-card-title">{props.title}</p>
            {props.description}
            <p className="harvest-event-card-address">{props.address1}
                {props.city}, {props.stateRegion} {props.addressCode}
            </p>

        </div >

    )
}

export default HarvestEvent