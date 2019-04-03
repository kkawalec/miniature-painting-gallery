import MenuItem from '@material-ui/core/MenuItem';
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

interface IMenuLinkProps {
  to: string;
  icon: React.ReactElement<any>;
  label: React.ReactElement<any> | string;
}

export default class MenuLink extends PureComponent<IMenuLinkProps> {

  public render(): JSX.Element {
    const { to, icon, label } = this.props;
    return (
      <Link to={to}>
        <MenuItem>
          <ListItemIcon >
            {icon}
          </ListItemIcon>
          <ListItemText inset primary={label} />
        </MenuItem>
      </Link>
    );
  }
}
