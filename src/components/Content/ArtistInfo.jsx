import queryString from "querystring";
import React, { useState, useEffect } from "react";

const ArtistInfo = props => {
  const [albumData, setAlbumData] = useState(null);
  const [playlist, setPlaylist] = useState(null);
  const [concert, setConcert] = useState(null);

  useEffect(() => {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed["?access_token"];

    try {
      fetch(`https://api.spotify.com/v1/artists/${props.artist[0].id}/albums`, {
        headers: { Authorization: "Bearer " + accessToken }
      })
        .then(res => res.json())
        .then(json => {
          setAlbumData(json);
          let album = json.items[0].uri.split(":");
          setPlaylist(album[2]);
        });
    } catch (error) {
      // do nothing
    }

    try {
      fetch(
        `https://api.songkick.com/api/3.0/search/artists.json?apikey=8ntLiFXgPEvFSUst&query=${
          props.artist[0].name
        }`
      )
        .then(res => res.json())
        .then(json => {
          for (let i = 0; i < json.resultsPage.results.artist.length; i++) {
            if (
              json.resultsPage.results.artist[i].displayName ===
              props.artist[0].name
            ) {
              return json.resultsPage.results.artist[i].id;
            } else {
            }
          }
        })
        .then(artistID => {
          fetch(
            `https://api.songkick.com/api/3.0/artists/${artistID}/calendar.json?apikey=8ntLiFXgPEvFSUst`
          )
            .then(res => res.json())
            .then(json => {
              setConcert(json);
            });
        });
    } catch (error) {}
  }, []);

  return (
    <div>
      {!concert ? null : concert.resultsPage.totalEntries === 0 ? (
        <p>no concerts</p>
      ) : (
        <div>{concert.resultsPage.results.event[0].displayName}</div>
      )}
      {console.log("concert", concert)}
      {!!playlist ? (
        <iframe
          src={`https://open.spotify.com/embed/album/${playlist}`}
          width="300"
          height="380"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
          title="playlist"
        />
      ) : (
        <p>Loading newest playlist...</p>
      )}

      {!!albumData ? (
        albumData.items.map(album => <p>{album.name}</p>)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ArtistInfo;
