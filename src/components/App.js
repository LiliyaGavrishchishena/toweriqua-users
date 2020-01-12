import React, { Component } from 'react';
import { connect } from 'react-redux';

import operations from '../redux/operations';
import UsersView from './UsersView';
import Pagination from './Pagination';

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
        <UsersView />
      </div>
    );
  }
}

const mapDispatchToProp = {
  getUsers: operations.fetchItems,
};

export default connect(null, mapDispatchToProp)(App);
