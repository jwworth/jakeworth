import { Link, graphql } from 'gatsby'
import React from 'react'

import { rhythm, scale } from '../utils/typography'
import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'

const BlogPostTemplate = props => {
  const post = props.data.markdownRemark
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next, slug } = props.pageContext
  const editLink = `https://github.com/jwworth/jakeworth/edit/master/content/blog${slug.slice(
    0,
    -1
  )}.md`

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <h1>{post.frontmatter.title}</h1>
      <p
        style={{
          ...scale(-1 / 5),
          display: `block`,
          marginBottom: rhythm(1),
          marginTop: rhythm(-1),
        }}
      >
        {post.frontmatter.date} • {post.timeToRead} min read
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      {false && (
        <>
          <p>
            <a href={editLink}>Edit on GitHub</a>
          </p>
        </>
      )}

      <hr />

      <p>
        <em>
          Each week, I write an email about React. It's a collection of quotes,
          news, conference talks, and documentation curated be me to help you
          get up to speed on this exploding ecosystem. Join my subscribers today
          by subscribing to{' '}
          <a href="https://www.getrevue.co/profile/react-explained/">
            React Explained
          </a>
          .
        </em>
      </p>
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />
      <Bio />

      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
