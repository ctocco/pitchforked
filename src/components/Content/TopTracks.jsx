import React from "react";

const TopTracks = props => {
  const tracks = !!props.topTracks ? (
    props.topTracks.tracks.slice(0, 3).map(track => {
      return (
        <div
          style={{
            lineHeight: "32px",
            padding: "5px",
            border: "1px solid #ededed",
            borderRadius: "2%",
            background: "#fff"
          }}
        >
          Track: {track.name}
          <br />
          Album: {track.album.name}
          <br />
          Other Artist(s): {track.album.artists[0].name}
        </div>
      );
    })
  ) : (
    <p>Loading...</p>
  );

  return <div>{tracks}</div>;
};

const trackContainer = {
  border: "1px solid #ededed",
  borderRadius: "2%",
  background: "#fff"
};

export default TopTracks;
