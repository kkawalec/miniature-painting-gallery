import Grid from '@material-ui/core/Grid';
import React, { lazy, Suspense } from 'react';

import SimpleLoader from 'components/SimpleLoader';

const About = lazy(() => import(/* webpackChunkName: "aboutPage" */ 'views/About'));
const Author = lazy(() => import(/* webpackChunkName: "authorPage" */ 'views/Author'));
const Gallery = lazy(() => import(/* webpackChunkName: "galleryPage" */ 'views/Gallery'));
const Pricing = lazy(() => import(/* webpackChunkName: "pricingPage" */ 'views/Pricing'));
const Contact = lazy(() => import(/* webpackChunkName: "contactPage" */ 'views/Contact'));

export default class Content extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    return (
      <Suspense fallback={SimpleLoader}>
        <Grid item xs={12}>
          <About />
        </Grid>
        <Grid item xs={12}>
          <Gallery />
        </Grid>
        <Grid item xs={12}>
          <Author />
        </Grid>
        <Grid item xs={12}>
          <Pricing />
        </Grid>
        <Grid item xs={12}>
          <Contact />
        </Grid>
      </Suspense>
    );
  }
}
