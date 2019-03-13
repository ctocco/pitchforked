import React from "react";
import './css/DispRecommendations.css';


const Recommendations = props => {

  const handleClick = recommend => {
    console.log(recommend);
    props.setArtists(recommend)
  }

    const recommend = !!props.artistRecommendations ? (
        props.artistRecommendations.artists.map(recommend => {
          // console.log(recommend);
            return(
                <ul className="disp-container">
                  <li><a onClick={() => handleClick(recommend)}>{recommend.name}</a></li>
                </ul>
              );
            })
          ) : (
            <p>Loading...</p>
          );

        return (
                <div className="similar-artists-container">
                    <div className="artist-list">{recommend}</div>
                </div>);
};


export default Recommendations;
