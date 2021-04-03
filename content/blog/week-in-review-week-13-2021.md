---
title: 'Week in Review: Week 13, 2021'
date: '2021-04-02T14:16:51-0400'
---

Here's my review for this week.

### Previous Action Items

None.

### What Went Well

My pair and I ended a client engagement we'd been on for almost a year. I feel
that we left our mostly-finished epic in the best place that we could.

Sometimes writing my newsletter comes easily, and sometimes it's challenging; this was
one of the challenging weeks. I am grateful to have a medium to communicate
with my 134 subscribers.

I worked for fourteen hours on my side project. Longer focused sessions are not
possible most weeks, but when they are, I get a _lot_ done.

I answered [this question](https://stackoverflow.com/a/66931145/2112512) about
ternary operators and ERB on Stack Overflow.

### What Could Have Gone Better

I overscheduled myself. Thursday and Friday were the payment, as I had
side-project work, mentorship, weekly review, and newsletter production &
editing all scheduled in that two-day period. I need to respect my calendar.

I've been wanting to read a technical book for a while, yet I've been
struggling. I picked _Code Complete_ because it's well-regarded, but I'm still
on the first or second chapter. Digital technical books are tough, because my
computer is so distracting.

### Forming Opinions

I've been using a new React directory structure for a few months, and loving
it. The idea is that components are treated like modules and organized by
route. Shared components live in `common/`. I found this after abandoning two
other patterns: a flat tree (doesn't scale), and directories organized by
component (hides code while imparting no meaning).

Here's a sample:

```
$ tree src/
├── App.tsx
├── NavLinks.tsx
├── UserLinks.tsx
├── index.css
├── index.tsx
├── logo.svg
├── modules
│   ├── common
│   │   └── components
│   │       ├── Avatar.tsx
│   │       ├── Button.tsx
│   │       ├── FlashMessage.tsx
│   ├── dashboard
│   │   └── components
│   │       └── Dashboard.tsx
│   ├── login
│   │   └── components
│   │       ├── Login.tsx
│   └── setup
│       └── components
│           └── Setup.tsx
└── utils
    ├── api.ts
    └── user.ts
```

And I import each component with full paths rather than relative. Why? I find
that I'll almost never need to update them because the structure above is so
simple and scalable, and with full paths I can `CTRL-X CTRL-L` complete future
imports because every component imports them the same way: Here's how I'd
import `Avatar` from anywhere, even a file in the same directory:

```jsx
import { Avatar } from 'modules/common/components/Avatar';
```

The longer I write React, the more have come to depend on fuzzy find. I've
mapped fuzzy finding files to `CTRL-P` in Vim. I love not having to hold my
project's directory structure in my head at all times.

### Action Items

- Try reading a physical technical book
- Stop double-booking myself

### Parting Thought

> "Cut 10%."
--Stephen King
