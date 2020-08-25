import React, { useState } from "react";
import "./App.css";

import Person from "./Person/Person";

const app = (props) => {
  const [personsState, setPersons] = useState({
    persons: [
      { name: "Matt", age: 20 },
      { name: "Michael", age: 20 },
      { name: "Pablo", age: 21 },
    ],
    showPersons: false
  });

  const switchNameHandler = (name) => {
    setPersons({
      persons: [
        { name: name, age: 22 },
        { name: "Michael", age: 20 },
        { name: "Pabloo", age: 21 },
      ],
    });
  };

  const nameChangedHandler = (event) => {
    setPersons({
      persons: [
        { name: "Matt", age: 20 },
        { name: event.target.value, age: 20 },
        { name: "Pabloo", age: 21 },
      ],
    });
  };

  const togglePersonHandler = () => {
    const doesShow = personsState.showPersons;
    setPersons({persons: [
      { name: "Matt", age: 20 },
      { name: "Michael", age: 20 },
      { name: "Pablo", age: 21 },
    ],
    showPersons: !doesShow})
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This really works</p>
      <button onClick={togglePersonHandler}>
        Switch Name
      </button>
      
      {personsState.showPersons ?
        <div>
          <Person
            name={personsState.persons[0].name}
            age={personsState.persons[0].age} />
          <Person
            name={personsState.persons[1].name}
            age={personsState.persons[1].age}
            click={switchNameHandler.bind(this, "Matt!!!")}
            changed={nameChangedHandler}>
            BMW owner
          </Person>
          <Person
            name={personsState.persons[2].name}
            age={personsState.persons[2].age}/>
        </div> : null
      }
    </div>
  );
};

export default app;
