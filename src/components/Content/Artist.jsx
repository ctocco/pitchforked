import React from "react";

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

export default Artist;
