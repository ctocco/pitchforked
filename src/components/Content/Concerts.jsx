import React from "react";

const Concerts = props => {
  console.log(props);
  const concert = !props.concert ? null : props.concert.resultsPage
      .totalEntries === 0 ? (
    <p>There are currently no upcoming concerts for this artist</p>
  ) : (
    props.concert.resultsPage.results.event.slice(0, 3).map(eachEvent => {
      return (
        <ul key={eachEvent.id} style={eventsContainer}>
          <h5>{eachEvent.displayName}</h5>
          <li>{eachEvent.start.time}</li>
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
    <div>
      <h2 style={{ marginBottom: "25px" }}>UPCOMING CONCERTS</h2>
      {concert}
    </div>
  );
};

const eventsContainer = {
  border: "1px solid #ededed",
  borderRadius: "2%",
  background: "#fff"
};

export default Concerts;
