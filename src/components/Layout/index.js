import React from 'react';
import Link from 'gatsby-link';

import './Layout.scss';

class Layout extends React.Component {
  render() {
    const {condensed, header, content} = this.props;

    const headerMarkup = header ? (
      <div className="layout__header">
        {header}
      </div>
    ) : null;

    return (
      <div className="layout">
        {headerMarkup}
        <div className="layout__content">
          {content}
        </div>
      </div>
    )
  }
}

export default Layout;
