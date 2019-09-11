---
title: 'Intro to TDD'
date: '2019-09-11T00:00:00-06:00'
---

If someone wanted to learn TDD (Test Driven Development) in 2019, where should
they start?

First, there are a couple of different versions of TDD, and not everyone agrees
on what TDD is. There's outside-in or black-box TDD, red-green-refactor,
[TCR][tcr] (an alternative to TDD in the same family), BDD, and a lot more.
Each version is pretty interesting, but they can distract from understanding
the simple idea of TDD.

Here's my own definition of 'classic TDD':

1. Write a test that describes the nonexistent feature or bugfix.
1. Watch it fail.
1. Build some of the feature.
1. Run the test again. It may fail for a different reason. Let that drive your next step.
1. Repeat 3 & 4 until the test passes.
1. Commit your code.
1. Refactor (optional, encouraged).

Why do this? Here are a few arguments:

- You will write a test.
- You can guarantee that the test failed before implementing the feature. This
  helps ensure (but doesn't guarantee) that the test is testing the right
  thing.
- You can use the technique to get un-stuck.

Here's my playlist of resources that shaped my understanding of TDD.

- [Jim Weirich - Roman Numerals Kata][kata]: Master Rubyist Jim Weirich
  live-codes a Ruby TDD kata. This is where my concept of _naive
  implementation_ comes from, which I think is a foundation of TDD. I wrote
  about about it in greater detail [back in 2014][49].
- [Exercism][exercism]: Exercism is an open source project designed to help
  people get better at algorithms, and all exercises are test-driven. Because
  it's so counterintuitive, deliberate practice is the key to TDD. This is a
  great resource to get that practice.

If I've missed a resource you love, please let me know.

[kata]: https://www.youtube.com/watch?v=983zk0eqYLY
[tcr]: https://medium.com/@tdeniffel/tcr-test-commit-revert-a-test-alternative-to-tdd-6e6b03c22bec
[exercism]: https://exercism.io/ 
[49]: /week-49/
