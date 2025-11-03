import { useState } from 'react';

function FlashCards(props) {
    const [isFlipped, setIsFlipped] = useState(false);

    function handleClick() {
        setIsFlipped(!isFlipped);
    }

    function handleDeleteClick(event) {
        event.stopPropagation();
        props.delete(props.id);
    }

    return (
        <div onClick={handleClick}>
            <h1>
                {isFlipped ? props.answer : props.question}
            </h1>
            <button onClick={handleDeleteClick}>Delete</button>
        </div>
    )
}

export default FlashCards