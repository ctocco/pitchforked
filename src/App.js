import React, { useState, useEffect } from "react";
import MainNavbar from "./components/layout/Navbar";
import "./App.css";
import MainFooter from "./components/layout/Footer";
import queryString from "querystring";
import SearchBar from "./components/layout/SearchBar";
import SignIn from "./components/auth/Signin";
import ResultsPage from "./pages/ResultsPage";
import About from "./pages/About";


const App = props => {
  const [artists, setArtists] = useState([]);
  const [showSignIn, setShowSignIn] = useState(true);
  const [turnOn, setTurnOn] = useState(false);
  const [artistPageOn, setArtistPageOn] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  
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
      setArtistPageOn(false);
    } catch (error) {}

    event.target.searchArtist.value = "";
  };

  useEffect(() => {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed["?access_token"];
    if (!!accessToken) {
      setSignedIn(true);
    }
  }, []);

  const loginSpotify = () => {
    window.location = "http://pitchforkd-backend.herokuapp.com/login";
    setShowSignIn(false);
  };


  return (
    <div className="App" id="top">
      <div className="landing-page">
        <br />
        {signedIn ? (
          <SearchBar handleSearchArtist={handleSearchArtist} />
        ) : (
          <SignIn loginSpotify={loginSpotify} showSignIn={showSignIn} />
        )}
        <MainFooter />
      </div>
      <div className="search-results">
      <br />
      <br />
        <MainNavbar />
        <ResultsPage
          turnOn={turnOn}
          artists={artists}
          artistPageOn={artistPageOn}
          setArtistPageOn={setArtistPageOn}
          setTurnOn={setTurnOn}
        />
        </div>
        <div className="about-page">
        <br />
        <br />
        <About />
        </div>
      </div>
  );
};

export default App;
