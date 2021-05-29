import React from "react";
import { connect } from "react-redux";
import {
  /* deleteRepos,*/ openRepos,
  openReposFiles,
} from "../../actions/repos";

const ReposItem = ({
  repo: { name, description, path },
  openRepos,
  openReposFiles,
  // deleteRepos,
}) => {
  /*  const deleteRepository = (name, path) => {
    if (window.confirm(`Are you sure to delete the Repository ${name}?`))
      deleteRepos(path);
  };*/

  return (
    <tr>
      <td className="repos-name" onClick={(e) => openRepos(path)}>
        {name}
      </td>
      <td className="repos-description">{description}</td>
      <td className="repos-path" onClick={(e) => openReposFiles(path)}>
        {path}
      </td>
      {/*  <td className="delete" onClick={(e) => deleteRepository(name, path)}>
        <i className="fas fa-trash"></i>
  </td>*/}
    </tr>
  );
};

export default connect(null, { openRepos, openReposFiles /*deleteRepos*/ })(
  ReposItem
);
