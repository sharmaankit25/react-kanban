import {
  ADD_BOARD,
  FETCH_LISTS,
  ADD_LIST,
  FETCH_BOARD,
  ADD_CARD
} from "./types";

// Create a new board
export const addBoard = board => {
  return {
    type: ADD_BOARD,
    payload: { id: guid(), ...board }
  };
};

// Fetch Board
export const fetchBoard = board => {
  return {
    type: FETCH_BOARD,
    payload: board
  };
};

// Fetch board Lists
export const fetchBoardLists = board => {
  return {
    type: FETCH_LISTS,
    payload: board
  };
};

export const addList = (list, board_id) => {
  return {
    type: ADD_LIST,
    payload: { id: guid(), title: list, board_id }
  };
};

export const addCard = (card, list_id) => {
  return {
    type: ADD_CARD,
    payload: { id: guid(), title: card, list_id }
  };
};

// HELPERS
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
}
