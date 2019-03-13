import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import AlbumData from "./AlbumData";
import TopTracks from "./TopTracks";
import Recommendations from './DispRecommendations';
import "./css/tabalbumtracks.css";

export default function TabAlbumTracks(props) {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <div className="tab-album-tracks">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={activeTab == "1" ? "active" : ""}
            onClick={() => setActiveTab("1")}
          >
            <h2 className="tab">Latest Albums</h2>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab == "2" ? "active" : ""}
            onClick={() => setActiveTab("2")}
          >
            <h2 className="tab">Top Tracks</h2>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab == "3" ? "active" : ""}
            onClick={() => setActiveTab("3")}
          >
            <h2 className="tab">Similar Artists</h2>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <AlbumData
            handleChangePlaylist={props.handleChangePlaylist}
            albumData={props.albumData}
          />
        </TabPane>
        <TabPane tabId="2">
          <TopTracks topTracks={props.topTracks} />
        </TabPane>
        <TabPane tabId="3">
        <Recommendations artistRecommendations={props.artistRecommendations} handleLoadArtistPage={props.handleLoadArtistPage} setArtists={props.setArtists} />
        </TabPane>
      </TabContent>
    </div>
  );
}
