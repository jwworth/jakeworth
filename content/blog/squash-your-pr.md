---
title: 'Squash Your PR'
date: '2016-07-03T15:02:41-05:00'
tags:
  - git
---

### The Idea

> What does it mean to squash a Git branch?

Most pull requests go through a loop like this:

1. Open pull request
2. Maintainer gives feedback
3. Make changes
4. Repeat #2 and #3 until pull request is ready to merge
5. Maintainer merges pull request

Prior to the merge, the pull request branch can be pretty messy. We can fix
this by squashing the branch.

Consider this made-up Git branch:

```
* 724d574 (HEAD -> issue/38) Good to merge!
* e2af5ac Refactoring the previous commit
* 3e36475 Test are passing here
* ea479cb Revert "Ooops"
* 77aee1d Ooops
* 4c7ead2 Test breaker
```

The final commit, `724d574` (at the top), has been approved to merge by the
repo maintainer. But this branch is  a mess. We have a commit that's just
refactoring (`e2af5ac`), two commits that negate each other (`ea479cb` and
`77aee1d`), and one that has failing tests (`4c7ead2`).

Some projects use squash merges, which turn this entire list into one commit.
That technique can work out okay, but you can lose a ton of context by
squashing 5, 10, or 20 commits into one. I'd prefer to squash it myself. Let's
squash it!

*Disclaimer! This process alters history, so do it on a feature branch, not the
default branch. If it's part of a pull request, wait until the project
maintainer asks you to do it– changing history on an open pull request can make
an ongoing discussion difficult to follow.*

### The Squash

We'll use  `git rebase`, interactive mode, going back to the start of our
branch (six commits in the past):

```
$ git rebase -i HEAD~6
```

This opens our `git-rebase-todo`:

```
pick 4c7ead2 Test breaker
pick 77aee1d Ooops
pick ea479cb Revert "Ooops"
pick 3e36475 Test are passing here
pick e2af5ac Refactoring the previous commit
pick 724d574 Good to merge!

# Rebase dd6bb12..724d574 onto dd6bb12 (6 command(s))
#
# Commands:
# p, pick = use commit
# r, reword = use commit, but edit the commit message
# e, edit = use commit, but stop for amending
# s, squash = use commit, but meld into previous commit
# f, fixup = like "squash", but discard this commit's log message
# x, exec = run command (the rest of the line) using shell
# d, drop = remove commit
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
```

Our goal is to make the log
[atomic](https://en.wikipedia.org/wiki/Atomic_commit). In short, we want each
commit to contain distinct changes, that pass all tests, summarized by a simple
message.

Here's some notes on these commits:

- `4c7ead2 Test breaker`: this contributes to the solution, but it breaks tests. We want to keep it, but it can't stand on it's own as a single commit
- `pick 77aee1d Ooops`: this is useless
- `pick ea479cb Revert "Ooops"`: this reverts the previous commit
- `pick 3e36475 Test are passing here`: this is important!
- `pick e2af5ac Refactoring the previous commit`: same as above
- `pick 724d574 Good to merge!`: same as above

With this in mind, I'd edit this file as such:

```
pick 4c7ead2 Test breaker
d 77aee1d Ooops
d ea479cb Revert "Ooops"
s 3e36475 Test are passing here
s e2af5ac Refactoring the previous commit
s 724d574 Good to merge!
```

This will delete (`d`) our two useless commits, and squash (`s`) all four
useful commits together. An alternative to `squash` is `fixup`, `f`, which
squashes and picks the first commit message in the list to cover them all.
That's bad here, because the first commits' message (`Test breaker`) isn't very
good.

Save and close the file, and you'll be in a new commit message editing window,
with all four messages available:

```
# This is a combination of 4 commits.
# The first commit's message is:
Test breaker

# This is the 2nd commit message:

Test are passing here

# This is the 3rd commit message:

Refactoring the previous commit

# This is the 4th commit message:

Good to merge!

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Sun Jul 3 14:31:38 2016 -0500
#
# interactive rebase in progress; onto dd6bb12
# Last commands done (6 commands done):
#    s e2af5ac Refactoring the previous commit
#    s 724d574 Good to merge!
# No commands remaining.
# You are currently editing a commit while rebasing branch 'master' on 'dd6bb12'.
```

Time to write the squash message. If the issue at hand is issue #38, 'Back
button is broken', then I'd change the first line of this file to this:

```
Fixes the back button

Close #38

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
```

`Close #38` is a Github feature; when the branch is merged into the default
branch, Github issue #38 will be closed automatically.

Here's our revised history:

```
* 4e763d3 (HEAD -> issue/38) Fixes the back button
```

Much better! Force push it to Github, which we can do because we're on our own
feature branch:

```
$ git push -f
```

Now we have a clean pull request that's ready to merge.

### Fixing Mistakes

Is your rebase going wrong? Don't panic. You can abort the rebase with:

```
$ git rebase --abort
```

Even with the rebase is complete, you can always travel go back in time with
the [git
reflog](https://til.hashrocket.com/posts/9c3ea5a6f6-undo-a-git-mistake).

### Conclusion

Keeping the history of a big project tidy is a never-ending process. As an
open-source project maintainer, I'm always trying to make commits smaller,
better organized, more coherent. Do your favorite OSS maintainer and your own
projects a favor and do your work on a feature branch, and when finished,
squash your commits as logically as you can. It will make your code and the
project better.

Thanks for reading.
