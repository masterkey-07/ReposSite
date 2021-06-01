import React from "react";
import { connect } from "react-redux";
import { updateFilter } from "../../actions/repos";
import { SearchField } from "../../styles";

const Search = ({ updateFilter }) => {
  return (
    <SearchField>
      <input
        type="text"
        placeholder="Search for a repository"
        onChange={(e) => updateFilter(e.target.value)}
      />
      <i className="fas fa-search"></i>
    </SearchField>
  );
};

export default connect(null, { updateFilter })(Search);
