---
title: 'Work Small'
date: '2017-06-10T19:20:00-05:00'
---

> Write programs that do one thing and do it well. –The Unix Philosophy

I believe in working small.

I love small Git commits and pull requests. When I commit, I like a short
message. The code should only do what's described by that message, in limited
migrations, each of which can be rolled back. The changes should touch a
limited number of files, and leave a green test suite. Everything should be
reversible without side effects.

Anyone who has paired with me knows: when I'm pair programming, I'm quick to
say: "Can we commit this now?" I want to commit as soon as the tests are green,
as soon as I have an inkling that refactoring or optimization is imminent, the
moment we let our attention drift, the second anything other than the current
feature is up for discussion.

I call this philosophy **Work Small**.

### What is Working Small?

Working small: obsess about the small task at hand. Measure and remeasure,
discuss edge cases, ponder if you are using the right tools, sharpen them. Pick
the smallest part of the problem you can solve and solve it. Don't stop until
it's perfect. When it's perfect, sand the splinters away, cast it in lacquer,
put it on display.

A handful of great programmers I've met can carry entire wings of a codebase in
their heads. They are happiest when their Git log is dirty, their Vim buffers
are full, and they are walking high above the ground on a tightrope with no
harness. They know what they want and they are driving toward it with total
focus. They finish their thought process with a complex commit process,
divvying up hours of work into a series of patches.

That's not how I work, or how I think most beginners should try to work.
Pausing to think, to commit, to ship what you have, to deliver where you are,
is the heart of Agile. Doing otherwise takes a risk: that work will never be
finished, that it's irreversible, that future maintainers will not understand
your thought process and delete or hack apart your code.

Don't want to work small? No problem; go ahead and open a pull request that
changes forty files, has six commits that break the build, and migrates the
database five times. It takes a brave soul to read that pull request, and an even
braver one to challenge or approve it. You'll most likely get silence or a
tentative 'looks good to me.' Merge and deploy it in on a Friday if you want an
excuse to cancel your weekend plans.

As an OSS maintainer, small is everything. Your commits tell a story. If that
story is a mess, take the time to clean it up before asking someone else to
load it into their head, too. I'll take four tight commit messages over twenty
'WIP' every time. I understand each step, and can revert them someday. We can
always squash the pull request once everyone approves the change.

Work small.
