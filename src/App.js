import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/GlobalGrid';
import Graph from './components/Graph'
import About from './components/About'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';






function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/Graph" element={<Graph/>} />
          <Route path="/About" element={<About/>} />
        </Routes>
      
      
      </div>
      </Router>
  );
}

export default App;
