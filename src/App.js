import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name:'Giulia', age: 23 },
      { name:'Gabriela', age: 25 },
      { name: 'Beatriz', age: 22 }
    ]
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked');
    this.setState( {
      persons: [
        { name: newName, age: 23 },
        { name:'Gabriela', age: 25 },
        { name: 'Beatriz Stefano', age: 23 }
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name:'Giulia Falcão', age: 23 },
        { name: event.target.value, age: 25 },
        { name: 'Beatriz Stefano', age: 23 }
      ]
    } )
  }

  render() {
    return (
      <div className="App">
      <h1> Hi, I'm a React app </h1>
      <p>I'm learning ReactJS!</p>
      
      <button onClick={this.switchNameHandler}> Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} changed={this.nameChangedHandler}>My hobbie: Coding</Person>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'Gabriela Alencar')}>My hobbie: Cundling alceu</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
    );
  }
}

export default App;
