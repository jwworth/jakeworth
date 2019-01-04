---
title: 'My First Pull Request: HAML'
date: '2014-02-19T10:00:12-06:00'
---

My first <a href='https://github.com/haml/haml/pull/746'>pull request to HAML</a> was merged yesterday.

I love the open source community.  The tools I use every day are maintained by teams of volunteers around the world, working for the betterment of their creations. One of my goals for 2014 is contribute my own code to some of these amazing projects.

One such project is <a href='https://github.com/haml/haml'>HAML</a>. HAML is a markup language that functions like ERB but is visually simpler. If you're used to ERB there's a learning curve to HAML, but a real upside if you can power through it. I like the project and appreciate that it exists.

If you've never contributed to open source, the process can seem intimidating. Yes, you are publicly submitting your work to a global cabal of senior programmers. But like anything, it just takes time and research.

The only question that matters is: how can I improve this project? Ideas can come from anywhere, including an open issues list, bugs you've observed, or a feature you'd like to see.

I found a bug– a typo in HAML's README. Some might argue a documentation typo is unimportant, but I disagree. It's a user-facing bug, because the users of these tools are other developers, who will actually read the documentation. And it's also just the right size bug for a newer programmer who has no history with the project.

In order to submit to HAML, I first needed to make a fork of the project on Github. This is done through the UI. Here's my <a href='http://github.com/jwworth/haml'>fork</a>, a mirror of the project at the moment I pressed the 'Fork' button. You can update the fork by <a href='http://help.github.com/articles/syncing-a-fork'>syncing it</a>, but I don't plan to be working that long on the fix.

Next I cloned the fork to my machine, using:

```sh
$ git clone https://github.com/jwworth/haml
```

This initiated a git repository with all the files. I changed into the new directory, but before entering a single command, HAML complained, because I didn't have the right version of Ruby it needed.

I installed Ruby 2.1.0 using RVM:

```sh
$ rvm install 2.1.0
$ rvm use 2.1.0
```

Next I installed the bundle of gems needed to support HAML.

```sh
$ bundle install
```

This complained several times about various dependencies I was missing, which is typical. Such error messages are not reproduced here because they are unique to my environment. The only solution is to read the error messages and install whatever is missing.

Once <code>bundle install</code> finished, it was time to run the test suite.

```sh
$ rake
```

Output:

```
# Running tests:

..........

Finished tests in 0.666598s, 655.5675 tests/s, 2703.2785 assertions/s.
437 tests, 1802 assertions, 0 failures, 0 errors, 0 skips
```

Great– tests are passing. I now should be able to tell if my changes break anything. A failing test is a guaranteed rejection for your pull request, and many projects like Rails won't merge a new feature without an accompanying test. So, even for small fixes like this, being able to run the test suite is essential.

Next I created a task branch for my changes.

```sh
$ git checkout -b task/fix_typos
```

I found and fixed a handful of other typos while reading the documentation, which made my submission feel more significant. With the changes complete, it's time to commit them.

```sh
$ git add .
$ git commit
```

This launched Vim, where I wrote this commit message: <strong>Fix some typos [ci skip]</strong>. Every project's commit messages style is a little different, and it's good to try and match the tone of your project. The <strong>[ci skip]</strong> tells HAML's automated test suite not to test my changes, which some projects permit for certain kinds of commits.  I wouldn't include this unless I'd already seen the tests pass myself and was confident the project managers would allow it.

Next I pushed my changes to origin.

```sh
$ git push origin
```

I found my repo on Github and opened a pull request to HAML. Github makes this easy.

Ten minutes later my pull request was merged. It's gratifying to have your code accepted by the software elites and be part of a useful, relevant project. I recommend it. Even a minor improvement is an improvement, and part of what makes open source great.