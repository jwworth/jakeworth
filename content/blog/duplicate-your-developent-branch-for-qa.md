---
title: 'Duplicate your Development Branch for QA'
date: '2020-10-09T00:00:00-06:00'
---

I'm working on a team where we keep a clone of the `development` branch (the main
place where work is done), used to deploy to a QA environment. The benefits of
this branching technique are:

- `clone` is isolated from work
- It's easy to tell what was deployed to QA– `clone` is the source of truth

Instead of merging, we just reset `clone` to match the `development` branch.

Here's the technique:

```
# Update development, however you prefer.
# I like to rebase. 🤘
$ git checkout development
$ git pull --rebase

# Reset clone to match development
$ git checkout clone
$ git reset --hard development
$ git push
```

Deploy `clone` to your QA environment, and you'll have a working copy of
`development` ready for testing.
