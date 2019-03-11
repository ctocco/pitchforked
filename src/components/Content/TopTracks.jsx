import React from 'react';

const TopTracks = props => {
    const tracks = !!props.topTracks ? (
        props.topTracks.tracks.slice(0, 3).map(track => {
            return(
                <ul style={albumContainer}>
                  <li>Track: {track.name}</li>
                  <li>Spotify popularity rating: {track.popularity}/100</li>
                  <li>Album: {track.album.name}</li>
                  <li>Artist(s): {track.album.artists[0].name}</li>
                </ul>
              );
            })
          ) : (
            <p>Loading...</p>
          );
        
        return (
            <div>
              <h2 style={{ marginBottom: "25px", marginTop: "25px" }}>Top Tracks</h2>
              {tracks}
            </div>
          );
}
        
        const albumContainer = {
          border: "1px solid #ededed",
          borderRadius: "2%",
          background: "#fff"
        };

    export default TopTracks;