import types from './actionTypes';

const fetchRequest = () => ({
  type: types.FETCH_REQUEST,
});

const fetchSuccess = users => ({
  type: types.FETCH_SUCCESS,
  payload: { users },
});

const fetchError = error => ({
  type: types.FETCH_ERROR,
  payload: { error },
});

const paginationPrev = () => ({
  type: types.TOGGLE_PREVIOUS_PAGE,
});

const paginationNext = maxPage => ({
  type: types.TOGGLE_NEXT_PAGE,
  payload: maxPage,
});

export default {
  fetchRequest,
  fetchSuccess,
  fetchError,
  paginationPrev,
  paginationNext,
};
