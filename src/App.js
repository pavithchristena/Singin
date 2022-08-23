import React from 'react';
import './App.css';
import Login from './components/login';
import Profile from './components/profile';
import Pin from './components/pin';
import Interval from './components/interval'

function App() {
  return (
    <div className="App">
      <Login/>
      <Profile/>
      <Pin/>
      <Interval/>
    </div>
  );
}

export default App;
