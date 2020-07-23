import React from "react";
import "./Months.css";
import UsersByMonth from "../UsersByMonth/UsersByMonth";
class Months extends React.Component {



  render() {
    return (
      <div>
        <h2> Months</h2>
        <div className="twelveMonths">
          <div className="singleMonth" id="1" onClick={this.props.onClick}>
            January
          </div>
          <div className="singleMonth" id="2" onClick={this.props.onClick}>
            February
          </div>
          <div className="singleMonth" id="3" onClick={this.props.onClick}>
            March
          </div>
          <div className="singleMonth" id="4" onClick={this.props.onClick}>
            April
          </div>
          <div className="singleMonth" id="5" onClick={this.props.onClick}>
            May
          </div>
          <div className="singleMonth" id="6" onClick={this.props.onClick}>
            June
          </div>
          <div className="singleMonth" id="7" onClick={this.props.onClick}>
            July
          </div>
          <div className="singleMonth" id="8" onClick={this.props.onClick}>
            Aughust
          </div>
          <div className="singleMonth" id="9" onClick={this.props.onClick}>
            September
          </div>
          <div className="singleMonth" id="10" onClick={this.props.onClick}>
            October
          </div>
          <div className="singleMonth" id="11" onClick={this.props.onClick}>
            November
          </div>
          <div className="singleMonth" id="12" onClick={this.props.onClick}>
            December
          </div>
        </div>
        <UsersByMonth />
      </div>
    );
  }
}

export default Months;
