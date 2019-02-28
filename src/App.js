import React, { Component } from "react";
import queryString from "querystring";
import "./App.css";

class App extends Component {
  state = {
    artists: [],
    turnOn: false
  };

  handleSearchArtist = event => {
    event.preventDefault();
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed["?access_token"];
    fetch(
      `https://api.spotify.com/v1/search?q=${
        event.target.searchArtist.value
      }&type=artist`,
      {
        headers: { Authorization: "Bearer " + accessToken }
      }
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        return this.setState({
          artists: data.artists.items,
          turnOn: true
        });
      });
    event.target.searchArtist.value = "";
  };

  componentDidMount() {}

  render() {
    const artists = [...this.state.artists];
    artists.splice(5);
    return (
      <div className="App">
        <h2>Hello World</h2>
        {true ? (
          <button
            onClick={() =>
              (window.location =
                "http://pitchforkd-backend.herokuapp.com/login")
            }
          >
            Sign in with Spotify
          </button>
        ) : (
          <p>signed in</p>
        )}
        <form onSubmit={event => this.handleSearchArtist(event)}>
          <input type="text" name="searchArtist" />
          <input type="submit" value="search" />
          {this.state.turnOn ? (
            artists.map(artist => <Display artist={artist} />)
          ) : (
            <p>Sign in and click search</p>
          )}
        </form>
        <p />
      </div>
    );
  }
}

export default App;

const Display = props => {
  return (
    <div>
      <h2>{props.artist.name}</h2>
      {props.artist.images.map(image => (
        <img alt={props.artist.name} src={image.url} />
      ))}
      <p>
        {props.artist.genres.map(genre => (
          <div>
            {genre}
            <br />
          </div>
        ))}
      </p>
    </div>
  );
};
