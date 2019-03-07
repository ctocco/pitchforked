import React from "react";
import Spotify from "../../images/spotify_logo.png";
import "./footer.css";

export default class MainFooter extends React.Component {
  scrollToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  render() {
    return (
      <footer className="footer" light>
        <div className="container-inner">
          <span />
          <div onClick={this.scrollToTop} id="top-ref">
          ▲▲▲
          </div>
          <span className="text-muted">
            Powered by:{" "}
            <img src={Spotify} alt="spotify-logo" className="logo" />
          </span>
        </div>
      </footer>
    );
  }
}
