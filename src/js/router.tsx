import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Route } from 'react-router-dom';

import App from 'layouts/App';

interface IRouterProps {
  history: any;
}

function Router(props: IRouterProps) {
  const { history } = props;
  return (
    <ConnectedRouter history={history}>
      <Route path="/" component={App} />
    </ConnectedRouter>
  );
}

export default Router;
