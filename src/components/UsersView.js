import React from 'react';
// redux
import { connect } from 'react-redux';
// prop-types
import PropTypes from 'prop-types';
// selectors
import selectors from '../redux/selectors';
// styles
import styles from './UsersView.module.css';

const UsersView = ({ users = [] }) => (
  <div className={styles.section}>
    <h3 className={styles.title}>Data Table</h3>
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr className={styles.tr}>
          <th className={styles.th}>Id</th>
          <th className={styles.th}>Name</th>
          <th className={styles.th}>Surname</th>
          <th className={styles.th}>Description</th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ id, name, surname, desc }) => (
          <tr key={id} className={styles.tr}>
            <td className={styles.td}>{id}</td>
            <td className={styles.td}>{name}</td>
            <td className={styles.td}>{surname}</td>
            <td className={styles.td}>{desc}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const mapStateToProps = state => ({
  users: selectors.getFiveUsers(state),
});

export default connect(mapStateToProps, null)(UsersView);

UsersView.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};
