import React, { Component } from 'react'
import axios from 'axios'
import Thumbs from './Thumbs'

class SavedGifs extends Component {
  state = {
    savedGifs: []
  }

  componentWillMount() {
    console.log("ComponentWillMount")
    axios.get("https://strange-thing-api.herokuapp.com/api")
      .then((response) => {
        const newSavedGifs = response.data.strangeThings
        this.setState({ savedGifs: newSavedGifs })
      })
  }

  vote = (gif, i, voteUpOrDownForAyana) => {
    axios.patch("https://strange-thing-api.herokuapp.com/api/" + gif._id, {
      strangeness: gif.strangeness + voteUpOrDownForAyana
    })
      .then((response) => {
        const newSavedGifs = [...this.state.savedGifs]
        if (gif.strangeness + voteUpOrDownForAyana === 0) {
          newSavedGifs.splice(i, 1)
        } else {
          const newSavedGif = response.data.strangeThing
          newSavedGifs[i] = newSavedGif
        }
        console.log(response.data)
        this.setState({ savedGifs: newSavedGifs })
      })
  }

  render() {
    console.log("Render")
    console.log(this.state.savedGifs)
    const savedGifs = this.state.savedGifs.map((gif, i) => {
      return (
        <div className="gif" key={i}>
          <img src={gif.url} alt="saved" />
          <div>Score: +{gif.strangeness}</div>
          <Thumbs
            approve={() => this.vote(gif, i, 1)}
            disapprove={() => this.vote(gif, i, -1)} />
        </div>
      )
    })

    return (
      <div className="savedGifsContainer">
        <h3>Previously Saved Gifs</h3>
        <div className="savedGifsFlexContainer">
          {savedGifs}
        </div>
      </div>
    )
  }
}

export default SavedGifs