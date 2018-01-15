import React, {Component} from "react"
import SavedGifs from './SavedGifs'
import RandomGif from './RandomGif'

class App extends Component {
  render() {
    return (
      <div className="App">
        <img className="backgroundImg" src="http://i.imgur.com/DysM91b.png" alt="background"/>
        <h1>Hello World</h1>
        <RandomGif />
        <SavedGifs />
      </div>
    )
  }
}

export default App
