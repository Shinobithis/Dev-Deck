import { useState } from 'react'
import FlashCards from './components/FlashCards'
import Increase from './components/Increase'
import Car from './components/Car'
import './App.css'

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [show, setShow] = useState(false);
  const [cards, setCards] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    pw: '',
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...FormData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data: ", formData);
  }

  function hello(param) {
    alert(`Hello from ${param}`);
  }

  function handleSave() {
    const newCard = {"id": Date.now(), "question": question, "answer": answer};
    setCards([...cards, newCard])
    setQuestion("");
    setAnswer("");
  }

  function handleShow() {
    setShow(!show);
  }

  function handleDelete(id) {
    const newCards = cards.filter(card => card.id !== id);
    setCards(newCards);
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
        show && cards.map((card) => (
          <FlashCards 
            key={card.id}
            question={card.question} 
            answer={card.answer}
            id={card.id}
            delete={handleDelete}
          />
        ))
      }
      <Increase />
      <Car carName="App" onCarClick={hello} />

      <form onSubmit={handleSubmit}>
        <label htmlFor="Name">Name: </label>
        <input type="text" name='name' value={formData.name} onChange={handleChange}/>
        <br />
        <label htmlFor="Email">Email: </label>
        <input type="text" name='email' value={formData.email} onChange={handleChange}/>
        <br />
        <label htmlFor="Email">Age: </label>
        <input type="text" name='age' value={formData.age} onChange={handleChange}/>
        <br />
        <label htmlFor="Email">Password: </label>
        <input type="text" name='pw' value={formData.pw} onChange={handleChange}/>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App