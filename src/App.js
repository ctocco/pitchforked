import React, { Component } from "react";
import queryString from "querystring";
import "./App.css";

class App extends Component {
  state = {
    artists: [],
    turnOn: false,
    selectedArtist: null,
    artistPageOn: false
  };

  handleSearchArtist = async event => {
    event.preventDefault();
    event.persist();
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed["?access_token"];
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${
          event.target.searchArtist.value
        }&type=artist`,
        {
          headers: { Authorization: "Bearer " + accessToken }
        }
      );
      const data = await response.json();
      this.setState({
        artists: data.artists.items,
        turnOn: true
      });
    } catch (error) {
      console.log(error);
    }

    event.target.searchArtist.value = "";
  };

  handleLoadArtistPage = name => {
    this.setState({ selectedArtist: name, artistPageOn: true });
  };

  render() {
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
        </form>
        <Display
          turnOn={this.state.turnOn}
          artists={this.state.artists}
          handleLoadArtistPage={this.handleLoadArtistPage}
          selectedArtist={this.state.selectedArtist}
          artistPageOn={this.state.artistPageOn}
        />
        <p />
      </div>
    );
  }
}

export default App;

const Display = props => {
  const artists = [...props.artists];
  const filteredArtist = artists.filter(
    artist => artist.name === props.selectedArtist
  );
  artists.splice(5);
  return (
    <div>
      {props.artistPageOn ? (
        <ArtistInfo artist={filteredArtist} />
      ) : props.turnOn ? (
        artists.map(artist => (
          <Artist
            handleLoadArtistPage={props.handleLoadArtistPage}
            artist={artist}
          />
        ))
      ) : (
        <p>Sign in and click search</p>
      )}
    </div>
  );
};

const Artist = props => {
  return (
    <div>
      <h2>{props.artist.name}</h2>
      {props.artist.images.length === 0 ? null : (
        <img
          onClick={() => props.handleLoadArtistPage(props.artist.name)}
          src={props.artist.images[1].url}
          alt={props.artist.name}
        />
      )}
      <div>
        {props.artist.genres.map(genre => (
          <div>
            {genre}
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

const ArtistInfo = props => {
  return (
    <div>{`this is going to be ${props.artist[0].name}'s artist page. `}</div>
  );
};
