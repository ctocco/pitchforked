import React from "react";
import { Button  } from 'reactstrap';
import SpotifyLogin from '../../images/spotify_login.png';
import Loader from '../../images/loading.gif';

const Signin = props => {

  return (
    <div>
      <h1 className="page-title">PITCHFORK'D</h1>
      {props.showSignIn ? (
        <Button className="fork-button" onClick={() => props.loginSpotify()}>
        <img src={SpotifyLogin} className="login-button" alt="login"/>
        </Button>
      ) : (
        <img className="loading" src={Loader} alt="loading"/>
      )}
     
    </div>
  );
};

export default Signin;
