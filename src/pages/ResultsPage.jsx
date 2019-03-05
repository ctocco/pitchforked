import React, { useState } from "react";
import ArtistInfo from "../components/Content/ArtistInfo";
import Artist from "../components/Content/Artist";
import "./resultspage.css";
import TopArtist from "../components/Content/TopArtist";

const Display = props => {
  console.log(props);
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
    props.artists.splice(6);

    return (
      <div>
        <h2 style={{ marginBottom: "25px" }}>TOP RESULTS</h2>
        <hr />
        <TopArtist topArtist={props.artists[0]} />
        <hr />
        <div className="resultspage-container">
          {artistPageOn ? (
            <ArtistInfo artist={filteredArtist} />
          ) : props.turnOn ? (
            props.artists
              .slice(1)
              .map(artist => (
                <Artist
                  handleLoadArtistPage={handleLoadArtistPage}
                  artist={artist}
                />
              ))
          ) : (
            <p>Sign in and click search</p>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>no results</p>
      </div>
    );
  }
};

export default Display;
