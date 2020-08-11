---
title: Don't Build Every Feature
date: 2017-06-19T19:55:21-05:00
---

> Mold clay to form a bowl; it is the empty space which makes the bowl useful.
> –Tao Te Ching

There's a detail about [Today I Learned](https://til.hashrocket.com) some might
find unusual: we never added a way to delete posts from the site. Check out the
source code, and you'll see that you cannot delete posts through the user
interface. I've even toyed with the idea of preventing deletes at the data
layer.

Why ignore a basic CRUD feature? We didn't ignore it. It was intentional.

I've thought about this decision a lot over the last two years. It's lasted
over many pull requests, issues, forks, and discussions. I addressed it
directly in a [Github issue](https://github.com/hashrocket/hr-til/issues/31)
not long ago.

Preventing deletes was a hack to make Today I Learned feel permanent. If the
goal of the site was to show the world what we at Hashrocket are learning, why
allow people to self-censor that journey? The temptation to obsess over your
output until it's a flawless diamond of competence is too great, especially
among high performing programmers.

As a Hashrocket apprentice, I was certain that my pride would push me to go
back and delete my old posts. To present a facade to the world that I arrived
fully-formed where I am today, without ever learning something trivial the hard
way, and building on that.

There's too much magic in software. I am proud that our site exposes the
winding journeys we all take.

Don't try to build every feature you can imagine, or every feature other
applications have. Sometimes an omitted ability can refine the way people think
about your product. The things that are missing can be more powerful than all
the things that are already there.
