import React, { useEffect } from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const THINKING_ABOUT = [
  'bootstrapping',
  'design',
  'collaboration',
  'technical management',
  'MVP development',
  'apprenticeships',
  'estimation',
  'type safety',
  'test strategy',
  'learning cultures'
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
      <p>Portland, Maine.</p>

      <h3>Quote</h3>
      <blockquote>
        <p>
          "If, instead of seeking approval, you ask, 'What’s wrong with it? How
          can I make it better?', you are more likely to get a truthful,
          critical answer." —Paul Arden
        </p>
      </blockquote>

      <h3>Latest Post</h3>
      <p>
        <Link to={slug}>{title}</Link>
      </p>

      <h3>Working On</h3>
      <ul>
        <li>
          Working at{' '}
          <a
            href="https://www.framebridge.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Framebridge
          </a>
          . I'm a senior individual contributor, building web applications and
          integrations to help employees design and manufacture frames.
        </li>
        <li>
          Teaching SQL workshops and mentoring at{' '}
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
          Shipping side projects. Recently shipped:{' '}
          <a
            href="https://www.getrevue.co/profile/react-explained"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Explained
          </a>
          .
        </li>
        <li>Trying to better understand: {thoughts}. </li>
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
