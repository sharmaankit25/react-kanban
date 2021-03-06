import { ADD_CARD, FETCH_CARDS } from "../actions/types";

const cards = (state = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default cards;
