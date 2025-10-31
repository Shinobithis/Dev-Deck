import React from "react";

function ProfileCard(props) {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.spec}</p>
            <p>{props.desc}</p>
        </div>
    )
}

export default ProfileCard