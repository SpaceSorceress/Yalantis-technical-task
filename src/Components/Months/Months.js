import React from "react";
import "./Months.css";
import UsersByMonth from "../UsersByMonth/UsersByMonth";
function Months(props){
  
  function handleMouse(event) {
    const eventTarget = event.target;
    props.onMouse(eventTarget);
  }

  
    return (
      <div>
        <h2> Months</h2>
        <div id="twelveMonths">
          <div className="singleMonth" id="1" onMouseOver={handleMouse}>
            January
          </div>
          <div className="singleMonth" id="2" onMouseOver={handleMouse}>
            February
          </div>
          <div className="singleMonth" id="3" onMouseOver={handleMouse}>
            March
          </div>
          <div className="singleMonth" id="4" onMouseOver={handleMouse}>
            April
          </div>
          <div className="singleMonth" id="5" onMouseOver={handleMouse}>
            May
          </div>
          <div className="singleMonth" id="6" onMouseOver={handleMouse}>
            June
          </div>
          <div className="singleMonth" id="7" onMouseOver={handleMouse}>
            July
          </div>
          <div className="singleMonth" id="8" onMouseOver={handleMouse}>
            Aughust
          </div>
          <div className="singleMonth" id="9" onMouseOver={handleMouse}>
            September
          </div>
          <div
            className="singleMonth"
            id="10"
            onMouseOver={handleMouse}
          >
            October
          </div>
          <div
            className="singleMonth"
            id="11"
            onMouseOver={handleMouse}
          >
            November
          </div>
          <div
            className="singleMonth"
            id="12"
            onMouseOver={handleMouse}
          >
            December
          </div>
        </div>
        <UsersByMonth listOfUsers={props.listOfUsers} />
      </div>
    );
  
}

export default Months;
