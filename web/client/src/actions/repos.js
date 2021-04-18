import { LOAD_REPOS, DELETE_REPOS, OPEN_REPOS, ERROR } from "../actions/type";

import axios from "axios";

export const getRepos = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/repos/");
    dispatch({ type: LOAD_REPOS, data: res });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ERROR,
      data: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const openRepos = (path) => async (dispatch) => {
  try {
    const res = await axios.post(
      "/api/repos/open/",
      { path: path },
      { "Content-Type": "application/json" }
    );
    alert(res.data.msg);
  } catch (error) {
    console.log(error);
    dispatch({
      type: ERROR,
      data: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const deleteRepos = (path) => async (dispatch) => {
  try {
    const res = await axios.post(
      "/api/repos/delete/",
      { path: path },
      { "Content-Type": "application/json" }
    );
    alert(res.data.msg);
    dispatch({ type: DELETE_REPOS, data: path });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ERROR,
      data: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
