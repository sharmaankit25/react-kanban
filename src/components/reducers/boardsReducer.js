import { ADD_BOARD, FETCH_BOARDS, ADD_LIST } from "../actions/types";

const boards = (state = [], action) => {
  switch (action.type) {
    case FETCH_BOARDS:
      return [...state, ...action.payload];
    case ADD_BOARD:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default boards;
