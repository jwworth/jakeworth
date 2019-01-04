---
title: 'Week 51'
date: '2014-12-19T15:36:09-06:00'
---

It's getting cold in Chicago.  Luckily, programming is an indoor activity.

This week I wrote my first proper Ruby gem, then wrote two more.  The process was fun and I learned a lot.

### Runge

My first gem is <a href='https://github.com/jwworth/runge'>Runge</a>.  The name is a mashup of the words 'Ruby' and 'munge'.  Here is a definition of 'munge' from <a href='http://www.catb.org/jargon/html/index.html'>The Jargon File</a>:
<em>
munge: /muhnj/, vt.
1. [derogatory] To imperfectly transform information.
. . .
</em>
My definition of munging is smashing data until useless, while maintaining its basic look and feel.  There are many applications for a data munge.

Runge performs a simple munge using Ruby.  The functionality is monkeypatched into the <code>String</code> class:

```ruby
self.split('').each_with_index { |x, i| x.succ! if i.odd? }.join
```

For each word in the user input string, this increments every other letter by one, turning a word like 'whatever' into 'wiauewes'.  One iteration smashes your string.

I'd like to add an 'unmunge' function so the gem could be used for hobby crypto.  That is tougher than it sounds, because Ruby doesn't have an inverse method to <code>succ</code> for strings.  <code>pred</code> is the equivalent for integers but it doesn't work on strings.

Building Runge taught me how to build a test-driven gem, polish it, and publish it to Rubygems.

### Three Ideas

Next came <a href='https://github.com/jwworth/three-ideas'>Three-Ideas</a>.  Three Ideas generates three random programming project ideas.  Some sample output:

```
$ three-ideas
Video software written in Fortress
Utility software written in IMP
Word processors written in C
```

The ideas are built from scraping Wikipedia for software types and programming languages.  Most are ridiculous.

### Secret Santa

Remember Secret Santa?  You pass around a hat with everybody's name inside, each person draws a name, and then you purchase a gift for the person whose name you drew.  It's fun, but the setup is slow, because somebody always draws themselves, or two people draw each other, which isn't fun.

<a href='https://github.com/jwworth/secret_santa'>Secret Santa</a> solves this.  Run it, enter names, and you will get a random list and an image file.  Nobody can draw themselves, and no two people can draw each other.

Any time you need a round-robin assignment you can use Secret Santa.  I will be using it in 2015.

### Command Chaining

Here is a cool trick.  With most shells you can run this:

```
$ rake && git push && say 'upload complete'
````

Each command runs, in order, unless the previous command fails.  It's awesome for common groups of commands like those above, provided you expect them each to pass.

Publishing gems with Rubygems is a joy.  Thank you to Rubygems.org, the maintainers of The Jargon File, Graphviz, and Wikipedia, and all my peers and mentors.
