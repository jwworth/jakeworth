import { Link, StaticQuery, graphql } from 'gatsby'
import React from 'react'

import { rhythm } from '../utils/typography'

const Bio = () => (
  <StaticQuery
    query={bioQuery}
    render={data => {
      const { author, social } = data.site.siteMetadata

      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: rhythm(2.5),
          }}
        >
          <p>
            Blog of{' '}
            <a
              href="https://twitter.com/jwworth/"
              rel="noopener noreferrer"
              target="_blank"
            >
              {author}
            </a>
            .
          </p>
          <nav>
            <Link to={`/`}>Home</Link>
            <Link to={`/about/`}>About</Link>
            <Link to={`/now/`}>Now</Link>
          </nav>
        </div>
      )
    }}
  />
)

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
