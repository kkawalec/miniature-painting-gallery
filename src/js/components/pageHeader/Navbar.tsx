
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import { Link } from 'react-router-dom';

import DropdownMenu from 'components/DropdownMenu';
import BrandImage from './common/BrandImage';
import MenuLink from './common/MenuLink';

const styles = {
  root: {
    flexGrow: 1,
  },
};

interface INavbarProps {
  classes: {
    root: string,
  };
}

const links = [
  { to: '/', label: 'Home', icon: null },
  { to: '/gallery', label: 'Gallery', icon: null },
  { to: '/pricing', label: 'Pricing', icon: null },
  { to: '/contact', label: 'Contact', icon: null },
];

class DesktopNavbar extends React.Component<INavbarProps, {}> {

  public renderButtonLink(): JSX.Element[] {
    return links.map(link => (
      <Link to={link.to} key={link.to}>
        <Button>
          {link.label}
        </Button>
      </Link>
      ));
  }

  public renderDropdownLink(): JSX.Element[] {
    return links.map(link => <MenuLink to={link.to} key={link.to} label={link.label} icon={link.icon} />);
  }

  public render(): JSX.Element {
    const { classes } = this.props;
    return (
      <Toolbar className={classes.root}>
        <BrandImage />
        <Hidden xsDown>
          {this.renderButtonLink()}
        </Hidden>
        <Hidden smUp>
          <DropdownMenu label="MENU" id="mobile-menu" style={{ marginLeft: 'auto', zIndex: 1600 }}>
            {this.renderDropdownLink()}
          </DropdownMenu>
        </Hidden>
      </Toolbar>
    );
  }
}

export default withStyles(styles)(DesktopNavbar);
