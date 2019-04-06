import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { configureAnchors } from 'react-scrollable-anchor';

import history from 'store/history';
import Router from './router';
import store from './store';

import '../scss/index.scss';

const env = process.env.NODE_ENV || 'development';

// configure scrolling
configureAnchors({ offset: -100, scrollDuration: 200 });

const localAppRouter = (
  <AppContainer>
    <Provider store={store}>
      <Router history={history} />
    </Provider>
  </AppContainer>
);

const rootFolder = document.getElementById('app');

ReactDOM.render(localAppRouter, rootFolder);

/**
 * Hot reloading for development only
 */
declare const module;
if (env === 'development' && module.hot) {
  module.hot.accept('./store/mainReducer', () => {
    const nextRootReducer = require('./store/mainReducer').default;
    store.replaceReducer(nextRootReducer);
  });

  module.hot.accept('./layouts/App.tsx', () => {
    const NextApp = require('./layouts/App.tsx').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootFolder,
    );
  });

  module.hot.accept();
}
