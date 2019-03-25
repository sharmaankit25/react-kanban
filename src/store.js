import { createStore, applyMiddleware } from "redux";
import rootReducer from "./components/reducers/index";
import thunk from "redux-thunk";
// import { addCharacterById } from "./actions";
const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => console.log("Store", store.getState()));
// store.dispatch(addCharacterById(2));
export default store;
