import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';

import { PaletteType } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';

import Loader from 'components/SimpleLoader';
import Routes from 'layouts/Routes';
import IState from 'store/interfaces/IState';

const PageHeader = lazy(() => import(/* webpackChunkName: "pageHeader" */ 'layouts/PageHeader'));
const PageFooter = lazy(() => import(/* webpackChunkName: "pageFooter" */ 'layouts/PageFooter'));

const muiTheme = {
  palette: {
    type: 'light' as PaletteType,
  },
  typography: {
    useNextVariants: true,
  },
};

const styles = {
  root: {
    flexGrow: 1,
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
      <MuiThemeProvider theme={createMuiTheme(muiTheme)}>
        <Suspense fallback={Loader}>
          <React.Fragment>
            <div className="main-content">
              <PageHeader />
                <div style={{ padding: 30 }}>
                <Grid container className={classes.root} spacing={16}>
                  <Routes />
                </Grid>
                </div>
              </div>
            <PageFooter />
          </React.Fragment>
        </Suspense>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state: IState): IAppProps => ({

});

const ConnectedApp = connect(mapStateToProps)(App);
export default withStyles(styles)(ConnectedApp);
