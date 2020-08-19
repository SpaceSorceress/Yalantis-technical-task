import React from "react";
import "./LaunchBar.css";

function LaunchBar (props){
    return (
      <div className="LaunchBar">
        <button className="LaunchButton" onClick={props.onClick}>
          LOAD USERS
        </button>
      </div>
    );
}

export default LaunchBar;
