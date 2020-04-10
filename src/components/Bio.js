import { Link, StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
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
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={author}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              minWidth: 50,
              borderRadius: `100%`,
            }}
          />
          <p>
            I'm <a href="https://twitter.com/jwworth/">{author}</a>, a web
            developer. <Link to={`/`}>Blog</Link>{' '}
            <Link to={`/about/`}>About</Link> <Link to={`/now/`}>Now</Link>
          </p>
        </div>
      )
    }}
  />
)

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
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
