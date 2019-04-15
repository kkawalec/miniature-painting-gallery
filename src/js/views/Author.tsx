import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Translate } from 'react-redux-i18n';
import ScrollableAnchor from 'react-scrollable-anchor';

const img1 = require('../../images/header-image.jpg');

const styles = {
  avatar: {
    margin: 10,
    width: 120,
    height: 120,
  },
};

interface IAuthorProps {
  classes: {
    avatar: string;
  };
}

class Author extends React.Component<IAuthorProps, {}> {
  public render(): JSX.Element {
    const { classes } = this.props;
    return (
      <ScrollableAnchor id="author">
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} sm={2}>
            <Avatar alt="Karolina Modes" src={img1} className={classes.avatar} />
          </Grid>
          <Grid item xs={12} sm={5}>
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
