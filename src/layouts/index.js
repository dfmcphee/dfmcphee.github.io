import React from 'react';
import Helmet from 'react-helmet'
import Link from 'gatsby-link';

import Button from '../components/Button';
import Icon from '../components/Icon';
import Container from '../components/Container';
import VisuallyHidden from '../components/VisuallyHidden';

import backIcon from '../icons/back.svg';

import '../styles/index.scss';


class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const header = (location.pathname !== '/') ? (
      <Button invisible to={'/'}>
        <Icon large src={backIcon} />
        <VisuallyHidden>Back to index</VisuallyHidden>
      </Button>
    ) : (
      null
    );

    return (
      <div>
        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=Fauna+One|Playfair+Display:900" rel="stylesheet" />
        </Helmet>
        <Container
          header={null}
          content={children()}
        />
      </div>
    )
  }
}

Template.propTypes = {
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
