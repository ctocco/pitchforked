import React from "react";

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
    <div>
      <h3 style={{ marginBottom: "25px", marginTop: "25px" }}>
        ALBUM PLAYLIST
      </h3>
      {playlist}
    </div>
  );
};

export default Playlist;