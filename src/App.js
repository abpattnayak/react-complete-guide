import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
// import Radium, { StyleRoot } from 'radium';

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

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div >
          {
            this.state.persons.map((person, index) => {
              return <Person
                key={person.id} 
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={            person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            })
          }
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        'backgroundColor' : 'salmon',
        'color' : 'black',
      }
    }

    const assignedClasses = [];
    if(this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I am a React App.</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button 
          onClick={this.togglePersonsHandler}
          style={style}
        >
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am a React App.'));
}

export default App;