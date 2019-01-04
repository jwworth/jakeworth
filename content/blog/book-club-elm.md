---
title: 'Book Club: Elm'
date: '2016-02-07T10:05:09-06:00'
---

This week at Hashrocket Chicago we had the third meeting of an internal company book club. Our focus was chapter three of [Seven More Languages in Seven Weeks](https://pragprog.com/book/7lang/seven-more-languages-in-seven-weeks), 'Elm'.

#### Elm Overview

Elm is a functional programming language that uses the functional reactive style to build graphical users interfaces. It seeks to eliminate runtime exceptions with a strong precompile step. Elm claims a clean syntax, fast rendering, libraries with guarantees like semantic versioning, and smooth JavaScript interop.

Here's some Elm I wrote while reading the first chapter:

```elm
-- Use currying to express 6 * 8

> multiply x y = x * y
> multiplySix = (multiply 6)
-- <function> : number -> number
> multiplySix 8
-- 48 : number
```

Welcome to the bleeding edge.

Elm is pretty new. Almost every code example in the book had deprecated syntax. Sweeping API changes like this are the hallmark of an immature language, and if I didn't also have the newer eBook, I would not have been able to finish the chapter.

Elm has some cool features: polymorphism, currying (as seen in the example above), and functions that go can both ways. But the killer feature of Elm is signals— all events are streamlined into signals, rescuing you from the so-called 'Callback Hell' of JavaScript.

I like that Elm has strong typing, offers a more reactive way to handle user input, and seems like a growing language with a passionate community. I watched a 30 minute talk with the creator (included in the links below), and was impressed with his vision and thoughtfulness.

As a newbie to the ML-family of languages, I found Elm hard to learn. I would dispute the 'easy path from novice to expert' idea swirling around Elm. Perhaps they are suggesting that, like Go, some of the concepts are abstract and pretty difficult, but the API itself is small. Once you get past the theory, the tools are concise and intuitive?

Another major question is whether the language will gain the critical mass it needs to survive in today's harsh JavaScript ecosystem. This is a concern that matters when you are investing personal time in a framework or language.

#### Output

I kept a big list of the links I found useful this week, available here: https://github.com/jwworth/resources#elm.

#### Final Thoughts

I think Elm may end up changing the world, even if Elm itself isn't the final iteration. Some of the concepts it represents, like functional and reactive programming, signals, and the reduction of runtime exceptions, are of great interest to me. They are where I think the web is headed. In the meantime, I found Elm an interesting diversion, and a welcome challenge to my conventional ideas of a language.

Next week: Elixir!
