---
title: 'Why I Like Git'
date: '2014-03-27T01:09:59-05:00'
---

I'm lucky to have always programmed in a world with good version control tools. It's one of the first things I learned and a foundation of my workflow.

Version control, also known as revision or source control, is a tool software developers use to track changes to their code.  A popular choice is called Git, and it is awesome.

Building software as a team poses unique challenges.  Storing the team's project in a central location, like a server, makes sense; we want one version of the project that everybody can update.  But with many people making changes, shouldn't we have a log showing what they're all doing?

Version control systems (VCS) were created to solve this problem.  VCS's take a directory and wrap it in something called repository, a 'repo'.  This repo takes a snapshot of the folder when anything is changed.  As a result, it's easy to go back and see when a file was added, modified, or deleted.  It provides instant, granular visibility.

So we've installed a VCS, and now know who's behind every change.  And as long as the VCS repo exists, it's nearly impossible to lose the project, because we have many copies from the past.  But what happens if the server explodes, and we lose the repo?

This is where Distributed Version Control Systems (DVCS) like Git came from.  With a DVCS, each client owns a mirror of the repository, including every file and change.  With a complete copy of the repo on every client computer, we have a robust failsafe.  It nullifies the conflict of two people editing the same file at the same time, because they are actually editing unique local files.  When the changes are saved, or 'committed', each change gets assigned a long checksum called a SHA-1.  A benefit of this system is that because everybody works on their local copy, team members can work for long periods of time without an internet connection.

Git was designed to be fast, simple, supportive of non-linear development (many branches), fully distributed, and scalable.  It appears simple at first, but it's quite powerful.

I hope to write more about Git in the future, including customization, working with remotes, branching, and helpful tools such as <a href='http://github.com'>Github</a> and <a href='http://nvie.com/posts/a-successful-git-branching-model/'>Git Flow</a>.  Git takes time to learn, but it's time well spent, because programmers who master their VCS write better code and can even (occasionally) work miracles.