import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

export default class Gallery extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <ScrollableAnchor id="gallery">
        <div style={{ minHeight: 500 }}>Gallery</div>
      </ScrollableAnchor>
    );
  }
}
