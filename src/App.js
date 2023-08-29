import logo from './logo.svg';
import './App.css';
import Home from './pages'
import About from './pages/about'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Clock from './pages/clock'


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path = '/clock' element = {<Clock/>}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
