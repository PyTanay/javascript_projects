import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import UserContainer from "./Components/UserContainer";
// import CakeContainer from "./Components/CakeContainer";
// import HooksCakeContainer from "./Components/HooksCakeContainer";
// import IceCreamContainer from "./Components/IceCreamContainer";
// import NewCakeContainer from "./Components/NewCakeContainer";
// import ItemContainer from "./Components/ItemContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        {/* <ItemContainer cake />
        <ItemContainer />
        <NewCakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer /> */}
        {/* <CakeContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
