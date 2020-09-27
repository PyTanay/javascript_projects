import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

function NewCakeContainer() {
  const [NumToBuy, setNumToBuy] = useState(1);
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Cake in Stock: {numOfCakes}</h2>
      <label htmlFor="numOfCakesBuy">Number of cake: </label>
      <input
        type="number"
        value={NumToBuy}
        onChange={(e) => setNumToBuy(e.target.value)}
      />
      <button onClick={() => dispatch(buyCake(NumToBuy))}>
        Buy {NumToBuy} Cake!
      </button>
    </div>
  );
}

export default NewCakeContainer;
