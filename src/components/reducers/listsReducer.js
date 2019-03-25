import { ADD_LIST, FETCH_LISTS } from "../actions/types";

const lists = (state = [], action) => {
  switch (action.type) {
    case FETCH_LISTS:
      return state;
    case ADD_LIST:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default lists;
