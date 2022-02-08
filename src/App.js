import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/home" element={<Navigation/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/signup" element={<SignupForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
