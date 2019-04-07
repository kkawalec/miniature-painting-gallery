import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Translate } from 'react-redux-i18n';
import ScrollableAnchor from 'react-scrollable-anchor';

import PricingCard from 'views/components/PricingCard';

export default class Pricing extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <ScrollableAnchor id="pricing">
       <Grid container justify="center" alignItems="center" spacing={40}>
          <Grid item xs={12}>
            <Typography variant="h4">
              <Translate value="pricing.label" />
            </Typography>
          </Grid>

          <Grid item>
            <PricingCard key="battleReady" name="battleReady"/>
          </Grid>

          <Grid item >
            <PricingCard key="tableTop"  name="tableTop"/>
          </Grid>

          <Grid item >
            <PricingCard key="withLove"  name="withLove"/>
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
