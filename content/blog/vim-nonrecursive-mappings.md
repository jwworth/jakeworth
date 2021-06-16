---
title: 'Vim Nonrecursive Mappings'
date: '2016-12-17T12:44:21-06:00'
tags:
  - vim
---

My first PR to a new Vim plugin was merged this week, [check it out](https://github.com/dillonhafer/vim-termbux/pull/1).

For context, vim-termbux is a plugin by my friend Dillon Hafer that emulates the behavior of [vim-turbux](vhttps://github.com/jgdavey/vim-turbux)— sending test run output to somewhere outside of Vim– in iTerm. If you write a lot of tests in iTerm and Vim, but prefer to stay outside of Tmux for whatever reason (fingers don't like the mappings, etc.), than this plugin is for you.

My patch changes this:

```vim
nmap <leader>t :call <SID>ITermTestRunnerLine()<cr>
nmap <leader>T :call <SID>ITermTestRunnerFile()<cr>
```

To this:

```vim
nnoremap <leader>t :call <SID>ITermTestRunnerLine()<cr>
nnoremap <leader>T :call <SID>ITermTestRunnerFile()<cr>
```

This is the mapping that enables the plugin to work.

I'm reading *Learn VimScript The Hard Way*, and this was one of my first practical applications of that. As the pull request summary explains:

> All Vim mappings should be non-recursive. Although unlikely, if your second argument is ever mapped to something else in a different place, `nnoremap` will prevent a recursive call and just execute the second argument as written.
>
> [Source](http://learnvimscriptthehardway.stevelosh.com/chapters/05.html#nonrecursive-mapping)

To summarize, non-recursive mappings are less likely to surprise you, and should be the default. I haven't seen this go wrong myself, and am trusting the expert. It's nice to learn some things from the experience of somebody else.

