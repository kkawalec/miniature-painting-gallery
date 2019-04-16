import Grid from '@material-ui/core/Grid';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Translate } from 'react-redux-i18n';
import ScrollableAnchor from 'react-scrollable-anchor';

import PricingCard from 'views/components/PricingCard';

const styles = createStyles({
  header: {
    textAlign: 'center',
  },
});

interface IPricingProps {
  classes: {
    header: string,
  };
}

class Pricing extends React.Component<IPricingProps> {
  public render(): JSX.Element {
    const { classes } = this.props;
    return (
      <ScrollableAnchor id="pricing">
       <Grid container justify="center" alignItems="center" spacing={40}>
          <Grid item xs={12}>
            <Typography variant="h3" className={classes.header}>
              <Translate value="pricing.label" />
            </Typography>
          </Grid>

          <Grid item>
            <PricingCard key="basic" name="basic"/>
          </Grid>

          <Grid item >
            <PricingCard key="standard"  name="standard"/>
          </Grid>

          <Grid item >
            <PricingCard key="pro"  name="pro"/>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="caption">
              <Translate value="pricing.comment" />
            </Typography>
          </Grid>

       </Grid>
      </ScrollableAnchor>
    );
  }
}

export default withStyles(styles)(Pricing);
