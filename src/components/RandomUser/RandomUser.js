import React, { Component } from 'react';
// redux
import { connect } from 'react-redux';
// selectors
import selectors from '../../redux/selectors';
// styles
import styles from './RandomUser.module.css';

class RandomUser extends Component {
  state = { clearInt: 'timer', randomUser: ' ' };

  componentDidMount() {
    this.setState({ clearInt: setInterval(this.getRandomUser, 8000) });
  }

  componentWillUnmount() {
    const { clearInt } = this.state;
    clearInterval(clearInt);
  }

  getRandomUser = () => {
    const { users } = this.props;
    const usersLenght = users.length;

    const userRandomNumber = Math.floor(
      Math.random() * Math.floor(usersLenght),
    );

    this.setState({
      randomUser: users[userRandomNumber],
    });
  };

  render() {
    const { randomUser } = this.state;
    return <div className={styles.random}>{randomUser}</div>;
  }
}

const mapStateToProps = state => ({
  users: selectors.getUsersName(state),
});

export default connect(mapStateToProps, null)(RandomUser);
