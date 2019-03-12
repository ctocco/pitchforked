import React, { useState } from "react";
import "./singlealbum.css";

export default function SingleAlbum(props) {
  const [animation, setAnimation] = useState(false);

  const handleClick = uri => {
    props.handleChangePlaylist(uri);
    setAnimation(true);
  };

  return (
    <ul
      className={animation ? "animation-album" : "default-list-styling"}
      onAnimationEnd={() => {
        setAnimation(false);
      }}
      onClick={() => handleClick(props.album.uri)}
    >
      <li>Album: {props.album.name}</li>
      <li>Release date: {props.album.release_date}</li>
      <li>Total Tracks:{props.album.total_tracks}</li>

      {/* image is an array itself so hard to get it to show */}
      {/* <img src={album.name.images[1].url} alt="album" /> */}
    </ul>
  );
}
