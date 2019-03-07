import React from "react";
import "./topartist.css";

const TopArtist = props => {
  return (
    <div
      className="topArtist-container"
      onClick={() => props.handleLoadArtistPage(props.topArtist.id)}
    >
      <div className="topArtist-child topArtist-title">
        <h2>TOP RESULT</h2>
        <h1 id="top-artist-name">{props.topArtist.name}</h1>
      </div>
      <div className="topArtist-child">
        <img
          className="top-artist-image-box "
          src={props.topArtist.images[1].url}
          alt={props.topArtist.name}
        />
      </div>
      <div className="topArtist-child">
        {props.topArtist.genres.slice(0, 3).map(genre => {
          return (
            <div className="topArtist-children">
              <ul>
                <li>{genre}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopArtist;
