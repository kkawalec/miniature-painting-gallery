import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import { env } from 'const/env';
import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { I18n, Translate } from 'react-redux-i18n';

const styles = (theme: Theme) =>  createStyles({
  button: {
    width: 150,
    backgroundColor: `${theme.palette.secondary.main} !important`,
    color: 'white !important',
    fontFamily: theme.typography.fontFamily,
    textTransform: 'uppercase',
    borderRadius: `${theme.shape.borderRadius}px !important`,
  },
  container: {
    backgroundColor: `${theme.palette.primary.main} !important`,
    fontFamily: theme.typography.fontFamily,
  },
});

interface ICookieAlertProps {
  classes: {
    button: string,
    container: string,
  };
}

class CookieAlert extends React.PureComponent<ICookieAlertProps> {

  public render() {
    const { classes } = this.props;
    return (
      <CookieConsent
        location="bottom"
        buttonText={I18n.t('cookies.accept')}
        cookieName={env.COOKIE_CONSENT}
        buttonClasses={classes.button}
        containerClasses={classes.container}
        expires={10}
      >
        <Translate value="cookies.content" />
      </CookieConsent>
    );
  }

}

export default withStyles(styles)(CookieAlert);
