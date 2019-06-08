---
title: 'Porting TIL from Rails to Phoenix: Initial Commits'
date: '2016-11-29T13:31:53-06:00'
---

Last week, I started a new project: porting [Today I
Learned](https://til.hashrocket.com) from Ruby on Rails to Phoenix (Elixir).
The first few commits were pair programmed with Josh Branchaud, and I hope to
work with him and other Rocketeers going forward.

The repo for the new codebase is [here](https://github.com/hashrocket/tilex).

There's a lot of work to do to reproduce even the MVP functionality of TIL.
We're using the 'Projects' feature of Github to track progress right in the
repo. 

### Purpose

The purpose of this project is to learn Phoenix, explore the Elixir community,
and further develop myself and my colleagues as functional programmers.

A secondary benefit would be building an application that's more performant
than the Ruby version, or leverages unique Elixir features. Also, releasing an
open source project that excites people outside Hashrocket and serves as an
example of the type of functional programming work we are capable of.

### Status

At this point, we've built a working Phoenix application with the same basic
assets as the Rails application, a working post index page, and a working post
show page.

We are developing this application 100% TDD-- unit testing with ExUnit and
integration testing with [Hound](https://github.com/HashNuke/hound).

### Observations

I'm really enjoying this project thus far.

TDD has been challenging at times. Although Hound is great, it has a long way
to go to match Capybara's (a Ruby equivalent) power and expressiveness. I'm not
certain that the TDD element is necessary or the 'Elixir Way', if such a thing
exists. As a precompiled language, perhaps there's less of an argument for
testing everything up front? Still seems important, and it's my preferred
method of writing software, regardless of ecosystem.

More updates and (theoretically) a launch announcement to come.

