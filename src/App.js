import React, { Component } from "react";
import MainNavbar from "./components/layout/Navbar";
import "./App.css";
import MainFooter from "./components/layout/Footer";
import queryString from "querystring";
import { animateScroll as scroll } from 'react-scroll';


class App extends Component {
        state = {
          artists: [],
          turnOn: false,
          selectedArtist: null,
          artistPageOn: false,
          errorMessage: null
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
            this.setState({ errorMessage: "no entry for this artist" });
          }

          event.target.searchArtist.value = "";
        };

        handleLoadArtistPage = id => {
          this.setState({ selectedArtist: id, artistPageOn: true });
        };

        scrollFunction() {
          scroll.scrollTo(987);
        }


   
   



  render() {
    return (
      <div className="App">
      <div className="landing-page">
      <br />
       <MainNavbar />
        <h1>PITCHFORKED</h1>
        
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
                 <br/>
                 <br/>
                  <br/>
                <form onSubmit={event => this.handleSearchArtist(event)}>
                  <input type="text" name="searchArtist" />
                  <input type="submit" value="search" onClick={this.scrollFunction} />
                </form>
                
                <MainFooter />
            </div>
            <div className="search-results">
            <br />
            <MainNavbar />
            <Display
                  turnOn={this.state.turnOn}
                  artists={this.state.artists}
                  handleLoadArtistPage={this.handleLoadArtistPage}
                  selectedArtist={this.state.selectedArtist}
                  artistPageOn={this.state.artistPageOn}
                />
                </div>
            </div>
            );
          }
        }

export default App;

const Display = props => {
  const artists = [...props.artists];
  const filteredArtist = artists.filter(
    artist => artist.id === props.selectedArtist
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
          onClick={() => props.handleLoadArtistPage(props.artist.id)}
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

class ArtistInfo extends Component {
  state = {
    albumData: null
  };

  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed["?access_token"];
    try {
      fetch(
        `https://api.spotify.com/v1/search?q=${
          this.props.artist[0].name
        }&type=album`,
        {
          headers: { Authorization: "Bearer " + accessToken }
        }
      )
        .then(res => res.json())
        .then(json => this.setState({ albumData: json }));
    } catch (error) {}
  }

  render() {
    return (
      <div>
        {`this is going to be ${this.props.artist[0].name}'s artist page. `}
        {console.log(this.state.albumData)}
        {!!this.state.albumData ? (
          this.state.albumData.albums.items.map(album => <p>{album.name}</p>)
        ) : (
          <p>nothing</p>
        )}
      </div>
    );
  }
}
