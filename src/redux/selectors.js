import { createSelector } from 'reselect';

const getAllUsers = state => state.users;
const getCurrentPage = state => state.currentPage;
const getLimit = state => state.limit;

const getFiveUsers = createSelector(
  [getAllUsers, getCurrentPage, getLimit],
  (users, page, limit) =>
    page === 1
      ? users.slice(0, limit)
      : users.slice(page * limit - limit, page * limit),
);

const getUsersName = createSelector([getAllUsers], users =>
  users.map(({ name, surname }) => `${name} ${surname}`),
);

const getMaxPage = createSelector([getAllUsers, getLimit], (users, limit) =>
  Math.ceil(users.length / limit),
);

export default {
  getAllUsers,
  getCurrentPage,
  getFiveUsers,
  getUsersName,
  getMaxPage,
  getLimit,
};
