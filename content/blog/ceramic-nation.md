---
title: 'Ceramic Nation'
date: '2015-09-11T16:18:51-05:00'
---

Last night I built a Markov-powered generated novel, called *Ceramic Nation*.

It's wrapped as a robot named Ellis Champlin, who is diligently composing one chapter a day based on a corpus of classic public-domain novels and philosophy texts.

Here is the site:

http://novel.herokuapp.com

And the source code:

https://github.com/jwworth/novel

This was an exercise in rapidly building an MVP on a couch, CSS, RSpec integration testing, Dev Ops-ing, and Markov-chaining. I'm curious what this bot will produce as the days go on, and am hoping for greatness. I plan to refine the logic slowly to produce better and better chapters, and rotate the source documents as I am inspired by new books and ideas.

A side goal is to break out the MarkovChain class into its own gem. That is a task I find myself repeating on side projects, and it would be nice to encapsulate the logic and release it to the open-source community.
