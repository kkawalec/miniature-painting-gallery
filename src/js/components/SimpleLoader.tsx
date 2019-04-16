import CircularProgress from '@material-ui/core/CircularProgress';
import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import React from 'react';

const styles = (theme: Theme) => createStyles({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

interface ISimpleLoaderProps {
  classes: {
    progress: string;
  };
}

function SimpleLoader(props: ISimpleLoaderProps) {
  const { classes } = props;
  return (
    <CircularProgress className={classes.progress} />
  );
}

export default withStyles(styles)(SimpleLoader);
