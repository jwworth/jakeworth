import { graphql } from 'gatsby'
import React from 'react'

import Layout from '../components/Layout'
import LinkListItem from '../components/LinkListItem'
import SEO from '../components/seo'

const About = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="About" keywords={[`about`]} />
      <h1>About</h1>
      <p>These are my favorite projects, talks, and web profiles.</p>
      <h3>Projects</h3>
      <ul>
        <li>
          <a href="https://til.hashrocket.com">Today I Learned</a>
          <em>
            <p>
              TIL is an{' '}
              <a
                href="https://github.com/hashrocket/tilex"
                target="_blank"
                rel="noopener noreferrer"
              >
                open-source
              </a>{' '}
              project by{' '}
              <a
                href="https://hashrocket.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hashrocket
              </a>{' '}
              that exists to catalogue the sharing &amp; accumulation of
              knowledge as it happens day-to-day. Posts have a 200-word limit,
              and posting is open to any Rocketeer as well as selected friends
              of Hashrocket. The original Rails application was my Hashrocket
              apprentice project. We{' '}
              <a
                href="https://hashrocket.com/blog/posts/open-sourcing-today-i-learned"
                target="_blank"
                rel="noopener noreferrer"
              >
                open sourced
              </a>{' '}
              TIL in early 2016, and today I maintain the project with my fellow
              Rocketeers.
            </p>
            <p>
              Written in{' '}
              <a
                href="https://hashrocket.com/blog/posts/today-i-learned-in-phoenix"
                target="_blank"
                rel="noopener noreferrer"
              >
                Elixir/Phoenix
              </a>
              .
            </p>
          </em>
        </li>
        <li>
          <a href="https://github.com/hashrocket/capybara-webmock">
            Capybara::Webmock
          </a>
          <em>
            <p>
              A gem that mocks external requests for Capybara JavaScript
              drivers. Written with{' '}
              <a
                href="https://www.dillonhafer.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dillon Hafer
              </a>
              .
            </p>
          </em>
        </li>
        <li>
          <a href="https://github.com/jwworth/cap-driver-benchmarking">
            Capybara Driver Benchmarking
          </a>
          <em>
            <p>
              This is the application I built for a talk at Hashrocket's Summer
              Miniconf 2015. Its purpose is to benchmark the performance of
              drivers available for use with Capybara.
            </p>
          </em>
        </li>
        <li>
          <a href="https://javascript-equality.herokuapp.com/">
            JavaScript Equality
          </a>
          <em>
            <p>
              This application shows the JavaScript value-comparison operators
              == and === in action. It is written in React.js and TypeScript and
              inspired by the{' '}
              <a
                href="https://dorey.github.io/JavaScript-Equality-Table/"
                target="_blank"
                rel="noopener noreferrer"
              >
                JavaScript Equality Table
              </a>
              .
            </p>
          </em>
        </li>
        <li>
          <a href="https://conway-react.herokuapp.com/">Game of Life</a>
          <em>
            <p>
              My implementation{' '}
              <a
                href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
                target="_blank"
                rel="noopener noreferrer"
              >
                Conway's Game of Life
              </a>{' '}
              in React.js and TypeScript.
            </p>
          </em>
        </li>
        <li>
          <a href="http://novel.herokuapp.com">Ceramic Nation</a>
          <em>
            <p>A Markov Chain generated novel.</p>
          </em>
        </li>
        <li>
          <a href="https://rubygems.org/gems/remarkovable">Remarkovable</a>
          <em>
            <p>A gem that produces Markov chain output from any text.</p>
          </em>
        </li>
      </ul>
      <h3>Talks</h3>
      <ul>
        <li>
          <em>SQL Workshop</em>, Code Platoon (Bravo, Charlie, Delta, Foxtrot,
          Golf, Hotel, India, Juliet, and Kilo cohorts), 2017—2019.
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
          <em>
            <a href="https://www.youtube.com/watch?v=dwphyQmD6n8">
              Format Your Elixir Code Now
            </a>
          </em>
          , Chicago Elixir Meetup / ElixirDaze 2018 / Atlanta Elixir Meeetup,
          2018.
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
          <em>
            <a href="https://www.youtube.com/watch?v=D9awDBUQvr4">
              Observing Change: A Gold Master Test in Practice
            </a>
          </em>
          , RailsConf / Sauce Labs (webinar), 2017.
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

      <h3>Jake Around the 'Net</h3>
      <ul>
        <LinkListItem displayName="GitHub" href="https://github.com/jwworth" />
        <LinkListItem
          displayName="Hashrocket Blog"
          href="https://hashrocket.com/blog/rocketeers/jake-worth"
        />
        <LinkListItem
          displayName="Stack Overflow"
          href="https://stackoverflow.com/users/2112512/jake-worth"
        />
        <LinkListItem
          displayName="Today I Learned"
          href="https://til.hashrocket.com/authors/jakeworth"
        />
        <LinkListItem
          displayName="Twitter"
          href="https://twitter.com/jwworth"
        />
        <LinkListItem
          displayName="LinkedIn"
          href="https://www.linkedin.com/in/jakeworth"
        />
        <LinkListItem
          displayName="Speaker Deck"
          href="https://speakerdeck.com/jwworth"
        />
        <LinkListItem
          displayName="Exercism"
          href="https://exercism.io/profiles/jwworth"
        />
        <LinkListItem
          displayName="Meetup"
          href="https://www.meetup.com/members/12542589/"
        />
        <LinkListItem href="https://jwworth.yelp.com/" displayName="Yelp" />
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
