import React from "react";
import { Input, Button } from "reactstrap";
import { goToAnchor } from 'react-scrollable-anchor';

const SearchBar = props => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className="page-title">PITCHFORK'D</h1>
      <form
        className="d-flex justify-content-center"
        onSubmit={event => props.handleSearchArtist(event)}
      >
        <Input
          className="search-input"
          type="text"
          name="searchArtist"
          size="default"
        />
        <Button
          outline
          className="search-button btn btn-dark"
          size="sm"
          type="submit"
          onClick={(goToAnchor('#lower-page-scroll', true))}
        >
         Search
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
