import React, { Component } from "react";

class DateTimeComp extends Component {
  constructor() {
    super();

    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timeId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <h5>
          {`${this.state.date.toDateString()} ${this.state.date.toLocaleTimeString()}`}{" "}
        </h5>
      </div>
    );
  }
}
export default DateTimeComp;
