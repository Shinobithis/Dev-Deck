import './App.css'
import Form from './components/Form'
import Navbar from './components/Navbar'
import Storage from './components/Storage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/home/form' Component={Form}/>
          <Route path='/' Component={Form}/>
          <Route path='/home' Component={Form}/>
        </Routes>
        <Storage></Storage>
      </Router>
    </>
  )
}

export default App