import Fab from '@material-ui/core/Fab';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Translate } from 'react-redux-i18n';
import ScrollableAnchor from 'react-scrollable-anchor';

const styles = createStyles({
  root: {
    margin: 24,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  header: {
    marginBottom: 30,
  },
  fab: {
    minWidth: 200,
    marginTop: 30,
  },
});

interface IAboutProp {
  classes: {
    root: string,
    fab: string,
    header: string,
  };
}

class About extends React.Component<IAboutProp> {
  public render(): JSX.Element {
    const { classes } = this.props;
    return (
      <ScrollableAnchor id="about">
        <div className={classes.root}>
          <Typography variant="h3" gutterBottom className={classes.header}>
            <Translate value="about.header" />
          </Typography>

          <Typography variant="h5" gutterBottom>
            <Translate className="font-courgette" value="about.content" />
          </Typography>

          <a href="#contact">
            <Fab variant="extended" color="primary" className={classes.fab} >
              <Translate value="about.contact" />
            </Fab>
          </a>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default withStyles(styles)(About);
