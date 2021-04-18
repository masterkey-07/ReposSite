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
      <table>
        <thead>
          <tr>
            <th className="left-head">Project Name</th>
            <th>Description</th>
            <th className="">Path</th>
            <th className="right-head delete-head"></th>
          </tr>
        </thead>

        {!loading && repos && (
          <tbody>
            {repos.map((repo) => (
              <Fragment>
                <ReposItem repo={repo} />
              </Fragment>
            ))}
          </tbody>
        )}
      </table>
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
