import React from 'react';
// redux
import { connect } from 'react-redux';
// prop-types
import PropTypes from 'prop-types';
// actions
import actions from '../redux/actions';
// selectors
import selectors from '../redux/selectors';
// svg components
import { ReactComponent as Next } from './assets/next.svg';
import { ReactComponent as Prev } from './assets/back.svg';
// styles
import styles from './Pagination.module.css';

const Pagination = ({ prev, currentPage, maxPage, next }) => {
  const prevBtn = currentPage === 1;
  const nextBtn = currentPage === maxPage;

  return (
    <div className={styles.pagination}>
      <button
        className={styles.btnprev}
        type="button"
        onClick={prev}
        disabled={prevBtn}
      >
        <Prev className={!prevBtn ? styles.prevActive : styles.prevNotActive} />
      </button>

      <span className={styles.pageNumber}>{currentPage}</span>

      <button
        className={styles.btnnext}
        type="button"
        onClick={() => next(maxPage)}
        disabled={nextBtn}
      >
        <Next className={!nextBtn ? styles.nextActive : styles.nextNotActive} />
      </button>
      <p
        className={styles.text}
      >{`Showing ${currentPage} of ${maxPage} pages`}</p>
    </div>
  );
};
const mapStateToProps = state => ({
  currentPage: selectors.getCurrentPage(state),
  maxPage: selectors.getMaxPage(state),
});

const mapDispatchToProp = {
  prev: actions.paginationPrev,
  next: actions.paginationNext,
};

export default connect(mapStateToProps, mapDispatchToProp)(Pagination);

Pagination.propTypes = {
  prev: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  maxPage: PropTypes.number.isRequired,
  next: PropTypes.func.isRequired,
};
