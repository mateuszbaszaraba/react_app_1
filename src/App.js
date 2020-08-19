import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Matt", age: 20 },
      { name: "Michael", age: 20 },
      { name: "Pablo", age: 21 },
    ],
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "Mattt", age: 22 },
        { name: "Michael", age: 20 },
        { name: "Pabloo", age: 21 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This really works</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          BMW owner
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
