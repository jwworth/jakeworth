---
title: 'My First Pull Request: Capistrano'
date: '2014-03-20T12:48:37-05:00'
---

The makers of <a href='http://capistranorb.com/'>Capistrano</a> describe it as a 'remote server and automation tool written in Ruby'.  Capistrano allows you to script repetitive tasks, such as the many steps needed to deploy.  Here is a command I run frequently:

```
$ bundle exec cap internal deploy
```

With this, Capistrano executes a series of steps that ends with our code deployed to an internal testing environment.  It's a useful tool and saves me a ton of work.

I decided I wanted to contribute to the project, and started reading through the CHANGELOG.  Today's open source projects are sophisticated efforts and the top contributors are involved in every change.  Capistrano further has a 'say no first' policy; you have to work get your pull request merged.

I started by reading the README, CHANGELOG, contribution guidelines, recent commits, and finally, the code.  Reading the code can be daunting but you need to give it a good try.  It's unlikely you will understand it all, but that's not the point.

Reading the CHANGELOG I found a misspelling that needed be fixed.  I found a few more misspellings in the file that handles software configuration management, so now I had the makings of a good pull request.

The first step I took was to fork the <a href='https://github.com/capistrano/capistrano'>Capistrano repository</a> on Github.  This created my own mirror of the code to work with.

Next, I cloned the fork to my computer.

```
$ git clone https://github.com/jwworth/capistrano.git
```

To start work, I changed into the new capistrano directory, switched my Ruby to a newer version (2.1.0) using RVM, and installed the bundle.

```
$ cd capistrano
$ rvm use 2.1.0
$ bundle install
```

Once all of the gems were installed, it was time to run the test suite:

```
$ bundle exec rake
```

The tests ran 200 examples with zero failures, which is good.  If the tests pass before and after making my changes, I have a reasonable assurance that I have not broken anything.  That assumes that the tests are good, something you can infer from the code, coverage, and climate (3.96/4 on codeclimate.com as of this posting).  It's a necessary practice.

I made my changes to the project and was ready to commit.  I did not include tests with the changes, because my changes only affected comments.  I did, however, run the test suite again after making my changes; same result.  Looking good.

I like to commit my changes to a dedicated feature branch.  To do that, I use 'git stash'.  From the master branch:

```
$ git stash
$ git checkout -b task/fix_typos
$ git stash apply
$ git add .
$ git commit
```

I wrote a simple commit message: 'Fix some typos'.  Next I dropped the stash and pushed to origin.

```
$ git stash drop
$ git push origin
```

In Github, I opened a <a href='https://github.com/capistrano/capistrano/pull/976'>pull request</a> to Capistrano.  It was merged a few hours later.

This is my tenth open source contribution in 2014.  Every project is different and going through the submission process has taught me something every time.