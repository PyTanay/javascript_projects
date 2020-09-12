import React, { Component } from "react";

export class NumberComponent extends Component {
  render() {
    return (
      <div>
        {/* <h1>{this.props.test}</h1> */}
        <button
          name="Alksssssssss"
          className="btn btn-lg btn-success"
          onClick={this.props.resetter}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default NumberComponent;
