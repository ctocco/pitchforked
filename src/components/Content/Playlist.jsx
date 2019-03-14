import React from "react";
import "./css/playlist.css";

const Playlist = props => {
  const playlist = !!props.playlist ? (
    <iframe
      src={`https://open.spotify.com/embed/album/${props.playlist}`}
      width="300"
      height="380"
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media"
      title="playlist"
    />
  ) : (
    <p>Loading newest playlist...</p>
  );
  return (
    <div className="container-playlist">
      <h3>
        ALBUM PLAYLIST
      </h3>
      {playlist}
    </div>
  );
};

export default Playlist;
