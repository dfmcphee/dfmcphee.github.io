import React from 'react'
import classNames from 'classnames';
import Link from 'gatsby-link';

import './Container.scss';

class Container extends React.Component {
  render() {
    const {children} = this.props;

    return (
      <div className="container">
        {children}
      </div>
    )
  }
}

export default Container
