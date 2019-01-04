---
title: 'Work Small'
date: '2017-06-10T19:20:00-05:00'
---

> Write programs that do one thing and do it well. – The Unix Philosophy

I love small commits. When I commit a change, I like a short message. The code should only do what's described by that message, in one or two migrations, each of which can be rolled back. The changes should touch a limited number of files, and leave a green test suite. Everything should be reversible without side effects.

Whenever I'm pair programming, I'm quick to say: "Can we commit this?". I want to commit as soon as the tests are green, as soon as I have the slightest inkling that refactorization or optimization is imminent, the moment we let our attention drift, the second anything other than the current behavior is up for discussion.

I call this philosophy 'work small'.

Obsess about the task at hand. Measure and remeasure, discuss edge cases, ponder if you are using the right tools, and sharpen them. Pick the smallest part of the problem you can solve and solve it. Don't stop until it's perfect. When it's perfect, sand the splinters away, cast it in lacquer, put it in a glass case.

A few great programmers I've met can carry entire wings of an app in their heads. They are happiest when the Git log is dirty, the Vim buffers are full of files, and they are walking above the ground on a tightrope with no harness. They know what they want and they are driving toward it with total focus. They finish their thought process with a complex, multi-step process, divvying up hours of work into a series of commits.

I am not such a programmer.

Pausing to think, to commit to your work, to ship what you have, to deliver where you are, is the heart of Agile. I admire those programmers– they often change the world. But they take a risk, too: that their work will never be finished, that it's irreversible, that future maintainers will not understand their thought process and delete or hack apart their code.

As an open-source project maintainer, small is everything. Your commits tell the story. I'll take 'add the library, add a column to the table, implement the form, and optimize the query' over something more terse but less expository every time. I understand each step, and can revert them someday. We can always rebase the pull request once the changes are agreed upon.

Work small!