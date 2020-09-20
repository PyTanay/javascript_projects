const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
//middleware to log the redux details
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

//action-----> which is a function that returns an object with the property type.
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action!",
  };
}
function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}

//reducer----> a function which takes state and a function as its arguments and returns new updated state
//(state,action)=>{newState} This is the simplest form of the reducer

const intitalCakeState = {
  numOfCakes: 10,
};
const initialIceCreamState = {
  numOfIceCreams: 20,
};
//initial value of the state is passed to the reducer function when the application starts.

const cakeReducer = (state = intitalCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

//combine reducers as createStore method only accepts one reducer as argument
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

//store which has following functionalities
//1. Holds application state
//2. Allows access to the state with getState()
//3. Allows state to be updated via dispatch(action)
//4. Registers listners via subscribe(listener)
//5. Handles unregestering of listeners via the functions returned by subscribe(listener)

//creating the store using the redux impoert
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial State:", store.getState());

const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
