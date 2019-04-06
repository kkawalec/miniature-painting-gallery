import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';

const styles = {
  root: {
    flexGrow: 1,
  },
};

interface IPageHeaderProps {
  classes: {
    root: string,
  };
}

const links = [
  { to: '#author', label: 'Author', icon: null },
  { to: '#gallery', label: 'Gallery', icon: null },
  { to: '#pricing', label: 'Pricing', icon: null },
  { to: '#contact', label: 'Contact', icon: null },
];

class PageHeader extends React.Component<IPageHeaderProps, {}> {

  public renderButtonLink(): JSX.Element[] {
    return links.map(link => (
      <a href={link.to} key={link.to}>
        <Button>
          {link.label}
        </Button>
      </a>
      ));
  }

  public render(): JSX.Element {
    const { classes } = this.props;
    return (
      <AppBar position="sticky" color="primary" style={{ marginBottom: 16 }} >
        <Toolbar className={classes.root}>
          {this.renderButtonLink()}
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(PageHeader);
