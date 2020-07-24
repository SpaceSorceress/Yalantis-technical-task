import React from "react";
import "./Months.css";
import UsersByMonth from "../UsersByMonth/UsersByMonth";
class Months extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick=this.handleClick.bind(this);
  }

  handleClick(event) {
    const eventTarget = event.target;
    this.props.onClick(eventTarget);
  }

  render() {
    return (
      <div>
        <h2> Months</h2>
        <div  id="twelveMonths">
          <div className="singleMonth" id="1" onMouseOver={this.handleClick}>
            January
          </div>
          <div className="singleMonth" id="2" onMouseOver={this.handleClick}>
            February
          </div>
          <div className="singleMonth" id="3" onMouseOver={this.handleClick}>
            March
          </div>
          <div className="singleMonth" id="4" onMouseOver={this.handleClick}>
            April
          </div>
          <div className="singleMonth" id="5" onMouseOver={this.handleClick}>
            May
          </div>
          <div className="singleMonth" id="6" onMouseOver={this.handleClick}>
            June
          </div>
          <div className="singleMonth" id="7" onMouseOver={this.handleClick}>
            July
          </div>
          <div className="singleMonth" id="8" onMouseOver={this.handleClick}>
            Aughust
          </div>
          <div className="singleMonth" id="9" onMouseOver={this.handleClick}>
            September
          </div>
          <div className="singleMonth" id="10" onMouseOver={this.handleClick}>
            October
          </div>
          <div className="singleMonth" id="11" onMouseOver={this.handleClick}>
            November
          </div>
          <div className="singleMonth" id="12" onMouseOver={this.handleClick}>
            December
          </div>
        </div>
        <UsersByMonth listOfUsers={this.props.listOfUsers} />
      </div>
    );
  }
}

export default Months;
