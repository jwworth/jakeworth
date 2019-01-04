---
title: 'Book Club: Factor'
date: '2016-01-21T21:13:57-06:00'
---

This week at Hashrocket Chicago, we had the second meeting of an internal company book club. Our focus was chapter two of [Seven More Languages in Seven Weeks](https://pragprog.com/book/7lang/seven-more-languages-in-seven-weeks), 'Factor'.

#### Factor Overview

> Factor is a concatenative, functional programming language that uses Reverse Polish notation to push data into and out of a stack.

This is a sample method, that returns a boolean based on whether or not a string is a palindrome:

```factor
! examples/strings.factor
USING: kernel sequences ;
IN: examples.strings

: palindrome? ( str -- boolean ) dup reverse = ;
```

The first line (below the comment) imports the necessary libraries; like the C family of languages we have to require the functionality we want up front. The second line tells Factor the namespace for our current file.

We define our method with `: palindrome?`. The parentheses tell Factor the 'stack effect'— this method takes a string off the stack and pushes a boolean back onto the stack. These variable names are arbitrary, but we try to convey intent.

`dup` pulls the last item off a stack (our string), and then we compare it to its `reverse` with `=`. Like other programming languages, this returns a boolean value if 'racecar' equals 'racecar' (`t`) or 'india' equals 'aidni' (`f`).

Factor is totally different from any of the languages I am very familiar with. This chapter helped me toward the goal of broadening my concept of what a programming language can be.

I like Factor because it's helping me better understand functional languages and Polish notation. I like that functions are first-class citizens, and that testing is something you learn early on.

I have mixed feelings about the often sparse documentation, the difficult error messages, and the fact that it's impossble to Google 'factor something' and get anything worthwhile.

I may pick up Factor again someday, and be glad for this week. But in the meantime, stuff that is trivial in Ruby is really hard (for me) to do in Factor, so I'll be moving on to languages that interest me more.

#### Output

I added some Factor links to my Resources project:

https://github.com/jwworth/resources#factor

The lack of free resources reflect the relative obscurity of the language (zero entries in 'Free Programming Books'), so I hope this helps somebody.

Overall this was a great exercise and a significant leap toward my [goals for 2016](http://www.jakeworth.com/my-annual-review-2015).

Next week: Elm!