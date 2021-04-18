import React from "react";

const Search = () => {
  return (
    <section id="search-field">
      <div className="search-field">
        <input type="text" placeholder="Search for a repository" />
        <i className="fas fa-search"></i>
      </div>
    </section>
  );
};

export default Search;
