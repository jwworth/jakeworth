---
title: 'Scrapp'
date: '2014-09-03T19:45:55-05:00'
---

Today I am announcing the launch of <a href='https://scrapp.herokuapp.com'>Scrapp</a>.  Scrapp is an app for tracking Scrabble games.  It allows you to record players, scores, and bingos, with more features in development.

My inspiration for this project was <a href='https://github.com/seanmoon/pivot-pong'>Pivot Pong</a> by Pivotal Labs.  Pivot Pong tracks inter-office ping-pong games, and it serves as a living example of how Pivotal Labs approaches problems.

Scrapp serves two similar purposes for me.  First, it tracks Scrabble games.  My family has played Scrabble for decades.  Many generations of notebooks, lost to time, have recorded our tradition.  I wanted better living through technology, so I built a modern web application that is more powerful than any notebook.

The second purpose is to show how I write code.  Scrapp incorporates the industry best practices I have learned:

* It is built with the right tools for the job: Ruby on Rails 4.1 and Ruby 2.1.0.
* It is test-driven with Rspec.
* It uses well-maintained gems, including 'haml' for readable embedded Ruby, 'rubocop' and 'haml-lint' for code style, 'seed_fu' for painless database seeding, 'bootstrap-sass' to hack my styling, and 'rack-wwwhisper' for access control.
* It is hosted on Heroku, with 'rails_12_factor' for Twelve Factor App compliance.
* It is monitored by New Relic and continuously tested and deployed by CircleCI.
* It is version-controlled with Git, built using the <em>Git Flow</em> branching model, with a dedicated master and develop branch and corresponding environments, and semantic version tagging.
* It has a README and a TODO with a list of repeatable build steps.
* It is open source.

Right now Scrapp is a CRUD app with basic functionality.  In-house quality assurance is underway, and it will be rigorous.

Side projects like this couldn't exist without the magic of open source.  I would like to thank the many open-source project creators who have provided my foundation, partners like Heroku, CircleCI, and New Relic, who offer indefinite trial versions, and everybody else who has helped me along the way.
