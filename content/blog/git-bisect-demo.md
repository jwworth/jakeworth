---
title: 'Git Bisect Demo'
date: '2016-12-02T13:53:01-06:00'
---

I just built a new project, called 'Git Bisect Demo'. It's available
[here](https://github.com/jwworth/git_bisect_demo).

#### Purpose

> The purpose of this program is establish conditions where a Git Bisect would
> be a useful problem solving tool.

I built this application for next Tuesday's Git-themed Vim Chicago Meetup
([link](https://www.meetup.com/Vim-Chicago/events/234971975/)). I plan to
live-code a `git bisect` for the attendees.

#### Git Bisect

`git bisect` is an obscure yet essential command. `git bisect` conducts a binary search through your Git history to identify when
a change was introduced to the codebase, supported by automated or manual
tests.

As a consultant and OSS project maintainer, this command is essential.
It's the best answer to the question: 'when did this break?'. And also, 'who broke this?'.
Usually, the answer is: 'me'.

But bisect isn't about blaming or praising a certain commit. It's about isolating
problems, fixing them, and learning.

#### How I Built It

This was a puzzle: how do I reproduce a situation where something has failed,
but the reason is unknown? My solution was to build a mix project with a module called `HelloWorld` and test that
makes incomplete assertions about its behavior. If you've ever had code that
you thought did something, but that thing wasn't covered by a test, this is that.

For a bisect to be worthwhile, we need a decent size of commits. So, I piled on a
dozen refactor commits. While also breaking the untested functionality.

My final commit simulates the 'aha' moment when the team realizes that
something we thought worked does not, and smartly writes a failing test.

With these conditions, a bisect is possible. Commits where the test passes are
'good'.

#### Conclusion

In an upcoming post, I plan to review the presentation. Thanks for reading.