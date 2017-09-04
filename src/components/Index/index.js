import React from 'react';

import './Index.scss';

class Index extends React.Component {
  render() {
    const {children} = this.props;

    return (
      <div className="index">
        {children}
      </div>
    )
  }
}

export default Index;
