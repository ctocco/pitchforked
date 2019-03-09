import React from "react";

const Concerts = props => {
  const concert = !props.concert ? null : props.concert.resultsPage
      .totalEntries === 0 ? (
    <p>There are currently no upcoming concerts for this artist</p>
  ) : (
    <div>{props.concert.resultsPage.results.event[0].displayName}</div>
  );

  return (
    <div>
      <h2 style={{ marginBottom: "25px" }}>UPCOMING CONCERTS</h2>
      {concert}
    </div>
  );
};

export default Concerts;
