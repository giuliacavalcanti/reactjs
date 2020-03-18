import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1> Hi, I'm a React app </h1>
      <p>I'm learning ReactJS!</p>
      <Person name='Giulia' age='24'/>
      </div>
    );
  }
}

export default App;
