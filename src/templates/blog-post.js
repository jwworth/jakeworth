import React from 'react'
import { Disqus } from 'gatsby-plugin-disqus'
import { Link, graphql } from 'gatsby'
import { rhythm, scale } from '../utils/typography'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import Tags from '../components/Tags'

const BlogPostTemplate = props => {
  const post = props.data.markdownRemark
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next, slug } = props.pageContext
  const { tags, title } = post.frontmatter

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title={title} description={post.excerpt} />
      <h1>{title}</h1>
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

      {tags && (
        <div style={{ marginBottom: '2rem' }}>
          <Tags tags={tags} />
        </div>
      )}

      <div dangerouslySetInnerHTML={{ __html: post.html }} />

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

      <Disqus
        config={{
          url: props.location.href,
          identifier: props.location.pathname,
          title: title,
        }}
      />
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
        tags
      }
    }
  }
`
