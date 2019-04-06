import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import ChangeLangMenu from 'layouts/components/ChangeLangMenu';
import React from 'react';
import { Translate } from 'react-redux-i18n';

const styles = {
  root: {
    flexGrow: 1,
    justifyContent: 'center',
  },
};

interface IPageHeaderProps {
  classes: {
    root: string,
  };
}

const links = [
  { to: '#author', label: <Translate value="author.label" />, icon: null },
  { to: '#gallery', label: <Translate value="gallery.label" />, icon: null },
  { to: '#pricing', label: <Translate value="pricing.label" />, icon: null },
  { to: '#contact', label: <Translate value="contact.label" />, icon: null },
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
          <ChangeLangMenu />
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(PageHeader);
