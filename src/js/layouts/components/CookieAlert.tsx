import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { Translate, I18n } from 'react-redux-i18n';
import { env } from 'const/env';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';


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

  render() {
    const {classes} = this.props;
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
