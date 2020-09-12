---
title: 'Book Club: Lua'
date: '2016-01-09T19:26:27-06:00'
---

This week at Hashrocket Chicago we had the first meeting of an internal company book club.

This was something I'd been interested in for a while, beginning with the [Code Club](/code-club) I was a part of a few years ago.

I threw the idea out to some coworkers as a project for the new year, and the response was positive. Launching it during January had a beneficial side-effect of coinciding with a lot of people's New Year's resolutions. Surveying seven interesting or trending languages is a good exercise for programmers of every level.

The first week we read chapter one of [Seven More Languages in Seven Weeks](https://pragprog.com/book/7lang/seven-more-languages-in-seven-weeks), 'Lua'.

### Preparation

The setup steps I took to prepare for this meeting where:

* Give people a lot of notice
* Purchase the physical book (which I prefer)
* Purchase the e-book for quickly searching the text
* Schedule a time that works for the most amount of people (Thursday lunch)
* Read the first chapter and attempt some of the extra credit challenges
* Compile a list of conversation-starting questions

It was a fun meeting, and I learned a lot.

### Lua Overview

Lua has some cool features: it's a scripting language that works well with lower-level languages like C and C++, it's already installed on some Unix systems, and it has a REPL. Functions are first-class values, they accept flexible arguments, and they can return multiple values.

Lua is similar to Ruby in many ways, but different in others. For instance, all variables are global by default. Also, Lua's data structure is called a table, and a table can have both array values and key-value pairs. Lua also has metatables, which is a way to 'hook into' method calls and alter their default behavior. Lua includes prototypical inheritance and coroutines.

I like that Lua can be used to write expressive APIs. I like that it is portable and approachable.

I have mixed feelings about the fact that the arrays are one-based, and that you have to build a lot of things from scratch. I didn't like that printing out a table in the REPL appears to return the memory address:

```lua
> foo = { baz = "bar" }
> print(foo)
table: 0x7fd538609c00
```

During this process I learned that Hashrocket has hosted book clubs before. It's cool to be a part of a legacy:

https://www.youtube.com/watch?v=omp719GCmkU

### Output

I wrote some Lua code this week, starting with solving an office-wide programming challenge we've been discussing:

https://gist.github.com/jwworth/5b9d80f514a15efc780d

Mine was not the tersest solution (Ruby won the day there, amongst Lua, Clojure, and Elm), but it works. I also completed the Day 3 project, writing a program that makes MIDI music with C++ and Lua:

https://github.com/jwworth/lua-music

Finally, added some resources, all of which helped me get an initial grasp on the language:

https://github.com/jwworth/resources#lua

We are taking a second week to explore Lua, and I hope to write some more complex programs during that time. Overall this was a great exercise, a fun diversion for the people who participated, and a step toward my [goals for 2016](/my-annual-review-2015).
