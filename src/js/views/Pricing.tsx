import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

export default class Pricing extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <ScrollableAnchor id="pricing">
        <div style={{ minHeight: 500, height: 500 }}>Pricing</div>
      </ScrollableAnchor>
    );
  }
}
