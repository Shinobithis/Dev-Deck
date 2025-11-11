import React from 'react'
import './Car.module.css'

function Car(props) {
  return (
    <div>
      je suis {"<Car />"}
      <button onClick={() => props.onCarClick(props.carName)}>Click me</button>
    </div>
  )
}

export default Car