import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./artist.css";
import noImage from "../../images/no-image.jpeg";

const Artist = props => {
  return (
    <div
      className="image-box"
      onClick={() => props.handleLoadArtistPage(props.artist.id)}
    >
      <div className="image-size mb-2 mt-2">
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
