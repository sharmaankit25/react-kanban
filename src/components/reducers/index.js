import { combineReducers } from "redux";
import boards from "./boardsReducer";
import lists from "./listsReducer";
import cards from "./cardsReducer";

const rootReducer = combineReducers({ boards, lists, cards });

export default rootReducer;
