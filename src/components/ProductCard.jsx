import React from "react";

function ProfileCard(props) {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <p>{props.desc}</p>
            {props.i}
        </div>
    )
}

export default ProfileCard