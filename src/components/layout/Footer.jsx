import React from 'react';
import Spotify from '../../images/spotify_logo.png';


export default class MainFooter extends React.Component {
  
  render() {
    return (
        <footer className="footer" light>
		      <div  className="container-inner">
              <span className="text-muted pull-right"><p>Powered by:&nbsp;<img src={Spotify} alt="spotify-logo" className="logo"/>&nbsp;&nbsp;</p></span>
		      </div>
        </footer>
    );
  }
}