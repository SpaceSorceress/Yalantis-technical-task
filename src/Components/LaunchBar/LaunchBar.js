import React from "react";
import "./LaunchBar.css";

class LaunchBar extends React.Component {

  render() {
    return (
      <div className="LaunchBar">
        <button className="LaunchButton" onClick={this.handleSearch}>
          LOAD USERS
        </button>
      </div>
    );
  }
}

export default LaunchBar;
