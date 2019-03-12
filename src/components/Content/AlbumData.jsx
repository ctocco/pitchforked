import React from "react";

const AlbumData = props => {
  // mapping over album data
  const albums = !!props.albumData ? (
    props.albumData.items.slice(0, 3).map(album => {
      return (
        <ul style={albumContainer}>
          <li>Album: {album.name}</li>
          <li>Release date: {album.release_date}</li>
          <li>Total Tracks:{album.total_tracks}</li>

          {/* image is an array itself so hard to get it to show */}
          {/* <img src={album.name.images[1].url} alt="album" /> */}
        </ul>
      );
    })
  ) : (
    <p>Loading...</p>
  );

  return <div className="container-album">{albums}</div>;
};

const albumContainer = {
  border: "1px solid #ededed",
  borderRadius: "2%",
  background: "#fff"
};

export default AlbumData;
