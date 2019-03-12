import React from "react";
import Spotify from "../../images/spotify_logo.png";
import "./footer.css";


export default class MainFooter extends React.Component {
  render() {
    return (
      <footer className="footer" light>
        <div className="container-inner">

          <a href="#top" className="top-ref">
          ▲▲▲
          </a>
          <span className="footer-content text-muted">
            Powered by:{" "}
            <img src={Spotify} alt="spotify-logo" className="logo" />
          </span>
        </div>
      </footer>
    );
  }
}
