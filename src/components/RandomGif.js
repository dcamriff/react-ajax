import React, {Component} from 'react'
import axios from 'axios'
import Thumbs from './Thumbs'

class RandomGif extends Component {
    state = {
        randomGifUrl: ""
    }
    componentWillMount() {
        this.getRandomGif()
    }

    getRandomGif = () => {
        axios
            .get("http://api.giphy.com/v1/gifs/random", {
            params: {
                api_key: "muCgyCHu2jdyUqZG6JDXbPK4pnXyhIdv",
                rating: "G"
            }
        })
            .then((response) => {
                console.log(response.data)
                const newRandomGif = response.data.data.image_original_url
                this.setState({randomGifUrl: newRandomGif})
            })
    }

    approve = () => {
        const payload = {
            url: this.state.randomGifUrl,
            strangeness: 1
        }

        axios
            .post("https://strange-thing-api.herokuapp.com/api", payload)
            .then((response) => {

                this.getRandomGif()
            })
            this.getRandomGif()
    }

    // disapprove = () => {
    //     this.state.randomGifUrl
    //     }

    render() {
        const randomGifUrl = this.state.randomGifUrl
        return (
            <div>
                <img className="randomGif" src={randomGifUrl} alt="random" />
                <br/>
                <Thumbs approve={this.approve} disapprove={this.disapprove}/>
            </div>
        )
    }
}

    export default RandomGif