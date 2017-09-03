import React from 'react'

import './VisuallyHidden.scss';

class VisuallyHidden extends React.Component {
  render() {
    const {children} = this.props;
    return (
      <span className="visually-hidden">
        {children}
      </span>
    )
  }
}

export default VisuallyHidden
