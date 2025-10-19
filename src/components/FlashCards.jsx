import React from "react";
import { useState } from 'react';

function FlashCards(props) {
    const [isFlipped, setIsFlipped] = useState(false);

    function handleClick() {
        setIsFlipped(!isFlipped);
    }

    return (
        <div onClick={handleClick}>
            <h1>
                {isFlipped ? props.answer : props.question}
            </h1>
        </div>
    )
}

export default FlashCards