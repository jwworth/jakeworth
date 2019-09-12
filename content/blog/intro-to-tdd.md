---
title: 'Intro to TDD'
date: '2019-09-11T00:00:00-06:00'
---

If one wanted to learn Test-Driven Development, AKA TDD, in 2019, where should
they start?

It's worth mentioning first that there are different versions of TDD. There's
outside-in or black-box TDD, red-green-refactor, BDD, ATDD, and more. They're
all in the same family, but they differ. Each version has a purpose, but they
can distract from understanding the core principles they all share.

### My Definition

TDD is defined by actions. Here's my take on classic TDD:

1. Write an automated test that describes the nonexistent feature or bugfix.
1. Run and watch it fail.
1. Build as much of the feature as you can.
1. Run the test again. It may fail for a different reason. Let that drive your next step.
1. Repeat 3 & 4 until the test passes.
1. Commit your code.
1. Refactor (optional, encouraged).
1. Add more tests.

### Why Use TDD

TDD is much harder than just writing code. So why bother? Here are my arguments:

- You will write a test. In languages like Ruby this matters a lot.
- You can guarantee that the test failed before implementing the feature. This
  helps ensure, but doesn't guarantee, that the test is testing the right
  thing.
- You can use the technique to get unstuck. I wrote about about this in greater
  detail [back in 2014][49].

### Playlist

Here's my playlist of resources that shaped my understanding of TDD.

- [Test-driven Development - Wikipedia](https://en.wikipedia.org/wiki/Test-driven_development): pretty
  thorough overview.
- [Roman Numerals Kata - Jim Weirich][kata]: Master Rubyist Jim Weirich
  live-codes a Ruby programming puzzle using TDD. This is where my concept of _naive
  implementation_ comes from.
  - [Exercism][exercism]: Exercism is an open source project designed to help
  people get better at algorithms, and all exercises are test-driven. Because
  it's initially so counterintuitive, deliberate practice is the key to TDD. This is a
  great resource to get that practice.
- _Test Driven Development: By Example_ by Kent Beck. I'd be remiss if I didn't
  include this book, which is credited with inventing or rediscovering TDD. I've
  never read it.

A caveat: there's writing out there saying TDD is bad, dead, or impossible to
do. Here are a few such counterarguments:

- [BDD/TDD Criticized - Elixir Forum](https://elixirforum.com/t/bdd-tdd-criticized/759/72)
- [Problems with TDD - Andrew Dalke Scientific AB](http://www.dalkescientific.com/writings/diary/archive/2009/12/29/problems_with_tdd.html)
- [TDD is dead. Long live testing - DHH](https://dhh.dk/2014/tdd-is-dead-long-live-testing.html)

In my opinion, TDD is a technique like whiteboarding or retrospectives: helpful
in some situations and a hindrance in others. Learn how to do TDD correctly,
then make your own decision.


If I've missed a resource you love, please let me know.

[kata]: https://www.youtube.com/watch?v=983zk0eqYLY
[tcr]: https://medium.com/@tdeniffel/tcr-test-commit-revert-a-test-alternative-to-tdd-6e6b03c22bec
[exercism]: https://exercism.io/ 
[49]: /week-49/
