---
title: 'Week 48'
date: '2014-11-25T21:41:02-06:00'
---

This week I learned a lot.

I picked up some new (old) slang, with the term 'bare metal'.  Here is a definition from the awesome <a href='http://www.catb.org/jargon/oldversions/jarg262.txt'>Jargon File</a>:
<em>
bare metal: n. 1. New computer hardware, unadorned with such snares and delusions as an {operating system}, {HLL}, or even assembler.  Commonly in the phrase `programming on the bare metal', which refers to the arduous work of {bit bashing} needed to create these basic tools for a new machine.  Real bare-metal programming involves things like building boot proms and BIOS chips, implementing basic monitors used to test device drivers, and writing the assemblers that will be used to write the compiler back ends that will give the new machine a real development environment.

2. The same phrase is also used to describe a style of {hand-hacking} that relies on bit-level peculiarities of a particular hardware design, esp. tricks for speed and space optimization that rely on crocks such as overlapping opcodes (or, as in the famous case described in Appendix A, interleaving of opcodes on a magnetic drum to minimize fetch delays due to the device's rotational latency).  This sort of thing has become less common as the relative costs of programming time and machine resources have changed, but is still found in heavily constrained environments like industrial embedded systems.  See {real programmer}.
</em>
There is an aura of legitimacy that surrounds bare metal programming.  Perhaps it is nostalgia for a bygone era, or respect for the challenge.  I respect it.  On the other hand, my work is built on many abstractions, and I appreciate that some of those hard problems have already been solved.

Another idea I've been exploring is Git commit messages.  There is no standard for these messages; they can be long or short, conservative in tone or filled with emojis.  That freedom of expression is part of the art of programming, but working in a collaborative environment, I want my messages to be as useful as the code they summarize.  So I've been trying to answer the following questions with my messages:

* What was the motivation for this change?
* What problem does it solve?
* If I am not also adding a test, why not?  (I want to challenge whatever assumption led me to not add a test)

Often these questions cannot be answered in one sentence; when that happens it's time to break into a second line.  A lot of programs (including Github) wrap messages before 80 characters, so if you want an entire message shown in as many situations as possible, be brief.

Right now a typical commit message from me looks something like this:

```
Fixed everything that was broken. # 33 characters

Fixed all of the code and added many tests.  Took out a test
that looked cool but didn't test anything.  All of the things
work now!
```

A third thing I learned was the Postgres method <code>coalesce</code>.  From the <a href='http://www.postgresql.org/docs/8.1/static/functions-conditional.html'>Postgres 8.1 Docs</a>:
<em>
The COALESCE function returns the first of its arguments that is not null. Null is returned only if all arguments are null. It is often used to substitute a default value for null values when data is retrieved for display...</em>

This is a SQL-standard method that is useful during data migrations.  Suppose you are copying a table from one database to another, but some of the columns in the first table have null values.  This is fine, unless the method used to execute the migration is <code>STRICT</code>.  When a method is <code>STRICT</code>, the strictness test checks that the variadic array, as a whole, is non-null.

In other words, when such a method receives a null value, it returns null, dumping all the other data.  This is where <code>coalesce</code> is useful.  For a column <code>name</code> in table <code>t</code>with some null values, use <code>coalesce</code>:

```
new_name = coalesce(t.name, 1)
```

This will assign <code>new_name</code> the value <code>t.name</code> unless it is null, in which case it will be assigned <code>1</code>.  This satisfies the strictness check, and allows all the other on-null data to be returned.

Respect the bare metal!
