import React from 'react';
import UserItem from './UserItem';

import './UserList.css';

export default function UserList(props) {
  const { userList } = props;

  if (userList.length === 0) {
    return <h1>No user Found!</h1>;
  }

  return (
    <React.Fragment>
      {userList.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </React.Fragment>
  );
}
