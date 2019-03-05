import React, { useState, useEffect } from "react";
import MainNavbar from "./components/layout/Navbar";
import "./App.css";
import MainFooter from "./components/layout/Footer";
import queryString from "querystring";
import { animateScroll as scroll } from "react-scroll";

const App = props => {
  const [artists, setArtists] = useState([]);
  const [showSignIn, setShowSignIn] = useState(true);
  const [turnOn, setTurnOn] = useState(false);

  const handleSearchArtist = async event => {
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

      setArtists(data.artists.items);
      setTurnOn(true);
    } catch (error) {}

    event.target.searchArtist.value = "";
  };

  const loginSpotify = () => {
    window.location = "http://pitchforkd-backend.herokuapp.com/login";
    setShowSignIn(false);
  };

  return (
    <div className="App">
      <div className="landing-page">
        <br />
        <MainNavbar />
        <h1>PITCHFORKED</h1>

        {showSignIn ? (
          <button onClick={() => loginSpotify()}>Sign in with Spotify</button>
        ) : (
          <p>signed in</p>
        )}
        <form onSubmit={event => handleSearchArtist(event)}>
          <input type="text" name="searchArtist" />
          <input
            type="submit"
            value="search"
            onClick={() => scroll.scrollTo(987)}
          />
        </form>
        <MainFooter />
      </div>
      <div className="search-results">
        <br />
        <MainNavbar />
        <Display turnOn={turnOn} artists={artists} />
      </div>
    </div>
  );
};

export default App;

const Display = props => {
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [artistPageOn, setArtistPageOn] = useState(false);
  const handleLoadArtistPage = id => {
    setSelectedArtist(id);
    setArtistPageOn(true);
  };

  if (props.artists.length !== 0) {
    const filteredArtist = props.artists.filter(
      artist => artist.id === selectedArtist
    );
    props.artists.splice(5);

    return (
      <div>
        {artistPageOn ? (
          <ArtistInfo artist={filteredArtist} />
        ) : props.turnOn ? (
          props.artists.map(artist => (
            <Artist
              handleLoadArtistPage={handleLoadArtistPage}
              artist={artist}
            />
          ))
        ) : (
          <p>Sign in and click search</p>
        )}
      </div>
    );
  } else {
    return <div />;
  }
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

const ArtistInfo = props => {
  const [albumData, setAlbumData] = useState(null);

  useEffect(() => {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed["?access_token"];
    try {
      fetch(
        `https://api.spotify.com/v1/search?q=${
          props.artist[0].name
        }&type=album`,
        {
          headers: { Authorization: "Bearer " + accessToken }
        }
      )
        .then(res => res.json())
        .then(json => setAlbumData(json));
    } catch (error) {
      // do nothing
      console.log("nothing");
    }
  }, []);

  return (
    <div>
      {`this is going to be ${props.artist[0].name}'s artist page. `}
      {console.log(albumData)}
      {!!albumData ? (
        albumData.albums.items.map(album => <p>{album.name}</p>)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
