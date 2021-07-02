---
title: 'Week in Review: Week 26, 2021'
date: '2021-07-02T10:19:17-0400'
---

Here's my weekly review.

### Previous Action Items

None; I haven't done a review in a while. It's good to be back.

### What Went Well

🎉 This week I shipped my first major feature for my team! Wish that I could
say more; I'll list the behaviors after announcements are made.

I did some styling this week using `button`, `cursor: not-allowed`, mixins, and
on-the-fly design choices, and it came naturally. I've often felt hamstrung in
this domain. Confidence and fluidity in CSS really does come with time.

Participated in multiple product demos for my side project. Lots of
information, ideas, and encouragement.

### What Could Have Gone Better

The deployment of said feature was stressful. Deployments should be completely
hands-off: merging, testing, pushing, migrations, and cleanup all automated.
When you're doing anything by hand, you're inviting stress and
[catastrophe](https://hashrocket.com/blog/posts/avoiding-code-catastrophes).

### Forming Opinions

**Foreign keys on a 'belongs to' relationship should not be nullable**. This is
my preference, shared in [recent Rails
versions](https://github.com/rails/rails/issues/37858).

**Foreign keys constraints go hand-in-hand with ActiveRecord associations**.
Without them orphaned records are virtually guaranteed.

**Tests should be WET, not DRY**. Here's a [great
summary](https://thoughtbot.com/blog/the-case-for-wet-tests) of this idea from
Thoughtbot. I believe that promoting variables out of their specs to the top of
the tests (`before`, `let`, `subject`) almost always lowers the readability and
extendibility of a test. Prefer local variables in the spec.

〰〰

**[TailwindCSS][tailwind] is a way to learn CSS**. The CSS confidence I've
recently gained I owe to Tailwind. To acknowledge the obvious: learning CSS via
an abstraction of CSS is Wrong™ and counter-intuitive. But, hear me out.

First, I think most would agree that CSS is an imperfect interface, and
Tailwind presents many CSS properties in ways that might better 'click' for
some people. Though I prefer them, Tailwind properties like `justify-between`,
representing Flexbox's `justify-content: space-between`, are not objectively
better. However, I think that seeing these concepts presented with different
verbal handles through the abstraction has reinforced and deepened my
command of them.

Second, styling HTML and composing stylesheets are two distinct skillsets, and
trying to master them simultaneously is hard. Tailwind decouples them via its
utility-first design.

Third, Tailwind reduces the Paradox of Choice, allowing me to maximize my
limited design opinions. Consider the
[colors](https://tailwindcss.com/docs/customizing-colors): unless you choose to
customize, Tailwind gives you a default palette. Same for margin, padding,
font: there are sane defaults that you can easily override if you care. I have
malleable design opinions and this helps me focus on shipping rather than
choosing between <span style="color: #8B008B">dark magenta</span> and <span style="color: #800080">purple</span>.

### Action Items

- Do a review on my next work week. Try to keep the habit consistent.

### Parting Thought

> "Real artists ship." --Steve Jobs

[tailwind]: https://tailwindcss.com/
