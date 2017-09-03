import React from 'react'
import classNames from 'classnames';
import Link from 'gatsby-link';

import './Button.scss';

class Button extends React.Component {
  render() {
    const { large, round, invisible, children, to, label} = this.props;
    const buttonClassNames = classNames('button', {
      'button--round': round,
      'button--invisible': invisible,
      'button--large': large,
    });

    const ariaLabel = label ? label : null;

    return (
      <Link className={buttonClassNames} to={to} title={ariaLabel}>
        <div className="button__container">
          {children}
        </div>
      </Link>
    )
  }
}

export default Button
