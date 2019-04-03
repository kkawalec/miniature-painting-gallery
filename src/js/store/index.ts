
import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import AxiosApiConnector from 'utils/api-connector/AxiosApiConnector';
import history from './history';
import mainReducer from './mainReducer';

declare const window;
const env = process.env.NODE_ENV || 'development';

const middlewaresToCompose = applyMiddleware(
  thunk.withExtraArgument({ apiConnector: new AxiosApiConnector() }),
  routerMiddleware(history),
);

const enhancer = env === 'development' ? compose(
   middlewaresToCompose,
   window.devToolsExtension ? window.devToolsExtension() : f => f,
) : compose(middlewaresToCompose);

const store = createStore(mainReducer, enhancer);

export default store;
