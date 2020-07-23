import React from 'react';

//=================================
//HarvestEvent
//Display individual Event
function EventMarker(props) {
    const { id, lat, lng } = props
    return (
        <EventMarker position={{ lat: lat, lng: lng }} />
    )
}



export default EventMarker