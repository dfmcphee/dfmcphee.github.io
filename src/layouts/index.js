import React from 'react';
import Helmet from 'react-helmet';
import withRouter from 'react-router-dom/withRouter';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Button from '../components/Button';
import Icon from '../components/Icon';
import Container from '../components/Container';
import Layout from '../components/Layout';
import VisuallyHidden from '../components/VisuallyHidden';

import backIcon from '../icons/back.svg';

import '../styles/index.scss';

class TransitionHandler extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.location.pathname === window.location.pathname;
  }

  render() {
    const { children } = this.props;
    return (
      <div className="transition-container">
        {children}
      </div>
    );
  }
}

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
      <Container>
        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=Fauna+One|Playfair+Display:900" rel="stylesheet" />
        </Helmet>
        <ReactCSSTransitionGroup
          component="div"
          className="transition-group"
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          <TransitionHandler
            location={location}
            key={location.pathname}
          >
            <Layout
              header={header}
              content={children()}
            />
          </TransitionHandler>
        </ReactCSSTransitionGroup>
      </Container>
    )
  }
}

Template.propTypes = {
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default withRouter(Template);
