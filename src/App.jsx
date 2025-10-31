import { useState, useEffect, useRef } from 'react'
import FlashCards from './components/FlashCards'
import Greetings from './components/Greetingd';
import ProfileCard from './components/ProfileCard';
import ProductCard from './components/ProductCard';
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
      <Greetings />
      <h1>Profile</h1>
      <ProfileCard name="yassir" spec="dev" desc="description"/>
      <ProfileCard name="Ali" spec="Buisness" desc="description"/>
      <ProfileCard name="Ahmed" spec="Managment" desc="description"/>
      <h1>Product</h1>
      <ProductCard name="Telephone" price="500" desc="description"/>
    </div>
  )
}

export default App