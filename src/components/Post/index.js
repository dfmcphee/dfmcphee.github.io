import React from 'react'
import classNames from 'classnames';
import Link from 'gatsby-link';

import './Post.scss';

class Post extends React.Component {
  render() {
    const {condensed, title, date, content, link} = this.props;
    const postClassNames = classNames('post', {
      'post--condensed': condensed
    });

    const titleArray = title.split(' ');
    const lastWord = titleArray.pop();
    const secondLastWord = titleArray.pop();

    const titleMarkup = link ? (
      <h2 className="post__title">
        <Link to={link}>
          {titleArray.join(' ')} {secondLastWord}&nbsp;{lastWord}
        </Link>
      </h2>
    ) : (
      <h1 className="post__title">
        {titleArray.join(' ')} {secondLastWord}&nbsp;{lastWord}
      </h1>
    );

    return (
      <div className={postClassNames}>
        <div className="post__header">
          {titleMarkup}
          <p className="post__date">
            <time dateTime={date}>
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
