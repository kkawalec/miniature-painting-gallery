import React, { lazy, Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import SimpleLoader from 'components/SimpleLoader';

const NotFoundPage = lazy(() => import(/* webpackChunkName: "notFoundPage" */ 'views/NotFound'));

const Home = lazy(() => import(/* webpackChunkName: "homePage" */ 'views/Home'));
const Gallery = lazy(() => import(/* webpackChunkName: "galleryPage" */ 'views/Gallery'));
const Pricing = lazy(() => import(/* webpackChunkName: "pricingPage" */ 'views/Pricing'));
const Contact = lazy(() => import(/* webpackChunkName: "contactPage" */ 'views/Contact'));

class Routes extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    return (
      <Suspense fallback={SimpleLoader}>
        <Switch>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/gallery" component={Gallery} />

          <Route exact path="/" component={Home} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Suspense>
    );
  }
}

export default withRouter(Routes);
