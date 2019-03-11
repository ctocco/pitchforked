import React from "react";
import "./artist.css";
import noImage from "../../images/no-image.jpg";

const Artist = props => {
  return (
    <div
      className="image-box "
      onClick={() => props.handleLoadArtistPage(props.artist.id)}
    >
      <div className="image-size mb-2 mt-2" id="hover-container">
        {props.artist.images.length === 0 ? (
          <img className="artist-image" src={noImage} alt={props.artist.name} />
        ) : (
          <img
            className="artist-image"
            src={props.artist.images[1].url}
            alt={props.artist.name}
          />
        )}
      </div>
      {props.artist.name.length === 0 ? null : (
        <p
          className="artist-click"
          onClick={() => props.handleLoadArtistPage(props.artist.id)}
        >
          {props.artist.name}
        </p>
      )}
    </div>
  );
};

export default Artist;
