import React from 'react'
import classNames from 'classnames';

import './Post.scss';

class Post extends React.Component {
  render() {
    const {condensed, title, date, content} = this.props;
    const postClassNames = classNames('post', {
      'post--condensed': condensed
    });

    const titleArray = title.split(' ');
    const lastWord = titleArray.pop();
    const secondLastWord = titleArray.pop();

    return (
      <div className={postClassNames}>
        <div className="post__header">
          <h1 className="post__title">
            {titleArray.join(' ')} {secondLastWord}&nbsp;{lastWord}
          </h1>
          <p className="post__date">
            <time datetime={date}>
              {date}
            </time>
          </p>
        </div>
        <div className="post__content" dangerouslySetInnerHTML={{ __html: content}} />    
      </div>
    )
  }
}

export default Post
