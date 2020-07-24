import React from 'react';


const foodbank = (props) => (

    
    <div className="card">
        <div className="card-content has-background-white-bis"> 
        <div className="content" id="' + results._id + '">'
    
        <h1>{props.name}</h1>
        <div >
            <div className="Address">{props.address1}
                <p>{props.city}, {props.stateRegion} {props.addressCode}</p>
            </div>
        </div>
    </div>
    </div>
    </div>
);

export default foodbank;