---
title: 'Principles of the Agile Manifesto: #1'
date: '2014-06-17T17:32:42-05:00'
---

I've been learning about Agile software development this year.

Agile is a software development methodology that was defined in 2001 with the document <a href='http://agilemanifesto.org/'>The Agile Manifesto</a>.  Among other contributions, Agile offers a set of twelve principles to guide software development teams in the twenty-first century.

Not every team is Agile or has a full-time Agile Coach, but the principles defined in The Agile Manifesto have had a big impact on the entire technology industry.  They are worth considering even if your team doesn't adopt them all.

I'd like to look at each principle and reflect on how I've tried to apply it to my work.

The first principle of Agile is:
<em>
'Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.'
</em>
Breaking this sentence down:
<em>
'Our highest priority is to satisfy the customer...'
</em>
Meeting this requirement means understanding who my customer is.  For a social networking startup, the easy answer would be our users.  But I don't think it's that simple.

I work for many stakeholders.  My boss is a customer, because he depends on my code to be functional and delivered on schedule.  My coworkers are customers, because their success depends on a reliable product.  Our supporters are customers, because they have put their assets and reputations forward in support of what we do.

All of these are customers, and they all need to be satisfied as my highest priority.

Reading on:
<em>
'...through early and continuous delivery...'
</em>
This is one of the hardest parts of Agile for me, and I'm still figuring it out.  Continuous delivery is the idea that a lot of small, incremental deployments are better than one giant deployment, because it's easier to fix mistakes and also pivot when the changes between each release are small.

I recently relearned the value of early and continuous delivery when I waited until late in a deployment cycle to make the first push to our internal testing environment.  The product wasn't production-ready, and I didn't want to send it to testing, where it would trigger a stream of bug reports.  So I waited, continuing to fix bugs.

The cost of this choice was that when I finally did deploy for testing, we dropped a huge list of changes onto the server, some of which needed to be exhaustively tested.  My quest for perfection (which does not exist) was only adding risk into the release.  A better solution would have been to deploy for testing earlier, let the team find the bugs I knew about, and deal with them when they came.  I could have kept working, and given them the chance to find other bugs I wasn't already tracking.

Reading on:
<em>
'...of valuable software.'
</em>
What is valuable software?  That's not an easy question, because value is relative.  To me, software is valuable when it advances the objectives of the business.  Anything built for internal use, such as a custom chat service for employees, must be justifiable in the context of the company's larger business objectives.  For companies where the team is remote (like Github), a custom chat service might be a crucial tool.  If a program is functional and advances the business, then I think it is valuable software.

<a href='http://agilemanifesto.org/'>The Agile Manifesto</a>