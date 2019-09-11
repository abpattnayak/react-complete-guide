import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = ( props ) => {
  const [ personsState, setPersonsState ] = useState({
    persons : [
      {name: "Abhishekh", age: 24},
      {name: "Achyuta", age: 22},
      {name: "Mayank", age: 23},
    ],
    otherState: "some other value",
  });

  const [otherState, setOtherState] = useState('some other value'); 

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log("was clicked...");
    // DON'T DO THIS: this.state.persons[0].name = "Abhisekh Pattanayak";
    setPersonsState({
      persons : [
        {name: "Abhishekh Pattanayak", age: 26},
        {name: "Achyuta Das", age: 25},
        {name: "Mayank Sharma", age: 24},
      ],
      otherState : "some other value",
    });
  }

  return (
    <div className="App">
      <h1>Hi, I am a React App.</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>
        My Hobbies: Racing
      </Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am a React App.'));
}

export default app;

// state = {
//   persons : [
//     {name: "Abhishekh", age: 24},
//     {name: "Achyuta", age: 22},
//     {name: "Mayank", age: 23},
//   ],
//   otherState: "some other value",
// };

// switchNameHandler = () => {
//   // console.log("was clicked...");
//   // DON'T DO THIS: this.state.persons[0].name = "Abhisekh Pattanayak";
//   this.setState( {
//     persons : [
//       {name: "Abhishekh Pattanayak", age: 26},
//       {name: "Achyuta Das", age: 25},
//       {name: "Mayank Sharma", age: 24},
//     ]
//   });
// }
