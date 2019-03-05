import React from 'react';
import Spotify from '../../images/spotify_logo.png';


export default class MainFooter extends React.Component {
  
  render() {
    return (
        <footer className="footer" light>
		      <div  className="container-inner">
              <span className="text-muted">Powered by:  <img src={Spotify} alt="spotify-logo" className="logo" /></span>
		      </div>
        </footer>
    );
  }
}