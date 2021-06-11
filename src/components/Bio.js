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
          <p>Blog of {author}.</p>
          <nav>
            <Link to={`/`}>Blog</Link>
            <Link to={`/now/`}>Now</Link>
            <Link to={`/about/`}>About</Link>
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
