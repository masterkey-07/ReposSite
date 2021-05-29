import React, { Fragment, useEffect } from "react";
import ReposItem from "./ReposItem";
import { connect } from "react-redux";
import { getRepos } from "../../actions/repos";
import PropTypes from "prop-types";

const ReposTable = ({ repos: { loading, repos, filter }, getRepos }) => {
  useEffect(() => {
    getRepos();
  }, [getRepos]);
  return (
    <div className="project-list">
      {!loading && repos ? (
        <table>
          <thead>
            <tr>
              <th className="left-head">Project Name</th>
              <th className="right-head ">Path</th>
            </tr>
          </thead>
          <tbody>
            {repos
              .filter(
                (repo) =>
                  repo.name.toLowerCase().includes(filter) ||
                  repo.path.toLowerCase().includes(filter)
              )
              .map((repo) => (
                <Fragment>
                  <ReposItem repo={repo} />
                </Fragment>
              ))}
          </tbody>
        </table>
      ) : (
        <Fragment>
          <h3>Carregando os Repositórios</h3>
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  repos: state.repos,
});

ReposTable.propTypes = {
  getRepos: PropTypes.func.isRequired,
  repos: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { getRepos })(ReposTable);
