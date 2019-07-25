---
title: 'Sinatra Pull Request #126'
date: '2014-03-28T17:20:15-05:00'
---

Reading Sinatra's documentation today, I found a few things to improve.  I checked and didn't see anybody working on them, so I decided to fix them.

I've already contributed once to this project, so I had a fork and local repo ready.  My fork was almost a month old, so I wanted to ensure it was current.

To do this, I needed to sync my fork with the project.  Step one was to verify that I didn't have an upstream already set.

```shell
$ git remote -v
origin  ssh://git@github.com/jwworth/sinatra-contrib.git (fetch)
origin  ssh://git@github.com/jwworth/sinatra-contrib.git (push)
```

This lists each remote that is set with the tag 'verbose' (give me more information').  My only remote was my fork, 'origin', so I set an upstream.

```shell
$ git remote add upstream https://github.com/sinatra/sinatra-contrib
```

Running the 'remote' command again, I saw my upstream:

```shell
$ git remote -v
origin  ssh://git@github.com/jwworth/sinatra-contrib.git (fetch)
origin  ssh://git@github.com/jwworth/sinatra-contrib.git (push)
upstream  https://github.com/sinatra/sinatra-contrib (fetch)
upstream  https://github.com/sinatra/sinatra-contrib (push)
```

Next, I fetched the changes:

```shell
$ git fetch upstream
remote: Counting objects: 1, done.
remote: Total 1 (delta 0), reused 1 (delta 0)
Unpacking objects: 100% (1/1), done.
From https://github.com/sinatra/sinatra-contrib
 * [new branch]      1.3.x      -> upstream/1.3.x
 * [new branch]      1.4.1      -> upstream/1.4.1
 * [new branch]      issue_27   -> upstream/issue_27
 * [new branch]      issue_28   -> upstream/issue_28
 * [new branch]      issue_39   -> upstream/issue_39
 * [new branch]      master     -> upstream/master
 * [new branch]      template-renderer-safety -> upstream/template-renderer-safety
```

You can do a lot of things at this step, but my goal was to get the 'upstream' changes and merge them into my 'downstream' master branch.

```shell
$ git merge upstream/master
Updating dc38ff1..1094b86
Fast-forward
 lib/sinatra/config_file.rb |    2 +-
 lib/sinatra/streaming.rb   |    2 +-
 2 files changed, 2 insertions(+), 2 deletions(-)
```

Next I installed the bundle (output omitted) and ran the tests.

```sh
$ bundle install
$ bundle exec rake

..........

Finished in 5.91 seconds
825 examples, 0 failures
```

The tests passed.  I made my changes to a file called 'reloader' and committed them to a task branch with the commit message 'Fix some typos'.  Running the tests again showed 825 examples and zero failures, a good sign.

After pushing to origin I opened this <a href='https://github.com/sinatra/sinatra-contrib/pull/126'>pull request</a>.  Sinatra's automated test suite ran and passed, as expected.  A little later, it was merged into the project.

When I was learning to program, I wanted to hone my skills by contributing to open source.  It seemed daunting at first.  Just to open a pull request to a Github Ruby repo, you have to understand Git, Ruby, Bundler, RSpec and/or Cucumber, and your OS.  Googling 'how can I contribute to open source?' yields a wealth of 'new programmer' curiosity.

Most open source projects welcome contributions, as long as they are improvements.  The keys for my contributions have been:

* Finding projects that I care about (read the Gemfile of the app that 'pays your bills' for inspiration)
* Understanding how their teams function (What are the contribution guidelines? What kind of pull requests get merged?)
* Following a simple checklist of best practices
* Reading error messages, responding to comments on your pull request, and not giving up at the first obstacle
