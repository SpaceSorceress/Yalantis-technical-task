import React from "react";
import "./UsersByMonth.css";
import User from "../User/User";

function UserByMonth(props){
    return (
      <div className="UserList">
        <h2>Users by month</h2>
        <h3 id="selectedMonth"></h3>
        <ol id="userList">
         {props.listOfUsers.map(user=>{
           return (
             <li key={user}>
               <User firstName={user} key={user} />
             </li>
           );
         })} 
        </ol>
      </div>
    );
  }

export default UserByMonth;
