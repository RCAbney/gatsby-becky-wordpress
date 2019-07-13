import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Img from 'gatsby-image'
import parse from 'html-react-parser'

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost
    const fluid =
      post.featured_media.localFile.childImageSharp.fluid
    const postBody = parse(post.content, {
      replace: ({ attribs }) =>
        attribs && attribs.class === 'wp-block-image' && <React.Fragment />,
    })
    console.log(postBody)
    return (
      <Layout>
        <SEO
          title="Becky365"
          keywords={[`photography`, `365 day photography challenge`]}
        />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-push-2">
              <div className="post">
                <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
                <Img
                  fluid={fluid}
                  alt={post.title}
                  className="post-image"
                />
                <div className="post-body">{postBody}</div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
