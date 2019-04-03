import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';

export default class PageFooter extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <footer className="footer">
      <AppBar position="static">
        <Toolbar style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
          <Typography variant="caption">Developed by Karolina Modes AedLabs 2019</Typography>
        </Toolbar>
        </AppBar>
      </footer>
    );
  }
}
