import React, {Component} from 'react'
import axios from 'axios'

class SavedGifs extends Component {
    state = {
        savedGifs: []
    }

    componentWillMount() {
        axios
            .get("https://strange-thing-api.herokuapp.com/api")
            .then((response) => {
                const newSavedGifs = response.data.strangeThings
                this.setState({savedGifs: newSavedGifs})
            })
    }

    render() {
        console.log("render")
        const savedGifs = this.state.savedGifs.map ((gif, i) => {
                return (
                    <div className="gif" key={i}>
                        <img src={gif.url} alt="saved"/>
                        <div>Score: +{gif.strangeness}</div>
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
