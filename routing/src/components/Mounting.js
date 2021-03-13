import React from "react";
import { Link } from "react-router-dom";

class Mounting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <p>
          The componentDidMount() method is called after the component is
          rendered.
        </p>
        <a href="https://www.w3schools.com/react/showreact.asp?filename=demo2_react_lifecycle_componentdidmount" target="_blank">
          <h3>Example</h3>
        </a>
      </div>
    );
  }
}

export default Mounting;
