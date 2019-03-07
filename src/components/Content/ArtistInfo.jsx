import queryString from "querystring";
import React, { useState, useEffect } from "react";

const ArtistInfo = props => {
  const [albumData, setAlbumData] = useState(null);
  const [playlist, setPlaylist] = useState(null);
  const [concert, setConcert] = useState(null);
  const [news, setNews] = useState(null);

  console.log(props);

  useEffect(() => {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed["?access_token"];
    // fetching the data to play in the spotify playlist
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
    // fetching the latest concert data
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
    // fetching the news api data
    try {
      fetch(
        `https://newsapi.org/v2/everything?q=${
          props.artist[0].name
        }&from=2019-02-25&sortBy=popularity&sources=buzzfeed&apiKey=0f89c66f2e8241fb8dc9e5a641163a63`
      )
        .then(res => res.json())
        .then(json => setNews(json));
    } catch (error) {}
  }, []);
  console.log(news);

  return (
    <div>
      <h3>Latest News</h3>
      <h2>{!!news ? news.articles[0].source.name : null}</h2>
      {!!news
        ? news.articles.slice(0, 3).map(article => {
            // console.log("published at", article.publishedAt.split("T"));
            let date = article.publishedAt.split("T");
            let splitDate = date[0].split("-");
            let finalDate = splitDate.reverse().join(".");

            return (
              <div>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <p>{finalDate}</p>
              </div>
            );
          })
        : null}
      <hr />

      <h2 style={{ marginBottom: "25px" }}>UPCOMING CONCERTS</h2>
      {!concert ? null : concert.resultsPage.totalEntries === 0 ? (
        <p>There are currently no upcoming concerts for this artist</p>
      ) : (
        <div>{concert.resultsPage.results.event[0].displayName}</div>
      )}
      {console.log("concert", concert)}

      <h3 style={{ marginBottom: "25px", marginTop: "25px" }}>
        ALBUM PLAYLIST
      </h3>
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
      <h2 style={{ marginBottom: "25px", marginTop: "25px" }}>ALBUMS</h2>
      {!!albumData ? (
        albumData.items.map(album => <p>{album.name}</p>)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ArtistInfo;
