---
title: 'Week in Review: Week 11, 2021'
date: '2021-03-20T00:00:00-06:00'
---

I've decided to resume the 'weekly review' practice that was a part of this
blog for some weeks back in 2015. My goal will be to talk about what I did
during the week, reflect, and improve via action.

This week I'll be following the weekly retro format: what went well, what could
have gone better with an emphasis on myself, and action items I plan
to take.

### Prime Directive

It wouldn't be a retro with the Retrospective Prime Directive, so here's my
weekly-review adaptation:

> "Regardless of what we discover, we understand and truly believe that
> everyone (including Jake 🤷‍♂️) did the best job they could, given what they knew
> at the time, their skills and abilities, the resources available, and the
> situation at hand."
> –Norm Kerth

### What Went Well

This week, I delivered many features to my client. My pair and I cranked out
many small, well-tested Rails pull requests, in something like a flow state.
Rails and RSpec is still an amazing environment to write code.

TypeScript is the way. It's so fun and delightfully boring to write React code
in TypeScript. I expect the compiler errors and I don't expect (and almost
never see) the runtime errors.

I'm getting opinionated about JavaScript imports. Below is the format my team
has followed for almost a year. I think any convention is better than no
convention.

```js
// library imports, alphabetized
import * as React from 'react';

// our component imports, alphabetized
import Header from 'modules/common/components/Header'

// utility functions, internal and external, alphabetized
import { get } from 'utils/api';
```

I spent five hours on my side project this week.

### What Could Have Gone Better

I have a bad habit when working alone: I get about halfway through a feature,
start second-guessing my work, and start over. I do this because I've absorbed
the [Code Retreat][code-retreat] ethos of throwing away first drafts.  That
practice has merit, especially when learning a new technique or trying to
deliberately get better. But it often means I throw away a lot of working code
and end up reimplementing the same feature in an almost identical way.

### Action Items

- Resolve to stick with a feature to the end, knowing I can make changes or refactor later.

### Parting Thought

> "Do not covet your ideas. Give away everything you know and more will come back
> to you."
> –Paul Arden

[code-retreat]: https://www.coderetreat.org/
