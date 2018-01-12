import React, {Component} from "react";
import axios from "axios";
import SavedGifs from './SavedGifs'

class App extends Component {
  render() {
    return (
      <div className="App">
        <img className="backgroundImg" src="http://i.imgur.com/DysM91b.png" alt="background"/>
        <h1>Hello World</h1>
        <SavedGifs />
      </div>
    );
  }
}

export default App;
