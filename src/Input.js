import React from "react";

// Handling input in React as a Component
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Start typing here..." };
  }

  change(value) {
    this.setState({
      value: value
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          name="input"
          onChange={(e) => this.change(e.target.value)}
        />
      </div>
    );
  }
}

export default Input;
