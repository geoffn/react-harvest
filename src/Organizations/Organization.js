import React from 'react';
// const social = (socialList) => {
//     const socialDiv =  socialList.map(list => {
//         "<div>" + list.socialType + ": " + list.socialLink + "</div>"
//     })

//     return socialDiv
// }



const Organization = (props) => (


    <div className="card">
        <div className="card-content has-background-white-bis">
            <div className="content" id={props._id}>

                <h1>{props.name}</h1>
                <div >
                    <div className="Address">{props.address1}
                        <p>{props.city}, {props.stateRegion} {props.addressCode}</p>
                    </div>
                    <div><a href={props.url}>{props.url}</a></div>
                    {props.social.map((socials) => (
                        <a id={socials._id} href={socials.socialLink}><img className="social-icon" src={"/img/" + socials.socialName + ".png"} /></a>
                    ))}

                </div>
            </div>
        </div>
    </div>
);

export default Organization;