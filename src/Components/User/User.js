import React from "react";
import "./User.css";

function User(props) {
    return (
      <div className="User">
        <div className="User-information">
          <h3>
            {props.firstName} {props.lastName}
          </h3>
          <p>{props.dob}</p>
        </div>
      </div>
    );
  }


export default User;
