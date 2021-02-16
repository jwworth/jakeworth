---
title: 'My Mental Models'
date: '2021-02-10T00:00:00-06:00'
---

A mental model is an explanation of someone's thought process about how
something works. Because everything we do as programmers, except flipping
physical bits, is abstract, mental models are one of a programmer's most
cherished possessions.

I enjoy reading my old blog posts and recognizing how my mental models have
evolved. Here are a few of my current models, and how I'd describe them to a
colleague.

### Models

**Anchoring.** The first number spoken aloud in a story pointing sets the
[Overton window][overton]. If you want accurate pointing informed by everyone
in the room, consider [planning poker][poker], or abandon pointing as a metric.

**Code is for humans.** One of the primary consumers of your software is other
programmers. Prioritize readability, usability, accessibility, and a general
boringness in your codebase over premature optimization and cleverness. If you
want human feedback, deliver your code in small, focused increments that humans
can conceptualize.

**Databases matter.** Invest in the integrity of the data layer. The database
will likely outlive every single other part of your application. The database
is the source of truth.

**Dunning-Kruger Effect.** People with low ability at a task tend to
overestimate their ability. Often contributes to the [Trap of the Premature
Senior][trap]. The biggest leap forward I experienced as a programmer was
meeting a Vim-using Hashrocket consultant and realizing how many levels of the
programming game exist.

**Fuel, Air, or Spark.** When an internal combustion engine isn't starting, one
of three ingredients is absent: fuel, air, or spark. Before you look into any
of them, inspect the final output of each. If you jump right to a subsystem,
you'll risk troubleshooting parts of the engine that are working.

[**The Iceberg Secret.**][iceberg] Programmers know that what we can see on a
web page can represent a small fraction or none of the true functionality,
completeness, and complexity of the application. People who don't write code
don't automatically know that.

**The Mythical Man Month.** Sometimes two programmers move faster toward the
same goal than four, or six.

**Peter Principle.** Skills in one job do not necessarily translate to another.
Management isn't for everyone and organizations can support long-term
individual contributors.

**Prioritization.** Once you can deliver consistent quality in your
programming, there is no concept of 'faster.' You can only change your
prioritization. Focus on the user and eliminate nonessential work.

[**Schlep Blindness.**][schlep] Our brains prevent us from even seeing
difficult problems. The antidote is to think about problems you'd like someone
else to solve.

**Specialization**. Software is too complex for any person to be an expert at
every layer. With hard work, you can be competent at all of it and an expert in
a few domains, i.e. the 'T-shaped' developer.

**Survivorship Bias.** A hiring process that consistently delivers good people
isn't necessarily good; you must consider good people who did not make it
through the process.

**Redundancy.** Also know as 'belt and suspenders' or 'two is one, one is
none': avoid single points of failure. If users need emails, require them in
the HTML, the JavaScript form, the API, and the database.

### Conclusion

Thanks for reading. I'll be updating and augmenting this post in the future.

[iceberg]: https://www.joelonsoftware.com/2002/02/13/the-iceberg-secret-revealed/
[overton]: https://en.wikipedia.org/wiki/Overton_window
[poker]: https://hashrocket.com/blog/posts/planning-poker-speed-mode
[schlep]: http://paulgraham.com/schlep.html
[trap]: https://charity.wtf/2020/11/01/questionable-advice-the-trap-of-the-premature-senior/
