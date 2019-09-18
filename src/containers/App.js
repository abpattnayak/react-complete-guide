import React, { Component } from 'react';
import classes from './App.css';
// import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';
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
      changeCounter : 0,
      authenticated: false,
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
    this.setState((prevState, props) => {
      return {
        persons : persons,
        changeCounter : prevState.changeCounter + 1,
      }
    });
  }

  togglePersonsHandler = (event) => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons : !doesShow,
    });
  }

  loginHandler = () => {
    this.setState({authenticated: true});
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
          isAuthenticated={this.state.authenticated}
        />
      );
    }

    return (
      <Aux>
        <button 
          onClick={() => {
            this.setState({ showCockpit : false });
          }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider value={{
          authenticated : this.state.authenticated,
          login : this.loginHandler
          }}>
        {
          this.state.showCockpit ? 
            <Cockpit 
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
            /> : null
        }
        {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }

  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am a React App.'));
}

export default withClass(App, classes.App);