import { connectRouter } from 'connected-react-router';
// import { reducer as notifications } from 'react-notification-system-redux';
import { combineReducers } from 'redux';

import history from './history';

const appReducer = combineReducers({
  router: connectRouter(history),
});

export default appReducer;
