import React from "react";
import { Link } from "react-router-dom";
export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Link to="/">
          <h1>Component Life Cycle</h1>
        </Link>
        <div className="links">
          <div style={{ marginLeft: "4%" }}>
            <Link to="/mounting">
              <h2>Mounting</h2>
            </Link>
          </div>
          <div style={{ marginLeft: "4%" }}>
            <Link to="/updating">
              <h2>Updating</h2>
            </Link>
          </div>
          <div style={{ marginLeft: "4%" }}>
            <Link to="/unmounting">
              <h2>Unmounting</h2>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
