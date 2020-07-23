import React from "react";
import "./Months.css";

class Months extends React.Component {
  render() {
    return (
      <div>
        <h2> Months</h2>
        <div className="twelveMonths">
          <div className="singleMonth">January</div>
          <div className="singleMonth">February</div>
          <div className="singleMonth">March</div>
          <div className="singleMonth">April</div>
          <div className="singleMonth">May</div>
          <div className="singleMonth">June</div>
          <div className="singleMonth">July</div>
          <div className="singleMonth">Aughust</div>
          <div className="singleMonth">September</div>
          <div className="singleMonth">October</div>
          <div className="singleMonth">November</div>
          <div className="singleMonth">December</div>
        </div>
      </div>
    );
  }
}

export default Months;
