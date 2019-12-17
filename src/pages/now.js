import { graphql } from 'gatsby'
import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const Now = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Now" keywords={[`now`]} />
      <h1>Now</h1>
      <p>Home base: Chicago, IL, USA.</p>
      <p>This is what I'm working on now:</p>
      <ul>
        <li>
          Working at{' '}
          <a
            href="https://hashrocket.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hashrocket
          </a>
          , writing Ruby, Elixir, and React.
        </li>
        <li>Developing side projects.</li>
        <li>
          Mentoring a veteran programmer and teaching a SQL workshop once each
          per cohort at{' '}
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
          Maintaining <a href="https://til.hashrocket.com">Today I Learned</a>.
        </li>
        <li>
          Organizing the{' '}
          <a href="https://www.meetup.com/vim-chicago/">Vim Chicago Meetup</a>.
        </li>
        <li>
          <a href="https://www.swyx.io/writing/learn-in-public/">
            Learning in public
          </a>{' '}
          about Elixir, React, Ruby, TypeScript, SQL, Vim, testing, DevOps,
          mentorship, project management, algorithms, language design,
          organizational leadership, public speaking, and the ethics of
          technology.
        </li>
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
