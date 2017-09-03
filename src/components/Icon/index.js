import React from 'react'
import classNames from 'classnames';
import atob from 'atob';

import './Icon.scss';

class Icon extends React.Component {
  render() {
    const {src, small, large} = this.props;
    const iconClassNames = classNames('icon', {
      'icon--small': small,
      'icon--large': large,
    });
    return (
      <div className={iconClassNames} dangerouslySetInnerHTML={{ __html: b64DecodeUnicode(src) }} />
    )
  }
}

function b64DecodeUnicode(str) {
  str = str.replace('data:image/svg+xml;base64,', '');
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

export default Icon
