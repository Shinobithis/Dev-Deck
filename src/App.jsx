import { useState, useEffect, useRef } from 'react'
import FlashCards from './components/FlashCards'
import './App.css'
import { use } from 'react';

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const inputRef = useRef(null);
  
  return (
    <div>
      <label>Your Question: </label>
      <input 
        type="text" 
        ref={inputRef}
        onChange={(e) => (setQuestion(e.target.value))}
      />
      <br />
      <label>Value: </label>
      <input 
        type="text"
        onChange={(e) => (setAnswer(e.target.value))}
      />
      <br />
      <FlashCards question={question} answer={answer} />
    </div>
  )
}

export default App