import queryString from "querystring";
// what does query string do?
import React, { useState, useEffect } from "react";
import News from "./News";
import AlbumData from "./AlbumData";
import Concerts from "./Concerts";
import Playlist from "./Playlist";
import "./artistInfo.css";
import { Collapse } from "reactstrap";

const ArtistInfo = props => {
  const [albumData, setAlbumData] = useState(null);
  const [playlist, setPlaylist] = useState(null);
  const [concert, setConcert] = useState(null);
  const [buzzfeedNews, setbuzzfeedNews] = useState(null);
  const [mtvNews, setmtvNews] = useState(null);
  const [entertainmentweekly, setentertainmentweeklyNews] = useState(null);
  const [newsName, setNewsName] = useState([]);
  const [artistPic, setArtistPic] = useState(null);
  const [collapsedNews, setCollapsedNews] = useState(false);

  const toggleNews = () => {
    setCollapsedNews(!collapsedNews);
  };

  useEffect(() => {
    setArtistPic(props.artist[0].images[0].url);

    // NewsName gives the titles for the news
    setNewsName(["Buzzfeed", "MTV", "Entertainment Weekly"]);
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed["?access_token"];

    // SPOTIFY PLAYLIST DATA
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

    //NEWS API DATA - 2 results each
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
  }, []);

  if (albumData) {
    console.log("albums from the", albumData);
  }
  return (
    <div className="container-artists text-left m-3">
      {!!artistPic ? (
        <div className="artist-page-image-container">
          <img id="artist-page-pic" src={artistPic} />
        </div>
      ) : null}
      <div className="main-news-container">
        <h2 onClick={toggleNews}>Latest News</h2>
        <Collapse isOpen={collapsedNews}>
          <div className="news-container mb-2" style={mainNewsContainer}>
            <p className="ml-3 mt-3 " style={newsSiteStyle}>
              {newsName[0]}
            </p>
            <News news={buzzfeedNews} />
          </div>
          <div className="news-container mb-2 " style={mainNewsContainer}>
            <p className="ml-3 mt-3" style={newsSiteStyle}>
              {newsName[1]}
            </p>
            <News news={mtvNews} />{" "}
          </div>
          <div className="news-container mb-2" style={mainNewsContainer}>
            <p className="ml-3 mt-3" style={newsSiteStyle}>
              {newsName[2]}
            </p>
            <News news={entertainmentweekly} />
          </div>
        </Collapse>
      </div>

      <Concerts concert={concert} />
      <Playlist playlist={playlist} />
      <AlbumData albumData={albumData} />
    </div>
  );
};

// add basic styling to the news container directly here
const newsSiteStyle = {
  marginBottom: 0
};

const mainNewsContainer = {
  background: "#fff"
};

export default ArtistInfo;
