---
title: 'Comprehensive Instructions'
date: '2018-07-09T13:34:28-05:00'
---

A user opened an issue in Tilex last week that I spent a significant amount of time thinking about and bouncing off colleagues (thanks JB) before responding. Here's the truncated request:

> May I ask you to compile a step-by-step list to set up a running TIL instance?

[Source](https://github.com/hashrocket/tilex/issues/286)

I reflected for a while on my answer. When does documentation become too specific? What's a fair request of an open source project maintainer's time? How do I say 'no' to a reasonable request, while still thanking the requester and making sure the interaction remains very positive?

Here's what I wrote:

<em>
Thanks for your interest in the project!

We use the installation, authentication, and testing instructions in the README to cover the general base case. If you think any of these instructions could be better, feel free open a PR.

Writing comprehensive instructions like these poses two challenges: it takes time to do it well, and they can't really apply to everybody, because the steps differ widely based on the audience’s level of experience, operating system, interest in setting up a server vs. Platform-as-a-service, and a lot more.

Elixir, Phoenix, PostgreSQL, hosting platforms, and continuous integration are huge subjects with large, active communities of users. I’d direct specific questions you have with any of these tools to Stack Overflow.

We use this issue tracker for bug reports and feature requests. Closing this issue as it's outside that scope.
</em>

Maintaining an open source project continues to present interesting and subtle challenges. I'm not certain I struck the perfect balance with my comment. But it was the right answer for me, and worth the effort to try and convey it well.