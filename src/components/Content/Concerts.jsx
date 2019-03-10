import React from "react";

const Concerts = props => {
  console.log(props);
  const concert = !props.concert ? null : props.concert.resultsPage
      .totalEntries === 0 ? (
    <p>There are currently no upcoming concerts for this artist</p>
  ) : (
    props.concert.resultsPage.results.event.slice(0, 8).map(eachEvent => {
      return (
        <div key={eachEvent.id}>
          <p>{eachEvent.displayName}</p>
          <p>{eachEvent.location.city}</p>
          <p>Event: {eachEvent.type}</p>
          <p>
            <a href={eachEvent.uri} target={eachEvent.uri}>
              Proceed to event
            </a>
          </p>
          <p>
            {eachEvent.start.date} | {eachEvent.start.time}
          </p>
        </div>
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

export default Concerts;
