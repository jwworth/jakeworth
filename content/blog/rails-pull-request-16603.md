---
title: 'Rails Pull Request #16603'
date: '2014-08-21T22:42:30-05:00'
---

Yesterday I made my second <a href='https://github.com/rails/rails/pull/16603'>contribution</a> to Rails.  Here's how it happened.

I had been looking for ways to contribute.  I use Rails for work, attended my first Rails Conf this year, and am a fan and proponent of the framework.  I think Rails is a powerful tool for building all kinds of web applications.

I was browsing the Github Issues page for the project, and noticed a call for contributions to the Rails 4.2 release notes.  My first Rails contribution was to the 4.1 release notes, so this seemed like a good chance to get involved again.

To start work on a contribution, I opened my local fork of Rails and updated my master branch:

```shell
$ git fetch upstream
$ git merge upstream/master
```

I like 'fetch' versus 'pull'.  It lets me compare changes prior to merging and avoid weird merge commits.

Once my branch was updated, I started reading through the release notes.  It was interesting to see what changed.  I look forward to seeing the notes about Adequate Record, which are currently unwritten.

Because of the contribution request, I was also searching for ways to improve the spelling, grammar, and syntax.

I like editing, and I'm using Vim 100% these days, so this soon devolved into me trying to augment my brain with Vim technology. I picked up a tool in the process, Vim spell checking:

```vim
:setlocal spell :wqspelllang=en_us
:set background=dark
```

This turned on spell error highlighting for US English, and set the background coloring to 'dark'.  With my dotfiles, this identified misspelled or foreign words throughout the file, and changed the coloring so the highlighting and text were not the same color.

I didn't find any obvious spelling errors, and soon realized that a careful spell check was probably one of the steps the core team performed before opening up the file for general contributions.

I did find a grammar error, however: the word 'does' where the word 'do' should have been.  It's a relevant issue because this file gets converted into a heavily trafficked public website.

I made my edit, stashed it on a 'task' branch, pushed it to Github, opened a pull request, and saw it merged into the project within minutes I love how responsive the Rails core team is.  I believe it's one of the reasons that Rails has been so successful.

Thanks to the Rails team for this exciting new release.  I look forward to building a new test application with it soon, and continuing to work on the release notes.
