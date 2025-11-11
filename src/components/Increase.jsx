import React, {useState, useEffect} from 'react'

function Increase() {
    const [age, setAge] = useState(30);

    useEffect(() => {
        console.log("Age is now " , age);
        document.title = (`The age is ${age}`);
    }, [age]);
    
    return (
        <>
            <title>The age is</title>
            <button onClick={() => setAge(age + 1)} >Increase</button>
            <p>Your age is {age}</p>
        </>
    )
}

export default Increase