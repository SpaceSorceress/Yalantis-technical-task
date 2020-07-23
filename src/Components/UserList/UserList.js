import React from 'react';
import "./UserList.css";
import User from "../User/User";


 class UserList extends React.Component {
    
    render() {
        return (
          <div className="UserList">
            {this.props.users.map((user)=>{
                return (<User 
                firstName={user.firstName}
                lastName={user.lastName}
                id={`Id: ${user.id}`}
                dob={`Date of birth: ${user.dob}`}
                key={user.id}
                />
            );
            })}
            <User />
          </div>
        );
    }
}
export default UserList;