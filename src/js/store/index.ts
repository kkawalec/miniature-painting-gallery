
import { routerMiddleware } from 'connected-react-router';
import { loadTranslations, syncTranslationWithStore } from 'react-redux-i18n';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { setLangFromLocalStorage } from 'store/i18n/operations';
import translations from 'utils/i18n';

import AxiosApiConnector from 'utils/api-connector/AxiosApiConnector';
import history from './history';
import mainReducer from './mainReducer';

declare const window: any;
const env = process.env.NODE_ENV || 'development';

const middlewaresToCompose = applyMiddleware(
  thunk.withExtraArgument({ apiConnector: new AxiosApiConnector() }),
  routerMiddleware(history),
);

const enhancer = env === 'development' ? compose(
   middlewaresToCompose,
   window.devToolsExtension ? window.devToolsExtension() : (f: any) => f,
) : compose(middlewaresToCompose);

const store = createStore(mainReducer, enhancer);

/*
 * Translations
 */
syncTranslationWithStore(store);
store.dispatch(loadTranslations(translations));
store.dispatch(setLangFromLocalStorage());

export default store;
