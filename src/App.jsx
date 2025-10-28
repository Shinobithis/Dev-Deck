import { useState, useEffect, useRef } from 'react'
import FlashCards from './components/FlashCards'
import './App.css'

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [show, setShow] = useState(false);
  const [cards, setCards] = useState([]);

  function handleSave() {
    const newCard = {"question": question, "answer": answer};
    setCards([...cards, newCard])
    setQuestion("");
    setAnswer("");
  }
  function handleShow() {
    setShow(!show);
  }
  
  return (
    <div>
      <label>Your Question: </label>
      <input 
        type="text" 
        onChange={(e) => (setQuestion(e.target.value))}
        value={question}
      />
      <br />
      <label>Value: </label>
      <input 
        type="text"
        onChange={(e) => (setAnswer(e.target.value))}
        value={answer}
      />
      <br />
      <button
        onClick={handleSave}
      >Add</button>
      <button
        onClick={handleShow}
      >
        {show ? "Hide" : "Show"}
      </button>
      <br />
      {
        show && cards.map((card, index) => (
          <FlashCards 
            key={index}
            question={card.question} 
            answer={card.answer} 
          />
        ))
      }
    </div>
  )
}

export default App