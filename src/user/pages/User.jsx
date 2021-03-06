import React, { Component } from 'react';
import UserList from '../components/UserList';

export default class User extends Component {
  state = {
    userList: [
      {
        id: '1',
        name: 'Minh',
        image:
          'https://www.denofgeek.com/wp-content/uploads/2016/11/avatar-sequel.jpg?resize=768%2C432',
        places: 3,
      },
    ],
  };

  render() {
    return <UserList userList={this.state.userList} />;
  }
}
