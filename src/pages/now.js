import { graphql } from 'gatsby'
import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'

class Now extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Now" keywords={[`now`]} />
        <h1>Now</h1>
        <p>This is what I'm working on now.</p>
        <p>Location: Chicago, IL, USA.</p>
        <p>Here's what I'm up to:</p>
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
            , writing Ruby, Elixir, React.
          </li>
          <li>
            Reading <em>Design Concepts in Programming Languages</em> by Turbak,
            Gifford, and Sheldon.
          </li>
          <li>
            Mentoring and teaching a SQL workshop once per cohort at{' '}
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
            Maintaining <a href="https://til.hashrocket.com">Today I Learned</a>
            .
          </li>
          <li>
            Organizing the{' '}
            <a href="https://www.meetup.com/vim-chicago/">Vim Chicago Meetup</a>
            .
          </li>
          <li>
            Learning, writing, and speaking about Elixir, React, Ruby,
            TypeScript, SQL, Vim, testing, DevOps, mentorship, project
            management, algorithms, organizational leadership, public speaking,
            and the ethics of technology.
          </li>
        </ul>
      </Layout>
    )
  }
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
