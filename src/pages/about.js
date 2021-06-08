import { graphql } from 'gatsby'
import React from 'react'

import Layout from '../components/Layout'
import Project from '../components/Project'
import SEO from '../components/seo'

import projects from '../data/projects'
import socialLinks from '../data/social'

const About = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const about = data.markdownRemark
  const day = new Date().getDay()
  const dayName = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ][day]

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="About" />
      <h1>About</h1>
      <p>Happy {dayName}! I’m Jake. &#128075; </p>
      <p>
        I'm an Army veteran and self-taught programmer working remotely at{' '}
        <a href="https://www.framebridge.com/">Framebridge</a>.
      </p>
      <p>
        Please visit my <a href="/">homepage</a> to explore my writing,{' '}
        <a href="/now/">Now</a> to see what I'm currently excited about, and my
        projects, talks, and profiles below. I'm most proud of my volunteer work
        mentoring and teaching SQL to veterans at{' '}
        <a href="https://www.codeplatoon.org/">Code Platoon</a>, presenting
        about automated testing at RailsConf 2017, and building{' '}
        <a href="https://til.hashrocket.com/">Today I Learned</a>, a popular
        developer blog with millions of annual visitors.
      </p>

      <p>
        The fastest way to get in touch with me is via{' '}
        <a href="https://twitter.com/jwworth">Twitter</a>. Thanks for stopping
        by!
      </p>
      <p>
        <em>Jake</em>
      </p>

      <div className="projects">
        <h3>Projects</h3>
        <ul>
          {projects.map(data => (
            <Project key={data.uuid} {...data} />
          ))}
        </ul>
      </div>

      <h3>Talks</h3>
      <ul>
        <li>
          <em>SQL Workshop</em>, Code Platoon (Bravo, Charlie, Delta, Foxtrot,
          Golf, Hotel, India, Juliet, Kilo, Lima, Mike, November, and Oscar
          cohorts), 2017—present.
        </li>
        <li>
          <em>How Building a Guitar Made Me a Better Programmer</em>, Hashrocket
          Remote Miniconf, RubyConf (waitlisted), 2020.
        </li>
        <li>
          <em>WebAssembly 101</em>, Hashrocket Winter Miniconf, 2019.
        </li>
        <li>
          <em>Functioning in React: A Deep-Dive into useState</em>, Chicago
          JavaScript Meetup / Ancient City Ruby, 2019.
        </li>
        <li>
          <em>Hashrocket Developer Survey 2019</em>, Hashrocket Summer Miniconf,
          2019.
        </li>
        <li>
          <em>Writing a Programming Language</em>, Hashrocket Winter Miniconf,
          2018.
        </li>
        <li>
          <em>Introducing Hooks</em>, React Chicago Meetup, 2018.
        </li>
        <li>
          <em>Weekly Team Retros</em>, Hashrocket Summer Miniconf, 2018.
        </li>
        <li>
          <p>
            <em>Format Your Elixir Code Now</em>, Chicago Elixir Meetup /
            ElixirDaze / Atlanta Elixir Meetup, 2018.
          </p>
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dwphyQmD6n8"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </li>
        <li>
          <em>React.js + Vim</em>, React Chicago Meetup, Vim Chicago Meetup,
          2017.
        </li>
        <li>
          <em>From Troops to Tech: A Panel of Chicago Veterans In Tech</em>,
          Chicago Veteran Developers Meetup, 2017.
        </li>
        <li>
          <em>State of the TIL</em>, Hashrocket Summer Miniconf, 2017.
        </li>
        <li>
          <p>
            <em>Observing Change: A Gold Master Test in Practice</em>, RailsConf
            / Sauce Labs Webinar, 2017.
          </p>
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/D9awDBUQvr4"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </li>
        <li>
          <em>Integration Testing with Wallaby</em>, Chicago Elixir Meetup,
          2017.
        </li>
        <li>
          <em>Git + Vim with Vim-Fugitive</em>, Vim Chicago Meetup, 2016.
        </li>
        <li>
          <em>Dive into Vim Language Plugins</em>, Vim Chicago Meetup, 2016.
        </li>
        <li>
          <em>Military to Programmer</em>, Code Platoon (Alpha cohort), 2016.
        </li>
        <li>
          <em>Test Driven Development/Pair Programming Workshop</em>, Code
          Platoon (Alpha cohort), 2016.
        </li>
        <li>
          <em>Introduction to Vim</em>, Vim Chicago Meetup, 2015.
        </li>
        <li>
          <em>Capybara Driver Benchmarking</em>, Hashrocket Summer Miniconf,
          2015.
        </li>
      </ul>

      <h3>Profiles</h3>
      <ul>
        {socialLinks.map(({ link, name, desc }) => (
          <li key={link}>
            <a href={link} rel="noopener noreferrer" target="_blank">
              {name}
            </a>
            : {desc}.
          </li>
        ))}
      </ul>
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
  }
`
