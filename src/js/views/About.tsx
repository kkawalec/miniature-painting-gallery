import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Translate } from 'react-redux-i18n';
import ScrollableAnchor from 'react-scrollable-anchor';

export default class About extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <ScrollableAnchor id="about">
        <div>
        <Typography variant="h3" gutterBottom>
          <Translate value="about.label" />
        </Typography>

        <Typography variant="h5" gutterBottom>
          <Translate value="about.content" />
        </Typography>

        </div>
      </ScrollableAnchor>
    );
  }
}
