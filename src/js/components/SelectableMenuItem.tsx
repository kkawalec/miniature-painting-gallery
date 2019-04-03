import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import { Done } from '@material-ui/icons';
import React, { PureComponent } from 'react';

interface ISelectableMenuItemProps {
  value: string;
  selectedValue: string;
  onChange: (value: string) => void;
}

export default class MuiThemeMenuItem extends PureComponent<ISelectableMenuItemProps, {}> {
  public handleClick = (e: any): void => {
    e.preventDefault();
    return this.props.onChange(this.props.value);
  }

  public render(): JSX.Element {
    const { value, selectedValue } = this.props;
    const icon = selectedValue === value
      ? <Done /> : null;

    return (
      <MenuItem onClick={this.handleClick}>
         { icon && <ListItemIcon >
            {icon}
         </ListItemIcon> }
          <ListItemText inset primary={value} />
      </MenuItem>
    );
  }
}
