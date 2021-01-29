import React from 'react';

//=================================
//HarvestEvent
//Display individual Event
function HarvestEvent(props) {
    return (
        // <div className="harvest-event-card">

        //     <p className="harvest-event-card-title">{props.title}</p>
        //     {props.description}
        //     <p className="harvest-event-card-address">{props.address1}</p>
        //     <p className="harvest-event-card-address">{props.city}, {props.stateRegion} {props.addressCode}
        //     </p>

        // </div >
        // <div className="event-card-left">
            <div class="card-event">
            {/* <div className="event-card-image"><img src="/img/bfb.jpeg" alt={props.title}></img></div> */}
            <p className="harvest-event-card-title">{props.title}</p>
             {props.description}
             <p className="harvest-event-card-address">{props.address1}</p>
             <p className="harvest-event-card-address">{props.city}, {props.stateRegion} {props.addressCode}
            </p>
            </div>
        // </div>
 
    )
}

export default HarvestEvent