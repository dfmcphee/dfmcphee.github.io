import React from 'react'
import classNames from 'classnames';
import Link from 'gatsby-link';

import './Container.scss';

class Container extends React.Component {
  render() {
    const {condensed, header, content} = this.props;

    const containerClassNames = classNames('container', {
      'container--condensed': condensed
    });

    const headerMarkup = header ? (
      <div className="container__header">
        {header}
      </div>
    ) : null;

    return (
      <div className={containerClassNames}>
        {headerMarkup}
        <div className="container__content">
          {content}
        </div>
      </div>
    )
  }
}

export default Container
