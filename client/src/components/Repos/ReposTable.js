import React, { Fragment, useEffect } from "react";
import ReposItem from "./ReposItem";
import { connect } from "react-redux";
import { getRepos } from "../../actions/repos";
import PropTypes from "prop-types";
import { LeftHead, RightHead, TableField } from "../../styles";

const ReposTable = ({ repos: { loading, repos, filter }, getRepos }) => {
  useEffect(() => {
    getRepos();
  }, [getRepos]);
  return (
    <TableField>
      {!loading && repos ? (
        <table>
          <thead>
            <tr>
              <LeftHead>Project Name</LeftHead>
              <RightHead>Path</RightHead>
            </tr>
          </thead>
          <tbody>
            {repos
              .filter(
                (repo) =>
                  repo.name.toLowerCase().includes(filter.toLowerCase()) ||
                  repo.path.toLowerCase().includes(filter.toLowerCase())
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
          <h3>Loading Repositories</h3>
        </Fragment>
      )}
    </TableField>
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
