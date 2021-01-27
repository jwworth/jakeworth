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
            display: `flex`,
            marginBottom: rhythm(2.5),
          }}
        >
          <p>
            I'm{' '}
            <a
              href="https://twitter.com/jwworth/"
              rel="noopener noreferrer"
              target="_blank"
            >
              {author}
            </a>
            , web developer. <Link to={`/`}>Home</Link>{' '}
            <Link to={`/about/`}>About</Link> <Link to={`/now/`}>Now</Link>{' '}
            <a
              href="https://www.getrevue.co/profile/react-explained/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Newsletter
            </a>
          </p>
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
