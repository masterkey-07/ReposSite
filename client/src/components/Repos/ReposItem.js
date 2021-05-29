import React from "react";
import { connect } from "react-redux";
import { openRepos, openReposFiles } from "../../actions/repos";

const ReposItem = ({
  repo: { name, description, path },
  openRepos,
  openReposFiles,
}) => {
  return (
    <tr>
      <td className="repos-name" onClick={(e) => openRepos(path)}>
        {name}
      </td>
      <td className="repos-path" onClick={(e) => openReposFiles(path)}>
        {path.replace(
          path.substring(path.indexOf("\\") + 1, path.indexOf("\\repos")),
          "..."
        )}
      </td>
    </tr>
  );
};

export default connect(null, { openRepos, openReposFiles })(ReposItem);
