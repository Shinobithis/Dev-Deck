import React from 'react'

function Storage() {
    localStorage.setItem("local", 'my local');
    const localName = localStorage.getItem("local")

    sessionStorage.setItem("session", 'my session')
    const seessionName = sessionStorage.getItem("session")
  return (
    <div>
        <p>Local storage: {localName}</p>
        <p>Session Storage: {seessionName}</p>
    </div>
  )
}

export default Storage