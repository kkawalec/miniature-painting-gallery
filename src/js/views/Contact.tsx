import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

export default class Contact extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <ScrollableAnchor id="contact">
        <div style={{ minHeight: 500 }}>Contact</div>
      </ScrollableAnchor>
    );
  }
}
