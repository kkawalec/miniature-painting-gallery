import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import React, { PureComponent } from 'react';

const styles = {
  avatar: {
    marginRight: 20,
  },
};

interface IBrandImageProps {
  classes: {
    avatar: string,
  };
}

class BrandImage extends PureComponent<IBrandImageProps> {
  public render(): JSX.Element {
    const { classes } = this.props;
    return (
      <Avatar className={classes.avatar}>TP</Avatar>
    );
  }
}

export default withStyles(styles)(BrandImage);
