import React from "react";

const SearchBox = ({ textchange }) => {
  return <input type="search" placeholder="search" onChange={textchange} />;
};
export default SearchBox;
