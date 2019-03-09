import queryString from "querystring";
// what does query string do
import React, { useState, useEffect } from "react";
import News from "./News";
import AlbumData from "./AlbumData";
import Concerts from "./Concerts";

const ArtistInfo = props => {
  const [albumData, setAlbumData] = useState(null);
  const [playlist, setPlaylist] = useState(null);
  const [concert, setConcert] = useState(null);
  const [buzzfeedNews, setbuzzfeedNews] = useState(null);
  const [mtvNews, setmtvNews] = useState(null);
  const [entertainmentweekly, setentertainmentweeklyNews] = useState(null);
  const [newsName, setNewsName] = useState([]);

  useEffect(() => {
    setNewsName(["Buzzfeed", "MTV", "Entertainment Weekly"]);
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed["?access_token"];

    // SPOTIFY PLAYLIST
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

    // CONCERT DATA
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

    //NEWS API - 2 results each

    //BUZZFEED
    try {
      fetch(
        `https://newsapi.org/v2/everything?q=${
          props.artist[0].name
        }&from=2019-02-25&sortBy=popularity&sources=buzzfeed&apiKey=0f89c66f2e8241fb8dc9e5a641163a63`
      )
        .then(res => res.json())
        .then(json => setbuzzfeedNews(json));
    } catch (error) {}
    //MTV
    try {
      fetch(
        `https://newsapi.org/v2/everything?q=${
          props.artist[0].name
        }&from=2019-02-25&sortBy=popularity&sources=mtv-news&apiKey=0f89c66f2e8241fb8dc9e5a641163a63`
      )
        .then(res => res.json())
        .then(json => setmtvNews(json));
    } catch (error) {}
    // Entertainment Weekly
    try {
      fetch(
        `https://newsapi.org/v2/everything?q=${
          props.artist[0].name
        }&from=2019-02-25&sortBy=popularity&sources=entertainment-weekly&apiKey=0f89c66f2e8241fb8dc9e5a641163a63`
      )
        .then(res => res.json())
        .then(json => setentertainmentweeklyNews(json));
    } catch (error) {}

    //this was an attempt to fetch data in another api folder however did not work

    // try {
    //   const mtv = new newsApi("mtv-news", artist);
    //   mtv.getData().then(json => setmtvNews(json));
    // } catch (error) {}
  }, []);

  if (mtvNews) {
    console.log(mtvNews);
  }
  return (
    <div>
      <h3>Latest News</h3>
      <News news={buzzfeedNews} newsName={newsName[0]} />
      <News news={mtvNews} newsName={newsName[1]} />
      <News news={entertainmentweekly} newsName={newsName[2]} />
      <hr />
      <Concerts concert={concert} />

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
      <AlbumData albumData={albumData} />
    </div>
  );
};

export default ArtistInfo;
