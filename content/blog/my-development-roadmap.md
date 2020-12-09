---
title: 'My Development Roadmap'
date: '2020-10-20T00:00:00-06:00'
---

I've been working on a development roadmap for my projects, and wanted to share
my process. Consider this a recipe to turn an idea into software. 

The purpose of codifying a workflow like this is to make working with me a
predictable and thorough experience. Writing software is pretty hard; it's much
harder when you don't have a plan. Every item here is à la carte– I wouldn't
typically do more, but I might do less on projects of modest scope.

What do I have to show for these words? Several dozen production greenfield and
legacy client projects, an in-development startup where I'm Developer #1, and a
few things enumerated on my [about](/about) page. I'm still a work in progress
and learning, and this is how I do my best work right now.

### Introduction

Almost everything I know about software, I learned at [Hashrocket][hr]. This
process is very similar to what I've done dozens of times with my team there.
The main difference is that I've added a few steps we don't typically do, like
the competitive analysis, because our clients have usually done that themselves
prior to our engagement. We also have dedicated project managers and designers
at Hashrocket; for my personal projects I've tried to teach myself enough to
wear those hats when required.

The flow here also takes heavy inspiration from the following outstanding
resources:

- https://www.fullstacklabs.co/playbook
- https://thoughtbot.com/playbook

Here are the steps.

### Design Discovery

What kind of design expectations are we beholden to, or do we aspire to?  The
deliverable is a written document via Google Docs or Basecamp. If neither of
those platforms is your cup of tea, chose your own document-sharing service. I
think it's really important that these docs are accessible by everyone at any
time.

### Kickoff Meeting

The first of only a few real meetings! Here's a great overview of this process
from [Lucidchart](https://www.lucidchart.com/blog/kickoff-meeting-agenda).

A few agenda items for this one-hour meeting:

- Introductions
- Project Background
- Project Mission Statement: Short, articulate, and inspiring
- Scope
- Development Roadmap Review
- Roles
- Collaboration
- Questions
- Next Steps

The deliverable is a productive meeting and notes with actionable action items.

### Competitive Analysis

What are the other folks doing? The deliverable is an spreadsheet.

### User personas

Who are our users? We'll brainstorm demographic data about them. The deliverable is
an spreadsheet.

### Technical Discovery

What kind of technology do we want to use? Which [boring technologies][boring]
are we going to use, and are we planning to spend any innovation credits? The
deliverable is a written document.

### UX Design

We'll build a feature map and user flow in Whimsical, and wireframes via
Sketch. I'm still refining my wireframes process, and to paraphrase _The
Pragmatic Programmer_ chapter 21, I generally ignore:

- Correctness: details don't have to be perfect
- Completeness: leave off things we don't yet understand
- Robustness: keep the design simple
- Style: no colors, no responsive design (desktop or mobile, not both), generic typesetting

### UI Design

We'll produce style concepts and a style guide via Sketch, and high-fidelity
mockups via Sketch Cloud. Here I'm taking design and UX more seriously, staying
mindful of the [Iceberg Secret][iceberg].

### Prototyping and Estimation

If we haven't already, we'll make a high-fidelity clickable prototypes via
Sketch Cloud. Then, we'll do development estimates via storycarding, using Vim
Slurper, BDD syntax, and Pivotal Tracker. Finally, we may make a development
proposal, a written document in Basecamp or Google Docs.

### Development

Time to write the code! This entire blog summarizes how I'd handle this phase.
We'll be doing Agile, iterative development, with daily standups, refinement,
estimation, planning, development, delivery, and retrospectives. The
deliverable is the universe-denting software. When we're finished, we'll
launch! 🚀

### Conclusion

That's it! I plan to update the workflow periodically as I continue to ship and
refine. I hope this was helpful, and keep building.

[boring]:https://mcfunley.com/choose-boring-technology
[iceberg]: https://www.joelonsoftware.com/2002/02/13/the-iceberg-secret-revealed/
[hr]: https://hashrocket.com/
