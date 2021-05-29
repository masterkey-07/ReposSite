import { LOAD_REPOS, ERROR, UPDATE_FILTER } from "../actions/type";

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

    case UPDATE_FILTER:
      return { ...state, filter: data };

    case ERROR:
      return { ...state, error: data };

    default:
      return state;
  }
}
