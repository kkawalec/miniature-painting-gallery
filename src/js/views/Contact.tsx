import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { PureComponent } from 'react';
import { Translate } from 'react-redux-i18n';
import ScrollableAnchor from 'react-scrollable-anchor';

import BussinnessIcon from '@material-ui/icons/BusinessCenterRounded';
import CallIcon from '@material-ui/icons/CallRounded';

import ContactForm from 'views/components/ContactForm';

const styles = (theme: any) => ({
  paper: {
    padding: 24,
    // display: 'flex',
    // flexDirection: 'column' as any,
    // alignItems: 'center',
    // maxWidth: 350,
    // minWidth: 250,
  },
  header: {
    marginBottom: 16,
    padding: 24,
  },
  info: {
    alignItems: 'center',
    flexDirection: 'column' as any,
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
  },
  icon: {
    margin: '0 8px -4px -32px',
    color: theme.palette.primary.main,
  },
  infoHeader: {
    marginTop: 36,
  },
});

interface IContactProps {
  classes: {
    paper: string,
    header: string,
    info: string,
    icon: string,
    infoHeader: string,
  };
}

class Contact extends PureComponent<IContactProps, {}> {
  public render(): JSX.Element {
    const { classes } = this.props;
    return (
      <ScrollableAnchor id="contact">
        <Paper className={classes.paper}>
          <Grid container justify="center" alignItems="center">

            <Grid item xs={12} sm={6} >
              <div className={classes.header}>
                <Typography variant="h3">
                  <Translate value="contact.title" />
                </Typography>
                <Typography variant="body1">
                  <Translate className="font-courgette" value="contact.comment" />
                </Typography>
              </div>
              <ContactForm />
            </Grid>
            <Grid item xs={12} sm={6} className={classes.info}>
              <div>

              <Typography variant="h5">
                <CallIcon className={classes.icon} />
                <Translate value="Call us directly" />
              </Typography>

              <Typography variant="body1">
                <p>Karolina Modes</p>
                <p>+48600503507</p>
                <p>Every day, 9:00-22:00</p>
              </Typography>

              <Typography variant="h5" className={classes.infoHeader}>
                <BussinnessIcon className={classes.icon} />
                <Translate value="Legal information" />
              </Typography>

              <Typography variant="body1">
                <p>Karolina Modes AedLabs</p>
                <p>NIP ..... </p>
                <p>Address....</p>
              </Typography>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </ScrollableAnchor>
    );
  }
}

export default withStyles(styles)(Contact);
