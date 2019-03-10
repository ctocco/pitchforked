import React from "react";

const AlbumData = props => {
  // mapping over album data
  const albums = !!props.albumData ? (
    props.albumData.items.map(album => <p>{album.name}</p>)
  ) : (
    <p>Loading...</p>
  );

  return (
    <div>
      <h2 style={{ marginBottom: "25px", marginTop: "25px" }}>ALBUMS</h2>
      {albums}
    </div>
  );
};

export default AlbumData;
