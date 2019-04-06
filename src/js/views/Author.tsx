import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

export default class Home extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <ScrollableAnchor id="author">
        <div style={{ minHeight: 500 }}>Author</div>
      </ScrollableAnchor>
    );
  }
}
