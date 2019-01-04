---
title: 'Examine Your Assumptions'
date: '2016-12-04T22:49:07-06:00'
---

> Pausing to verbalize, examine, and reject faulty assumptions should be one of the first steps in any debugging process.

One feature of an experienced developer is the lack of assumptions brought to any problem.

[This question]( https://stackoverflow.com/questions/40966027/controller-test-undefined-method-env-for-nilnilclass
) has prompted this post (*Note: This Stack Overflow question has been altered significantly since I first published this post.*). My intention is not to criticize, but rather, point out a mistake that's all too easy to make.

The user has an included library and an error message. They state: 'I guess that's because of Devise::Test::ControllerHelpers'. I was the first responder to the question, and the first sentence of my response sums up the best Socratic question I can muster: 'What is leading you to the conclusion that `Devise::Test::ControllerHelpers` is related?'

Based on the information provided, there's no evidence that the included library is related to this bug. It's a total guess. It's the type of moon-shot I would have taken as a junior programmer. That said, isn't a guess better than no guess?

Yes, in a sense; proactivity is good. You've gotta try something.

But also no, because it ignores a much more important artifact: the error message. The posted error message does not mention Devise at all.

We now have an [Occam's razor](https://en.wikipedia.org/wiki/Occam%27s_razor) scenario. Which is probably causing the bug?

1. Including a tested, popular open source library, and using one of its most common methods
2. An error somewhere in the user's test code, or their controller or application code (which was not posted)

Knowing nothing about the user, to me, I suspect the answer is #2. Bugs exist in every open source library, but what are the chances such a simple test exposed one?

Assumptions are hazardous, because they can lead you down long and pointless roads of frustration. A huge part of successful debugging is to examine your assumptions.

In pair programming, this is easy to do. When my pair states an assumption, often I'll respond with: 'Why is that?'. I'm curious, and trying to push our reasoning forward. If the logic isn't apparent to me, it might be because I need to learn something. Or, it might be that the logic isn't fully formed. Explaining it out loud is a surefire method to find out.

If you don't have a pair, a [rubber duck](https://en.wikipedia.org/wiki/Rubber_duck_debugging) will suffice. The words are the most important thing.

Anytime I'm stuck my first instinct is to examine my assumptions:

- 'This application is always slow'... can we benchmark it?
- 'This Ruby version is old'... how old? Is it a supported version?
- 'This library is breaking my tests'... are you sure? If we remove it, does it still fail? What if we include it, but use a different method? Does it still break?

The longer I program, the dumber my initial questions appear. Taking anything for granted in the beginning— tooling, running processes, well-written code, valid tests— is a mistake.

Pausing to verbalize, examine, and reject faulty assumptions should be one of the first steps in any debugging process. Follow this advice and spare yourself lots of 'learning the hard way'.