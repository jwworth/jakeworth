---
title: 'Silver Searcher RDoc Support'
date: '2015-10-30T19:44:37-05:00'
---

Today I submitted my first pull request to [The Silver Searcher](https://github.com/ggreer/the_silver_searcher) project:

https://github.com/ggreer/the_silver_searcher/pull/782

Silver Searcher can be installed on OSX with Homebrew and is a fantastic command line search tool. Here's a search I wrote recently to hunt down Ruby getter methods:

```
$ ag 'def (\w+);?\s+@\1;?\s+end'
```

`ag` ... for Silver. And it's a search tool. Get it?

My pull request adds support for the RDoc file extension, which is common in many Ruby projects, including Rails. If it gets merged, the following search will be scoped only to RDoc files.

```
$ ag 'foo' --rdoc
```

This pull request allowed me to write and test in C, something I've never done before. I hope that this feature will allow programmers and OSS contributors to more easily navigate documentation from the command line. In a large project like Rails, a flag that can cut through the noise should be helpful.

### Update (November 12, 2015)

This pull request was merged; Silver Searcher now accepts `--rdoc` as a filter flag.
