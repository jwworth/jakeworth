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
          🖥 Coding and consulting remotely for{' '}
          <a
            href="https://hashrocket.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hashrocket
          </a>
          , writing mainly Ruby, Elixir, and React.
        </li>
        <li>
          💻 Developing side projects. Latest:{' '}
          <a
            href="https://www.thebellisringing.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Bell
          </a>
          .
        </li>
        <li>
          🇺🇸 Teaching and volunteering at{' '}
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
          🤝 Organizing the{' '}
          <a
            href="https://www.meetup.com/vim-chicago/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vim Chicago Meetup
          </a>
          .
        </li>
        <li>
          🎨 Completing the{' '}
          <a
            href="https://www.dailyui.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daily UI
          </a>{' '}
          challenge. Follow my progress{' '}
          <a
            href="https://twitter.com/search?q=%23DailyUI%20(from%3Ajwworth)"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
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
          about Ruby, Elixir, React, WebAssembly, SQL, Vim, algorithms, testing,
          DevOps, design, language design, mentorship, project management,
          remote work, organizational leadership, public speaking, and the
          ethics of technology.
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
