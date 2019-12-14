---
title: 'Open Source Again'
date: '2019-12-14T00:00:00-06:00'
---

Today, I opened the source code to this blog on GitHub! 🎉

https://github.com/jwworth/jakeworth

The previous iteration of this application, a Ruby on Rails app, was open
source, and so open-sourcing its successor made sense to me. It's an example of
a simple React/Gatsby developer's blog.

Inside this codebase, what will you see? You'll see bones of the [Gatsby
Starter Blog](https://github.com/gatsbyjs/gatsby-starter-blog). I've added
Prism.js, Cypress integration tests, some helpful commands, marketing pages,
and a few styles.

Gatsby.js is amazing! If you're blogging with markdown, and have familiarity
with JavaScript, seriously consider it. I think statically-rendered should be
the default choice for basic blogging. Make yourself defend using
something more complicated like a database.

A developer's blog can be simple. I've integrated Heroku and GitHub, so every
time I push to master, the app is deployed. This allows me to make changes on
GitHub with my phone, or merge [Dependabot](https://dependabot.com/) PRs, and
deploy to production automatically.

I hope someone finds it helpful.
