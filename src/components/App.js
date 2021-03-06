import React, { Component } from 'react';
import { connect } from 'react-redux';
// operations
import operations from '../redux/operations';
// components
import UsersView from './UsersView/UsersView';
import Pagination from './Pagination/Pagination';
import RandomUser from './RandomUser/RandomUser';

class App extends Component {
  state = {};

  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }

  render() {
    return (
      <div>
        <Pagination />
        <RandomUser />
        <UsersView />
      </div>
    );
  }
}

const mapDispatchToProp = {
  getUsers: operations.fetchItems,
};

export default connect(null, mapDispatchToProp)(App);
