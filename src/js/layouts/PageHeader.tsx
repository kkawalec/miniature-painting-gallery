import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import classNames from 'classnames';
import React, { Fragment } from 'react';
import { Translate } from 'react-redux-i18n';

import ChangeLangMenu from 'layouts/components/ChangeLangMenu';

// TODO: Add proper image
const headerImg = require('../../images/header-image.jpg');

const styles = createStyles({
  toolBar: {
    flexGrow: 1,
    justifyContent: 'center',
    transition: 'background-color 0.5s, box-shadow 0.5s',
  },
  appBar: {
    marginBottom: 872,
    transition: 'background-color 0.5s, box-shadow 0.5s',
  },
  headerImg: {
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundImage: `url(${ headerImg })`,
    minHeight: 900,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
});

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

interface ILink {
  to: string;
  label: React.ReactNode;
}

const links: ILink[] = [
  { to: '#about', label: <Translate value="about.label" /> },
  { to: '#gallery', label: <Translate value="gallery.label" /> },
  { to: '#author', label: <Translate value="author.label" /> },
  { to: '#pricing', label: <Translate value="pricing.label" /> },
  { to: '#contact', label: <Translate value="contact.label" /> },
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

    return (
      <Fragment>
      <AppBar className={classNames(classes.appBar, { transparent: !isScrolled })} position="sticky" color="primary">
        <Toolbar className={classNames(classes.toolBar, { transparent: !isScrolled })} >
          {this.renderButtonLink()}
          <ChangeLangMenu />
        </Toolbar>
      </AppBar>
      <div  className={classes.headerImg} />

      </Fragment>
    );
  }
}

export default withStyles(styles)(PageHeader);
