import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';

const styles = {
  root: {
    display: 'flex',
  },
};

interface IDropdownMenuProps {
  classes: any;
  id: string;
  label: any;
  style?: object;
}
interface IDropdownMenuState {
  open: boolean;
  anchorEl?: any;
}

class DropdownMenu extends React.Component<IDropdownMenuProps, IDropdownMenuState> {
  public state = {
    anchorEl: null,
    open: false,
  };

  public handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  }

  public handleClose = (event) => {
    if (this.state.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  }

  public render() {
    const { classes, id, label, style } = this.props;
    const { open } = this.state;
    const extraProps = { id };

    const popper = ({ TransitionProps, placement }) => (
      <Grow
        {...TransitionProps}
        {...extraProps}
        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
      >
        <Paper>
          <ClickAwayListener onClickAway={this.handleClose}>
            <MenuList>
              {this.props.children}
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Grow>
    );

    return (
      <div className={classes.root} style={style}>
        <div>
          <Button
            buttonRef={node => this.state.anchorEl = node}
            aria-owns={open ? id : undefined}
            aria-haspopup="true"
            onClick={this.handleToggle}
          >
            {label}
          </Button>
          <Popper open={open} anchorEl={this.state.anchorEl} transition disablePortal>
            {popper}
          </Popper>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(DropdownMenu);
