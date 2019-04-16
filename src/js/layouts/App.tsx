import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';

import Loader from 'components/SimpleLoader';
import CookieAlert from 'layouts/components/CookieAlert';
import Content from 'layouts/Content';
import IState from 'store/interfaces/IState';
import theme from 'utils/mui/theme.json';

const PageHeader = lazy(() => import(/* webpackChunkName: "pageHeader" */ 'layouts/PageHeader'));
const PageFooter = lazy(() => import(/* webpackChunkName: "pageFooter" */ 'layouts/PageFooter'));

const styles = {
  root: {
    flexGrow: 1,
    maxWidth: 1500,
    margin: 'auto',
  },
};

interface IAppProps {
  children?: any;
  classes?: any;
}

class App extends React.Component<IAppProps, {}> {
  public render(): JSX.Element {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={createMuiTheme(theme)}>
          <React.Fragment>
            <div className="main-content">
            <Suspense fallback={Loader}>
              <PageHeader />
              </Suspense>
                <div style={{ padding: 30 }}>
                <Grid container className={classes.root} spacing={16}>
                  <Content />
                </Grid>
                </div>
              </div>
              <Suspense fallback={Loader}>
                <PageFooter />
              </Suspense>
              <CookieAlert/>
          </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state: IState): IAppProps => ({

});

const ConnectedApp = connect(mapStateToProps)(App);
export default withStyles(styles)(ConnectedApp);
