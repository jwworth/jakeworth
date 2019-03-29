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
            Coding and consulting for{' '}
            <a
              href="https://hashrocket.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hashrocket
            </a>
            .
          </li>
          <li>Shipping side projects.</li>
          <li>
            Mentoring and teaching a quarterly SQL workshop at{' '}
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
            Learning and writing about user interfaces, language design, static
            typing, data modeling, algorithms, functional programming, project
            management, organizational leadership, and more.
          </li>
        </ul>
        <p>
          In the past I’ve done conference speaking, and I’m always open to new
          speaking opportunities. Contact me if you'd like me to speak at an
          upcoming event: jake@jakeworth.com.
        </p>
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
