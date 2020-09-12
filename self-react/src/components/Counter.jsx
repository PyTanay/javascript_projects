import React, { Component } from "react";
import NumberComponent from "./NumberComponent";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
      sign: 1,
    };
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + this.state.sign,
    });
    if (this.state.counter === 5 || this.state.counter === 0) {
      this.setState({
        sign: -this.state.sign,
        counter: this.state.counter - this.state.sign,
      });
    }
  };

  resetter = () => {
    this.setState({
      counter: 1,
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <NumberComponent resetter={this.resetter} />
        <button className="btn btn-primary m-4" onClick={this.increment}>
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
