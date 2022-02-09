import React from 'react'
import classNames from 'classnames';

import VisuallyHidden from '../VisuallyHidden';
import Icon from '../Icon';

import twitterIcon from '../../icons/twitter.svg';
import instagramIcon from '../../icons/instagram.svg';
import githubIcon from '../../icons/github.svg';

import './Bio.scss';

class Bio extends React.Component {
  render() {
    const {condensed} = this.props;
    const bioClassNames = classNames('bio', {
      'bio--condensed': condensed
    });
    const iconProps = condensed ? { small: true } : {}
    return (
      <div className={bioClassNames}>
        <span className="bio__avatar">
          <img src="https://s.gravatar.com/avatar/57dde0bd2de4350c196d9fb235703b83?s=500" className="bio__image" />
        </span>
        <div className="bio__copy">
          <span className="bio__lead">
            Hello,
          </span>
          <p className="bio__intro">
            My name is Dominic. I'm a front-end developer. I love to build, explore, and tinker.
          </p>
          <div className="bio__links">
            <a href="https://twitter.com/dfmcphee" className="bio__link">
              <VisuallyHidden>Twitter</VisuallyHidden>
              <Icon src={twitterIcon} {...iconProps} />
            </a>
            <a href="https://instagram.com/dfmcphee" className="bio__link">
              <VisuallyHidden>Instagram</VisuallyHidden>
              <Icon src={instagramIcon} {...iconProps} />
            </a>
            <a href="https://github.com/dfmcphee" className="bio__link">
              <VisuallyHidden>GitHub</VisuallyHidden>
              <Icon src={githubIcon} {...iconProps} />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Bio
