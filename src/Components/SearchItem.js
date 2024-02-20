import React from "react";

const SearchItem = ({ search, setSearch }) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label className="search" htmlFor="search">
        Search
      </label>
      <input
        type="text"
        role="searchBox"
        id="search"
        placeholder="Search Items"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
    </form>
  );
};

export default SearchItem;
