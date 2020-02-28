import { graphql } from 'gatsby'
import React from 'react'

import '../../css/videos.css'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const About = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const about = data.markdownRemark

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="About" keywords={[`about`]} />
      <h1>About</h1>
      <div dangerouslySetInnerHTML={{ __html: about.html }} />
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { title: { eq: "About" } }) {
      html
    }
  }
`
