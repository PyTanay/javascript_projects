import React, { Component } from "react";
import "./customStyles.css";

export class PopUp extends Component {
  render() {
    // const classname = this.props.popupVisible ? "customClass" : "hidePopup";
    return (
      <div className={this.props.popupVisible ? "customClass" : "hidePopup"}>
        <h2>This is the popUp</h2>
        <button className="btn btn-danger" onClick={this.props.closePopUp}>
          Close
        </button>
      </div>
    );
  }
}

export default PopUp;
