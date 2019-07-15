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
        <p>Mantra: Ship. 📦 </p>
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
            , writing Elixir and Elm.
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
            Reading <em>So Good They Can't Ignore You</em> by Cal Newport.
          </li>
          <li>
            Studying for an AWS Certified Developer-Associate certification
            test.
          </li>
          <li>
            Learning and writing about Elixir, React, Ruby, SQL, testing,
            DevOps, mentorship, project management, algorithms, organizational
            leadership, public speaking, and ethics of technology.
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
