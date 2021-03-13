import React from "react";

class Unmounting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <p>
          The componentWillUnmount() method is called when the component is
          about to be removed from the DOM.
        </p>
        <a
          href="https://www.w3schools.com/react/showreact.asp?filename=demo2_react_lifecycle_componentwillunmount"
          target="_blank"
        >Example</a>
      </div>
    );
  }
}

export default Unmounting;
