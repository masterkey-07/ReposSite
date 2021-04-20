import React, { useState } from "react";
import { connect } from "react-redux";
import { updateFilter } from "../../actions/repos";

const Search = ({ updateFilter }) => {
  return (
    <section id="search-field">
      <div className="search-field">
        <input
          type="text"
          placeholder="Search for a repository"
          onChange={(e) => updateFilter(e.target.value)}
        />
        <i className="fas fa-search"></i>
      </div>
    </section>
  );
};

export default connect(null, { updateFilter })(Search);
