---
title: 'mgrim: Everything Updated All The Time'
date: '2018-07-11T10:49:00-05:00'
---

My current favorite command line alias is `mgrim`, composed of four other aliases:

```
alias gmr='gco master && gpr && gco - && git rebase master'
alias grim='git rebase -i master'
alias mgrim='gmr && grim'
```

Here's what this does (starting from a feature branch):

- `gmr` - checkout the master branch (`gco` is a Hashrocket alias for `git checkout`. Pull from origin/master and try to put my commits in the right place in history (`gpr` is a Hashrocket alias for `git pull --rebase`). Checkout my feature branch. Fast-forward my branch to the top of master (as though I had branched off master's current `HEAD`.
- `grim` - Open an interactive rebase to cleanup everything on my branch (see ['Squash Your PR'](/squash-your-pr))

I use feature branches for work, and use this command right before merging into master. The result? I'm always forced to look at my branch history and squash it down to the minimum, which is good for everyone (including future me). And, I never have a merge conflict with master.
