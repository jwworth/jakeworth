import React, { useMemo } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const THINKING_ABOUT = [
  'autoformatting',
  'virality',
  'mentorship & teaching',
  'prototyping',
  'ethics of technology',
  'spaced repetition',
  'remote work',
  'the limits of SPAs',
  'organizational change',
  'tradeoffs',
  'being a senior developer',
  'programming ergonomics',
  'testing',
  'SPA state management',
  'entrepreneurship',
  'type safety',
  'language design',
  'code reviews',
  'development roadmaps',
]

const Now = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title

  const thoughts = THINKING_ABOUT.join(', ')

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="Now"
        keywords={[
          'developer',
          'elixir',
          'hashrocket',
          'mentorship',
          'react',
          'ruby',
          'ui',
        ]}
      />
      <h1>Now</h1>

      <strong>Home base:</strong>
      <p>⚓️ Portland, Maine.</p>

      <strong>Quote I'm pondering:</strong>
      <p>
        "Don’t look for the next opportunity. The one you have in hand is the
        opportunity." –Paul Adren
      </p>

      <p>
        <strong>What I'm working on right now:</strong>
      </p>
      <ul>
        <li>
          🖥 Coding and consulting remotely for{' '}
          <a
            href="https://hashrocket.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hashrocket
          </a>
          , writing React, Elixir, and Ruby. Approaching my six-year anniversary
          on the team!
        </li>
        <li>
          📦 Shipping side projects. Recently shipped:{' '}
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
          , a Gibson Les Paul electric guitar copy from a kit, an owl house.
        </li>
        <li>
          {' '}
          🇺🇸 Teaching SQL workshops and mentoring at{' '}
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
          🎓 Writing for and maintaining{' '}
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
          📣{' '}
          <a
            href="https://www.swyx.io/writing/learn-in-public/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learning in public
          </a>{' '}
          about React via{' '}
          <a
            href="https://www.getrevue.co/profile/react-explained"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Explained
          </a>
          .
        </li>
        <li>🧠 Trying to better understand: {thoughts}. </li>
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
  }
`
