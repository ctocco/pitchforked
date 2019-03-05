import React from "react";
import { animateScroll as scroll } from "react-scroll";

const SearchBar = props => {
  return (
    <div>
      <form onSubmit={event => props.handleSearchArtist(event)}>
        <input type="text" name="searchArtist" />
        <input
          type="submit"
          value="search"
          onClick={() => scroll.scrollTo(987)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
