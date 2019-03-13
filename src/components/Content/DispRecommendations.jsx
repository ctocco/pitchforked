import React from "react";
import "./css/DispRecommendations.css";

const Recommendations = props => {
  const recommend = !!props.artistRecommendations ? (
    props.artistRecommendations.artists.map(recommend => {
      return (
        <ul className="disp-container">
          <li>{recommend.name}</li>
        </ul>
      );
    })
  ) : (
    <p>Loading...</p>
  );

  return (
    <div className="similar-artists-container">
      <div className="artist-list">{recommend}</div>
    </div>
  );
};

export default Recommendations;
