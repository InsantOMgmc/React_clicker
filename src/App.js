import './App.css';
import Book from './pages'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Music from './pages/music';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Book/>}></Route>
        <Route path = '/music' element = {<Music/>}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
