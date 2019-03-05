import React from "react";

const Signin = props => {

  return (
    <div>
      <h1>PITCHFORKED</h1>
      {props.showSignIn ? (
        <button onClick={() => props.loginSpotify()}>
          Sign in with Spotify
        </button>
      ) : (
        <p>signed in</p>
      )}
    </div>
  );
};

export default Signin;
