import React from "react";
import { Button  } from 'reactstrap';
import SpotifyLogin from '../../images/spotify_login.png';

const Signin = props => {
  return (
    <div>
      <h1>PITCHFORK'D</h1>
      {props.showSignIn ? (
        <Button className="fork-button" onClick={() => props.loginSpotify()}>
        <img src={SpotifyLogin} className="login-button" alt="login"/>
        </Button>
      ) : (
        <p>signed in</p>
      )}
     
    </div>
  );
};

export default Signin;
