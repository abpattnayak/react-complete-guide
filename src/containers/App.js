import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import Radium, { StyleRoot } from 'radium';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {

  state = {
    persons : [
      {
        id: '324eadasd', 
        name: "Abhishekh", 
        age: 24
      },
      {
        id: '324eadase', 
        name: "Achyuta", 
        age: 22
      },
      {
        id: '324eadasf', 
        name: "Mayank", 
        age: 23
      },
    ],
    otherState : "some other value",
    showPersons : false,
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons : persons});
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons : persons});
  }

  togglePersonsHandler = (event) => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons : !doesShow,
    });
  }
  
  render(){

    let persons = null;
    
    if(this.state.showPersons) {
      persons = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />;
    }

    return (
      <div className={classes.App}>
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {/* <h1>Hi, I am a React App.</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button 
          className={btnClass}
          onClick={this.togglePersonsHandler}
        > */}
        {persons}
      </div>
    );
  }
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am a React App.'));
}

export default App;