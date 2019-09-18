import React, { Component } from 'react';
import classes from './App.css';
// import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
// import Radium, { StyleRoot } from 'radium';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {

  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
    this.state = {
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
      showCockpit : true,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  // componentWillMount() {
  //   console.log("[App.js] ComponentWillMount");
  // }

  componentDidMount() {
    console.log("[App.js] ComponentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] ComponentDidUpdate");
  }

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

    console.log("[App.js] render");
    let persons = null;
    
    if(this.state.showPersons) {
      persons = (
        <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <WithClass classes={classes.App}>
        <button 
          onClick={() => {
            this.setState({ showCockpit : false });
          }}
        >
          Remove Cockpit
        </button>
        {
          this.state.showCockpit ? 
            <Cockpit 
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
            /> : null
        }
        {/* <h1>Hi, I am a React App.</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button 
          className={btnClass}
          onClick={this.togglePersonsHandler}
        > */}
        {persons}
      </WithClass>
    );
  }

  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am a React App.'));
}

export default App;