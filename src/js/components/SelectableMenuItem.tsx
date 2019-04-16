import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import { createStyles, withStyles } from '@material-ui/core/styles';
import { Done } from '@material-ui/icons';
import React, { PureComponent } from 'react';

const styles = createStyles({
  image: {
    width: 30,
    height:'auto',
  },
});

interface ISelectableMenuItemProps {
  value: string;
  selectedValue: string;
  onChange: (value: string) => void;
  img: string;
  classes: {
    image: string,
  };
}

class MuiThemeMenuItem extends PureComponent<ISelectableMenuItemProps> {
  public handleClick = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    return this.props.onChange(this.props.value);
  }

  public render(): JSX.Element {
    const { value, selectedValue, img, classes } = this.props;
    const icon = selectedValue === value
      ? <Done /> : null;

    return (
      <MenuItem onClick={this.handleClick}>
         { icon && <ListItemIcon >
            {icon}
         </ListItemIcon> }
         <ListItemText inset>
         <img src={img} alt={value} className={classes.image}/>
         </ListItemText>
      </MenuItem>
    );
  }
}

export default withStyles(styles)(MuiThemeMenuItem);
