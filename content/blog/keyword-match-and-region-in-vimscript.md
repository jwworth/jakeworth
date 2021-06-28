---
title: 'Keyword, Match, and Region in VimScript'
date: '2016-04-20T22:40:49-05:00'
tags:
  - vim
---

After a recent talk I gave that included VimScript, an attendee asked a
question about the differences between `keyword`, `match`, and `region`
following `syn` in a Vim syntax highlighting file.

These three short chapters from 'Learn VimScript the Hard Way' help explain:

* [Chapter 45](http://learnvimscriptthehardway.stevelosh.com/chapters/45.html)
* [Chapter 46](http://learnvimscriptthehardway.stevelosh.com/chapters/46.html)
* [Chapter 47](http://learnvimscriptthehardway.stevelosh.com/chapters/47.html)

Here's the short version:

* `keyword` assigns a variable name directly to a word or multiple words
* `match` assigns a variable name to a Vim regex
* `region` assigns a variable name to something between a "start" pattern and an "end" pattern

For more info, check out the Vim help pages for each:

```vim
:help syn-keyword
:help syn-match
:help syn-region
```
