---
title: 'Week in Review: Week 12, 2021'
date: '2021-03-27T00:00:00-06:00'
---

Here's my weekly review for this week.

> "Regardless of what we discover, we understand and truly believe that
> everyone (especially Jake 🤷‍♂️) did the best job they could, given what they knew
> at the time, their skills and abilities, the resources available, and the
> situation at hand."
> --Norm Kerth

### Previous Action Items

- Resolve to stick with a feature to the end, knowing I can make changes or
refactor later.

This helped. I have budgeted a small window of time for side-project coding,
so I have to make it count. That means accepting a different output than I can
produce in 40 hours pairing with another senior dev. Keeping this in mind helps
me fight perfectionism.

### What Went Well

I published an issue of my newsletter: ["Relay Hooks, Noob Reflections, and
State"][newsletter]. Here are my newsletters stats from Revue:

> "Of 134 subscribers, 133 emails were delivered. Of them 38 opened your
newsletter. Which is 28% of the recipients. 6 subscribers clicked on a link in
the newsletter, that's 15% of the recipients that opened your newsletter."

As a benchmark, from
[Mailchimp](https://mailchimp.com/resources/email-marketing-benchmarks/): for
computers and electronics newsletters, the average open rate is 19.29% and the
average click rate is 2.08%. The open rate across all industries is 21.33% and
the click rate all industries is 2.62%. So, my open rate is ~9% higher than the
industry average, and my click rate is ~13% higher (about 5x).

My conclusion is that I'm building a newsletter people want to read. My hope
is that once I get to a certain scale, let's call it one thousand subscribers,
this thing could blow up. I'm having fun and learning either way.

I invested about six hours in my side project this week.

### What Could Have Gone Better

I spent too long exploring an API by pasting cURL commands from Vim. There's
some threshold where you need to switch to a tool like Postman, which lets you
add query params and headers via a UI, save queries, chain queries, etc., and I
blew right past that threshold this week. I neglect to sharpen the saw when I'm
working alone.

### Forming Opinions

I'm coming out against default imports in JavaScript after reading ["Default is
Bad"](https://basarat.gitbook.io/typescript/main-1/defaultisbad). Like many of
my opinions of late, I think the status quo is fine but the alternative is just
a bit better. Here are some imports from my side-project, using this technique:

```javascript
import { Dashboard } from 'Dashboard';
import { FlashMessage } from 'FlashMessage';
import { Header } from 'Header';
```

The conceit that each file has a default that cleanly exposes it to the world
is starting to really break down for me.

I'm working on an idea: people problems on a consulting client are why you got
the work at all, and you should embrace them. If you believe that most
technical problems are people problems, then every company who hires a
consultancy has people problems. Poor communication, misaligned expectations,
clashing personalities. Those people problems are why you're getting paid.

As I churn and learn on my side project, I'm continuing to remind myself that
anything worth building is hard. You will encounter what seem like dead ends,
and each one is a sign that you _might_ be doing something worthwhile. The pain
of [schlepping](http://www.paulgraham.com/schlep.html) compels me.

I enjoyed this short summary of [Engineering Management
Tricks](https://gist.github.com/mmcgrana/3dcd36547453ecf25c17); thanks Josh
Branchaud.

### Action Items

None this week.

### Parting Thought

> "Focus on the process, not luck. Did I play correctly? Everything else is
> just BS in our heads. Thinking that way won't get you anywhere. You know the
> randomness of it but it doesn't help to think about it. You want to make sure
> you're not the person in the poker room saying, 'Can you believe what
> happened?' That's the other people." --Erik Seidel, from 'The Biggest Bluff'

[newsletter]: https://www.getrevue.co/profile/react-explained/issues/relay-hooks-noob-reflections-and-state-440451
