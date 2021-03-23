import React, { useEffect } from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const THINKING_ABOUT = [
  'product development',
  'fintech',
  'organizational change',
  'ethics of technology',
  'mentorship & teaching',
  'remote work',
  'engineering management',
  'entrepreneurship',
  'communication',
]

const Now = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title

  const thoughts = THINKING_ABOUT.join(', ')
  const latestPost = data.allMarkdownRemark.edges[0].node
  const {
    fields: { slug },
    frontmatter: { title },
  } = latestPost

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Now" />
      <h1>Now</h1>

      <h3>Home base</h3>
      <p>&#129438; Portland, Maine.</p>

      <h3>Quote</h3>
      <blockquote>
        <p>"Don't ask for advice. Ask for a code review." –Unknown</p>
      </blockquote>

      <h3>Latest Post</h3>
      <p>
        <Link to={slug}>{title}</Link>
      </p>

      <h3>Working On</h3>
      <ul>
        <li>
          &#128187; Coding and consulting remotely for{' '}
          <a
            href="https://hashrocket.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hashrocket
          </a>
          , writing Ruby, Elixir, and React. Celebrating six years with this
          stellar team.
        </li>
        <li>
          &#127482;&#127480; Teaching SQL workshops and mentoring at{' '}
          <a
            href="https://www.codeplatoon.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code Platoon
          </a>
          .
        </li>
        <li>
          &#127891; Writing for and maintaining{' '}
          <a
            href="https://til.hashrocket.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Today I Learned
          </a>
          .
        </li>
        <li>
          &#128230; Shipping side projects. Recently shipped:{' '}
          <a
            href="https://www.getrevue.co/profile/react-explained"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Explained
          </a>
          ,{' '}
          <a
            href="https://github.com/jwworth/bell"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Bell
          </a>
          .
        </li>
        <li>&#129504; Trying to better understand: {thoughts}. </li>
      </ul>

      <h3>Tweeting</h3>
      <p>
        <a
          class="twitter-timeline"
          data-tweet-limit="5"
          href="https://twitter.com/jwworth?ref_src=twsrc%5Etfw"
        >
          Tweets by jwworth
        </a>
      </p>
    </Layout>
  )
}

export default Now

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
