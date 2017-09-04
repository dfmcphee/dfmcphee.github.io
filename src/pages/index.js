import React from "react";
import get from "lodash/get";
import Helmet from "react-helmet";

import Bio from '../components/Bio';
import Post from '../components/Post';
import Index from '../components/Index';

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title")
    const posts = get(this, "props.data.allMarkdownRemark.edges")

    return (
      <div>
        <Helmet title={get(this, "props.data.site.siteMetadata.title")} />
        <Bio />
        <Index>
          {posts.map(post => {
            if (post.node.path !== "/404/") {
              const title = get(post, "node.frontmatter.title") || post.node.path
              return (
                <div key={post.node.frontmatter.path}>
                  <Post
                    condensed
                    link={post.node.frontmatter.path}
                    title={post.node.frontmatter.title}
                    date={post.node.frontmatter.date}
                    content={post.node.excerpt}
                  />
                </div>
              )
            }
          })}
        </Index>
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
