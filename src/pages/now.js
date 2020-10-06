import React, { useMemo } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const THINKING_ABOUT = [
  'product development',
  'organizational change',
  'ethics of technology',
  'type safety',
  'mentorship & teaching',
  'remote work',
  'being a senior developer',
  'entrepreneurship',
  'language design',
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
        "Don't tell people how to do things; tell them what to do and let them
        surprise you with their results." –Gen. George S. Patton
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
          , writing Ruby, Elixir, and React. Celebrating six years with this
          stellar team.
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
          , a Gibson Les Paul electric guitar copy from a kit.
        </li>
        <li>
          📣 Preparing a talk for RubyConf 2020. I'm a waitlisted speaker.
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
