import React, { useMemo } from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const THINKING_ABOUT = [
  'product development',
  'consulting',
  'fintech',
  'organizational change',
  'ethics of technology',
  'type safety',
  'mentorship & teaching',
  'remote work',
  'being a senior developer',
  'entrepreneurship',
  'language design',
  'code reviews',
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

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Now" />
      <h1>Now</h1>

      <strong>Home base:</strong>
      <p>&#129438; Portland, Maine.</p>

      <strong>Quote I'm pondering:</strong>
      <p>"Don't ask for advice. Ask for a code review." –Unknown</p>

      <strong>Latest Post:</strong>
      <p>
        <Link to={slug}>{title}</Link>
      </p>

      <p>
        <strong>What I'm working on right now:</strong>
      </p>

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
            href="https://www.thebellisringing.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Bell
          </a>
          .
        </li>
        <li>&#129504; Trying to better understand: {thoughts}. </li>
      </ul>
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
