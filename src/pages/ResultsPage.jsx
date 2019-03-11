import React, { useState } from "react";
import ArtistInfo from "../components/Content/ArtistInfo";
import Artist from "../components/Content/Artist";
import "./resultspage.css";
import TopArtist from "../components/Content/TopArtist";

const Display = props => {
  console.log(props);
  const [selectedArtist, setSelectedArtist] = useState(null);

  const handleLoadArtistPage = id => {
    setSelectedArtist(id);
    props.setArtistPageOn(true);
    props.setTurnOn(false);
  };

  if (props.artists.length !== 0) {
    const filteredArtist = props.artists.filter(
      artist => artist.id === selectedArtist
    );
    props.artists.splice(6);

    return (
      <div className="display">
        {props.turnOn ? (
          <div className="top-artist-display">
            <TopArtist
              topArtist={props.artists[0]}
              handleLoadArtistPage={handleLoadArtistPage}
            />
          </div>
        ) : null}

        <div className="resultspage-container" style={{ marginTop: "20px" }}>
          {props.artistPageOn ? (
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
    return <div />;
  }
};

export default Display;
