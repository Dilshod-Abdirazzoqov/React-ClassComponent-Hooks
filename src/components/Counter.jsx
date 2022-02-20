import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increament = this.increament.bind(this);
    this.decreament = this.decreament.bind(this);
  }
  increament() {
    this.setState({ count: this.state.count + 1 });
  }
  decreament() {
    this.setState({ count: this.state.count - 1 });
  }
  render() {
    return (
      <>
        <h4>Count: {this.state.count}</h4>
        <button className="btn btn-success mx-1" onClick={this.increament}>
          INCR
        </button>
        <button className="btn btn-danger mx-1" onClick={this.decreament}>
          DECR
        </button>
      </>
    );
  }
}

export default Counter;
