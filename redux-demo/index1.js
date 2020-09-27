const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_MUFFIN = "BUY_MUFFIN";

const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};
const buyMuffin = () => {
  return {
    type: BUY_MUFFIN,
  };
};

const cakeInitialState = {
  numOfCake: 10,
};
const muffinInitialState = {
  numOfMuffin: 20,
};
const cakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        numOfCake: state.numOfCake - 1,
      };
    default:
      return state;
  }
};
const muffinReducer = (state = muffinInitialState, action) => {
  switch (action.type) {
    case BUY_MUFFIN:
      return {
        ...state,
        numOfMuffin: state.numOfMuffin - 1,
      };
    default:
      return state;
  }
};
const rootReducder = combineReducers({
  cake: cakeReducer,
  muffin: muffinReducer,
});
const store = createStore(rootReducder, applyMiddleware(logger));

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyMuffin());
store.dispatch(buyMuffin());
unsubscribe();
