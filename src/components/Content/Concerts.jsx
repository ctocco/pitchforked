import "./css/concert.css";
import { Collapse } from "reactstrap";
import React, { useState } from "react";

const Concerts = props => {
  const [collapsedConcert, setCollapsedConcert] = useState(false);

  const toggleConcert = () => {
    setCollapsedConcert(!collapsedConcert);
  };

  const concert = !props.concert ? null : props.concert.resultsPage
      .totalEntries === 0 ? (
    <p>There are currently no upcoming concerts for this artist</p>
  ) : (
    props.concert.resultsPage.results.event.slice(0, 3).map(eachEvent => {
      return (
        <ul key={eachEvent.id} style={eventsContainer}>
          <h5>{eachEvent.displayName}</h5>
          <li>Time: {eachEvent.start.time}</li>
          <li>{eachEvent.location.city}</li>
          <li>Event: {eachEvent.type}</li>
          <li>
            <a href={eachEvent.uri} target={eachEvent.uri}>
              Go to event
            </a>
          </li>
        </ul>
      );
    })
  );

  return (
    <div className="container-concert">
      <h2 onClick={toggleConcert} style={{ marginBottom: "25px" }}>
        Upcoming Concerts<span className="arrow-right1">⮟</span>
      </h2>
      <Collapse isOpen={collapsedConcert}> {concert}</Collapse>
    </div>
  );
};

const eventsContainer = {
  border: "1px solid #ededed",
  borderRadius: "2%",
  background: "#fff"
};

export default Concerts;
