import React from "react";
import SingleAlbum from "./SingleAlbum";

const AlbumData = props => {
  // mapping over album data
  const albums = !!props.albumData ? (
    props.albumData.items.slice(0, 3).map(album => {
      return (
        <SingleAlbum
          handleChangePlaylist={props.handleChangePlaylist}
          album={album}
        />
      );
    })
  ) : (
    <p>Loading...</p>
  );

  return (
    <div id="container-album" className="container-album">
      {albums}
    </div>
  );
};

export default AlbumData;
