import React from 'react';
import './LaunchResults.css';
import UserList from '../UserList/UserList';

function LaunchResults (props){
    
        return (
          <div className="LaunchResults">
            <h2> Users </h2>
            <UserList users={props.usersArray} />
          </div>
        );
    }

export default LaunchResults;