import AppBar from '@material-ui/core/AppBar';
import React from 'react';
import { connect } from 'react-redux';

import Navbar from 'components/pageHeader/Navbar';
import IState from 'store/interfaces/IState';

// interface IPageHeaderProps {
//   // isAuthenticated: boolean;
//   // user: IUser;
// }

class PageHeader extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <AppBar position="static" color="default" style={{ marginBottom: 16 }} >
        <Navbar />
      </AppBar>
    );
  }
}

const mapStateToProps = (state: IState) => ({

});
export default connect(mapStateToProps, {})(PageHeader);
