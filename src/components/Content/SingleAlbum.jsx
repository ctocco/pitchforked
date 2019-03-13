import React from "react";
import "./css/singlealbum.css";

export default function SingleAlbum(props) {
  const handleClick = (event, uri) => {
    props.handleChangePlaylist(uri);
    const nodeList = document.getElementById("container-album");
    console.log(nodeList.childNodes[0].id);
    console.log("id", event.target.id);
    for (let i = 0; i < nodeList.childNodes.length; i++) {
      if (event.target.id === nodeList.childNodes[i].id) {
        if (event.target.className === "inactiveSelection") {
          event.target.className = "activeSelection";
        } else {
          event.target.className = "inactiveSelection";
        }
      } else {
        nodeList.childNodes[i].className = "inactiveSelection";
      }
    }
  };

  return (
    <div
      style={{
        lineHeight: "32px",
        padding: "5px",
        border: "1px solid #ededed"
      }}
      id={props.album.name}
      className="inactiveSelection"
      onClick={event => handleClick(event, props.album.uri)}
    >
      Album: {props.album.name} <br />
      Release date: {props.album.release_date}
      <br />
      Total Tracks:{props.album.total_tracks}
    </div>
  );
}
