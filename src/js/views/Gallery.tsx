import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Translate } from 'react-redux-i18n';
import ScrollableAnchor from 'react-scrollable-anchor';

import GalleryGridList from 'views/components/GalleryGridList';

export default class Gallery extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <ScrollableAnchor id="gallery">
        <div>
          <Typography variant="h3" gutterBottom>
            <Translate value="gallery.label" />
          </Typography>
          <GalleryGridList />
        </div>
      </ScrollableAnchor>
    );
  }
}
