import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
  items: [],

  item: {}
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    default:
      return state;
  }
};
