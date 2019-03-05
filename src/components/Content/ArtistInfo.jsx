import queryString from "querystring";
import React, { useState, useEffect } from "react";

const ArtistInfo = props => {
  const [albumData, setAlbumData] = useState(null);

  useEffect(() => {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed["?access_token"];
    console.log(props.artist);
    try {
      fetch(`https://api.spotify.com/v1/artists/${props.artist[0].id}/albums`, {
        headers: { Authorization: "Bearer " + accessToken }
      })
        .then(res => res.json())
        .then(json => setAlbumData(json));
    } catch (error) {
      // do nothing
      console.log("nothing");
    }
  }, []);

  return (
    <div>
      {`this is going to be ${props.artist[0].name}'s artist page. `}
      {console.log(albumData)}
      {!!albumData ? (
        albumData.items.map(album => <p>{album.name}</p>)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ArtistInfo;
