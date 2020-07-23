import React from "react";
import "./User.css";

class User extends React.Component {
  
  render() {
    return (
      <div className="User">
        <div className="User-information">
          <h3>
            {this.props.firstName} {this.props.lastName}
          </h3>
          <p>{this.props.dob}</p>
          
        </div>
      </div>
    );
  }
}

export default User;
