import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Translate } from 'react-redux-i18n';
import ScrollableAnchor from 'react-scrollable-anchor';

const img1 = require('../../images/KarolinaModes.jpg');

const styles = {
  avatar: {
    width: 120,
    height: 120,
    margin: 'auto auto',
  },
  root: {
    marginTop: 36,
    marginBottom: 36,
  },
};

interface IAuthorProps {
  classes: {
    avatar: string;
    root: string;
  };
}

class Author extends React.Component<IAuthorProps, {}> {
  public render(): JSX.Element {
    const { classes } = this.props;
    return (
      <ScrollableAnchor id="author">
        <Grid container justify="center" alignItems="center" className={classes.root}>
          <Grid item xs={12} sm={4}>
            <Avatar alt="Karolina Modes" src={img1} className={classes.avatar} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h5" gutterBottom>
              <Translate value="author.name" />
            </Typography>
            <Typography variant="subtitle1">
              <Translate value="author.content" className="font-courgette" />
            </Typography>
          </Grid>
        </Grid>
      </ScrollableAnchor>
    );
  }
}
export default withStyles(styles)(Author);
