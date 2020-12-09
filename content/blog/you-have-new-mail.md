---
title: 'You Have New Mail'
date: '2020-10-16T00:00:00-06:00'
---

Here's a familiar scenario: you open a new terminal, and before the prompt
appears, you see the following.

> You have new mail.

What's going on here?

### Explanation

Events in your operating system can send messages to your mail queue. Although
it's tempting to ignore them because they aren't colored red or filled with
threatening language, you should not ignore these messages. In most cases, your
operating system is trying to tell you something important.

Inspect these messages with the `mail` command.

```
$ mail
"/var/mail/jake": 60 messages 60 unread
...
```

### Action

Uh oh, 60 unread messages! Time to get reading. Read each message with `mail`,
followed by `p` to print the current message. Go fix what's wrong, and then
dispose of the message with `d`.

Alternatively, you can read this mail file directly. Here's an example entry:

```
jake@computer.localdomain  Wed May 20 15:19:20 2020
Return-Path: <jake@computer.localdomain>
X-Original-To: jake
Delivered-To: jake@computer.localdomain
Received: by computer.localdomain (Postfix, from userid 501)
  id 67A83203EC4B55; Sat, 20 Jun 2020 15:19:19 -0400 (EDT)
From: jake@computer.localdomain (Cron Daemon)
To: jake@computer.localdomain
Subject: Cron <jake@computer> afplay /System/Library/Sounds/Ping.aiff
X-Cron-Env: <SHELL=/bin/sh>
X-Cron-Env: <PATH=/usr/bin:/bin>
X-Cron-Env: <LOGNAME=jake>
X-Cron-Env: <USER=jake>
Message-Id: <20200520191920.67A83202EC2B53@computer.localdomain>
Date: Wed, 20 May 2020 15:19:19 -0400 (EDT)
Status: O

Error: AudioQueueStart failed (-66681)
```

The `Cron` portion of `Subject:` reveals that this message is from a failing
cron job. All of my messages are the result of problematic cron commands; in
fact that's a great way to pile up a bunch of automated mail messages. Fix the
commands and clear out the mail.
