import React, { Component } from "react";
import PopUp from "./PopUp";

export class PopUpOpener extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popupvisible: false,
    };
  }
  popUpHandler = () => {
    this.setState({
      popupvisible: !this.state.popupvisible,
    });
    console.log(this.state);
  };
  closePopUp = () => {
    this.setState({
      popupvisible: false,
    });
  };
  render() {
    return (
      <div>
        <h1 className="display-2">Please Open Your Pop Up from here...</h1>
        <button className="btn btn-lg btn-primary" onClick={this.popUpHandler}>
          Open PopUp
        </button>
        <PopUp
          popupVisible={this.state.popupvisible}
          closePopUp={this.closePopUp}
        />
      </div>
    );
  }
}

export default PopUpOpener;
