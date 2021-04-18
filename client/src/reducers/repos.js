import {
  LOAD_REPOS,
  DELETE_REPOS,
  ERROR,
  SEND_MESSAGE,
  CLOSE_MESSAGE,
} from "../actions/type";

const initialState = {
  loading: true,
  repos: [],
  filter: " ",
  error: {},
  msg: " ",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case LOAD_REPOS:
      return { ...state, repos: data.data, loading: false };

    case DELETE_REPOS:
      return {
        ...state,
        repos: state.repos.filter((repo) => repo.path !== data),
      };

    case ERROR:
      return { ...state, error: data };

    default:
      return state;
  }
}
