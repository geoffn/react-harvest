import React from 'react';
// const social = (socialList) => {
//     const socialDiv =  socialList.map(list => {
//         "<div>" + list.socialType + ": " + list.socialLink + "</div>"
//     })

//     return socialDiv
// }



const Organization = (props) => (




    <div className="organization-container-main">
        <div className="organization-box-left">
            <div className="organization-box-name">
                {props.name}
            </div>
            <div className="organization-box-address">
                {props.address1}
                <p>{props.city}, {props.stateRegion} {props.addressCode}</p>
                <p><a className="organization-url" href={props.url}>{props.url}</a></p>
            </div>
            <div className="organization-box-social">

                {props.social.map((socials) => (
                    <a id={socials._id} href={socials.socialLink}><img className="social-icon" alt={socials.socialLink} src={"/img/" + socials.socialName + ".png"} /></a>
                ))}

            </div>
        </div>
        <div className="organization-box-right">
            <div className="organization-box-phone">{props.phones.map((phone) => (
                <p>{phone.numberType}: <a className="organization-phone-main" href={"tel:" + phone.number}>{phone.number}</a></p>
            ))}
            </div>
            <div className="organization-box-events">
                Events
                <p><a className="organization-events-link" href={"/event/" + props.id}>{props.events.length}</a></p>
            </div>
        </div>


    </div >

);

export default Organization;