---
title: 'Blog Redesign Part 2'
date: '2015-10-29T23:55:02-05:00'
---

Tonight I overhauled the look and feel of my blog (again).

This blog started as a Wordpress app with a generic theme. During RailsConf 2015 I ported it to Rails. I wrote the frontend myself by hand, something we developers don't do much at Hashrocket.

That was fun, and I learned a ton, but it hasn't scaled. My vanilla CSS and JavaScript didn't grow with my sense of style and burgeoning content.

**Time to [Bootstrap](http://getbootstrap.com).**

Like every technological decision, Bootstrap is a trade-off. One downside is that it's opinionated about design, such that it's often easy to recognize a 'Bootstrap site' (present company included). It's also probably way too much functionality for some of the projects that use it.

But it offers a lot of polish in a short amount of time. It's mobile-first, something that matters to me. It has a lot of out-of-the-box styles for markdown content, like inline and block code, an important feature for a programmer's blog. Being fluent in a CSS framework is also an end in itself for me-- if I can't truly design a UI, at least I can hack something together.

As always, this blog's code is open source. Welcome to the new jakeworth.com, a project I hope to continue to improve and modernize.