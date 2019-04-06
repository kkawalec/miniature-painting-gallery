import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import React, { Fragment } from 'react';
import { Translate } from 'react-redux-i18n';

import ChangeLangMenu from 'layouts/components/ChangeLangMenu';

// TODO: Add proper image
const headerImg = require('../../images/header-image.jpg');

const styles = {
  toolBar: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  appBar: {
    marginBottom: 16,
  },
  headerImg: {
    height: 500,
    width: 'auto',
    position: 'absolute' as any,
    top: 0,
  },
};

const transparentStyle = {
  boxShadow: '0 0 0 0 rgb(0, 0, 0, 0)',
  backgroundColor: 'rgb(0, 0, 0, 0)',
};

interface IPageHeaderProps {
  classes: {
    appBar: string,
    toolBar: string,
    headerImg: string,
  };
}

interface IPageHeaderState {
  isScrolled: boolean;
}

const links = [
  { to: '#author', label: <Translate value="author.label" />, icon: null },
  { to: '#gallery', label: <Translate value="gallery.label" />, icon: null },
  { to: '#pricing', label: <Translate value="pricing.label" />, icon: null },
  { to: '#contact', label: <Translate value="contact.label" />, icon: null },
];

class PageHeader extends React.Component<IPageHeaderProps, IPageHeaderState> {
  public state = {
    isScrolled: false,
  };

  public componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  public componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  public handleScroll = () => {
    const scrollTop = window.pageYOffset ||
      ((document.documentElement || document.body.parentNode || document.body) as any).scrollTop;
    const isScrolled = scrollTop !== 0;

    if (this.state.isScrolled !== isScrolled) {
      this.setState({ isScrolled });
    }
  }

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
    const { isScrolled } = this.state;
    const style = isScrolled ? {} : transparentStyle;

    return (
      <Fragment>
      <AppBar className={classes.appBar} position="sticky" color="primary" style={style}>
        <Toolbar className={classes.toolBar} style={style}>
          {this.renderButtonLink()}
          <ChangeLangMenu />
        </Toolbar>
      </AppBar>
      <img
        src={headerImg}
        className={classes.headerImg}
        alt="Crystal Tyranids - Miniature Painting Studio"
      />
      </Fragment>
    );
  }
}

export default withStyles(styles)(PageHeader);
