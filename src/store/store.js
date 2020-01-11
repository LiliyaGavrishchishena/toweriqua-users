import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import usersReducer from '../redux/usersReducer';
import currentPage from '../redux/currentPageReducer';
import limitReducer from '../redux/limitReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  currentPage,
  limit: limitReducer,
});
const logger = createLogger();

const middlewares = applyMiddleware(logger, thunk);

const enhancer = composeWithDevTools(middlewares);

const store = createStore(rootReducer, enhancer);

export default store;
