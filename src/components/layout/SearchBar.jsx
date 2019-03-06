import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { Input, Button } from 'reactstrap';

const SearchBar = props => {
  return (
    <div>
      <h1 className="page-title">PITCHFORK'D</h1>
      <form className="d-flex justify-content-center" onSubmit={event => props.handleSearchArtist(event)}>
        <Input className="search-input" type="text" name="searchArtist"  size="default" />
        <Button
          outline
          className="search-button btn btn-dark"
          size="sm"
          type="submit"
          onClick={() => scroll.scrollTo(987) }
        >Search</Button>
      </form>
    </div>
  );
};

export default SearchBar;
