---
title: 'Tmux List Sessions'
date: '2015-10-13T10:03:00-05:00'
tags:
  - tmux
---

Today while hacking on Rails I stumbled upon the Tmux 'list sessions' command.

`CTRL-Z s` (where `CTRL-Z` is your Tmux leader) opens a list of all your Tmux sessions, which you can navigate with normal Vim directions, or make your choice by typing in the desired index number.

When I'm having a good day programming, I'll switch Tmux sessions a lot. My previous workflow was to exit a session with `CTRL-Z d`, `cd` to my next project, `mux` (a Hashrocket Dotmatrix alias with levels) into a new or existing session with that directory name, then start hacking.

`CTRL-Z s` is much faster.