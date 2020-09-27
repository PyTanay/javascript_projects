import { createStore, combineReducers, applyMiddleware } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./users/userReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  users: userReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
