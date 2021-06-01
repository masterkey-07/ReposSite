import React from "react";
import { connect } from "react-redux";
import { openRepos, openReposFiles } from "../../actions/repos";
import { ReposName, ReposPath } from "../../styles";

const ReposItem = ({
  repo: { name, description, path },
  openRepos,
  openReposFiles,
}) => {
  return (
    <tr>
      <ReposName onClick={(e) => openRepos(path)}>{name}</ReposName>
      <ReposPath onClick={(e) => openReposFiles(path)}>
        {path.replace(
          path.substring(path.indexOf("\\") + 1, path.indexOf("\\repos")),
          "..."
        )}
      </ReposPath>
    </tr>
  );
};

export default connect(null, { openRepos, openReposFiles })(ReposItem);
