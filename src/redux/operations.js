import axios from 'axios';
import actions from './actions';

axios.defaults.baseURL = 'http://localhost:3001';

const fetchItems = () => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    const response = await axios.get('/users');
    dispatch(actions.fetchSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

export default { fetchItems };
