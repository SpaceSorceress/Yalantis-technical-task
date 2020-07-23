import React from 'react';
import './LaunchResults.css';
import UserList from '../UserList/UserList';

class LaunchResults extends React.Component {
    render() {
        return (
          <div className="LaunchResults">
            <h2> Users </h2>
            <UserList users={this.props.usersArray} />
          </div>
        );
    }
}
export default LaunchResults;