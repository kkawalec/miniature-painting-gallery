import Divider from '@material-ui/core/Divider';
import Fab from '@material-ui/core/Fab';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Translate } from 'react-redux-i18n';

const styles = {
  paper: {
    padding: 24,
    display: 'flex',
    flexDirection: 'column' as any,
    alignItems: 'center',
    maxWidth: 350,
    minWidth: 250,
  },
  header: {
    textAlign: 'center' as any,
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    maxWidth: 200,
  },
};

interface IPricingCardProps {
  name: string;
  classes: {
    paper: string,
    header: string,
    item: string,
    button: string,
  };
}

class PricingCard extends React.PureComponent<IPricingCardProps, {}> {
  public render(): JSX.Element {
    const { name, classes } = this.props;

    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" className={classes.header}>
          <Translate value={`pricing.${name}.label`} />
        </Typography>
        <Typography variant="overline" className={classes.header}>
          <Translate value="pricing.priceFrom" />
        </Typography>
        <Typography variant="h3" className={classes.header}>
          <Translate value={`pricing.${name}.price`} />
        </Typography>

        <MenuList>
          <MenuItem disabled className={classes.item}><Translate value={`pricing.${name}.p1`} /></MenuItem>
          <Divider />
          <MenuItem disabled className={classes.item}><Translate value={`pricing.${name}.p2`} /></MenuItem>
          <Divider />
          <MenuItem disabled className={classes.item}><Translate value={`pricing.${name}.p3`} /></MenuItem>
          <Divider />
          <MenuItem disabled className={classes.item}><Translate value={`pricing.${name}.p4`} /></MenuItem>
        </MenuList>

        <a href="#gallery">
          <Fab variant="extended" color="primary" className={classes.button}>
            <Translate value="pricing.examples" />
          </Fab>
        </a>
      </Paper>
    );
  }
}

export default withStyles(styles)(PricingCard);
