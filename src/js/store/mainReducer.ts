import { connectRouter } from 'connected-react-router';
import { i18nReducer } from 'react-redux-i18n';
// import { reducer as notifications } from 'react-notification-system-redux';
import { combineReducers } from 'redux';

import history from './history';

const appReducer = combineReducers({
  router: connectRouter(history),
  i18n: i18nReducer,
});

export default appReducer;
