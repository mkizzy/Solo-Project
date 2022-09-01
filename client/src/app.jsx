import React, { Component } from 'react';
import { render } from 'react-dom';
import Navbar from './components/Navbar.jsx';
import ExerciseContainer from './components/ExerciseContainer.jsx';


function App() {
  return (
     <div>
     <Navbar/>
     <ExerciseContainer/>
     </div>
  )
}

export default App;