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
        <p>This is what I'm working on now, inspired by Derek Sivers.</p>
        <p>Location: Chicago, IL.</p>
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
            .
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
            Reading <em>Work Rules!</em> by Laszlo Bock.
          </li>
          <li>Studying for an AWS Academy Cloud Foundations certification.</li>
          <li>
            Learning and writing about Elixir, React, Ruby, SQL, testing,
            DevOps, mentorship, project management, organizational leadership,
            public speaking, ethics of technology, and algorithms.
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
