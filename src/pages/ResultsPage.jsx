import React, { useState } from "react";
import ArtistInfo from "../components/Content/ArtistInfo";
import Artist from "../components/Content/Artist";

const Display = props => {
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
    props.artists.splice(5);

    return (
      <div>
        {props.artistPageOn ? (
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
    return (
      <div>
        <p>no results</p>
      </div>
    );
  }
};

export default Display;
