import { ADD_BOARD, FETCH_BOARD, ADD_LIST } from "../actions/types";

const boards = (state = [], action) => {
  switch (action.type) {
    case ADD_BOARD:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default boards;
