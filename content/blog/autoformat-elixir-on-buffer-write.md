---
title: 'Autoformat Elixir on Buffer Write'
date: '2018-02-17T11:48:04-06:00'
tags:
  - vim
---

I've been working with the Elixir 1.6 autoformatter a lot this year. Part of
that journey was adding the following to my local Vim configuration file:

```vim
" ~/.vimrc
autocmd BufWritePost *.exs,*.ex silent :!mix format --check-equivalent %
```

This is one of several ways to make autoformatting a thoughtless process.
Here's a breakdown of each piece of the Vim language:

- `autocmd` tells Vim to run the code automatically on matching files
- `BufWritePost` is the action where this applies: after the Vim buffer (file)
  has been written. Some folks are applying this after text entry, making it a
  much more frequent event. I'm keeping it simple for now
- ` *.exs,*.ex` are the extensions we match, the two common extensions for Elixir files
- `silent :!mix format --check-equivalent %` tells Vim the following:

> Quietly execute `mix format` outside the editor against the current file.
> Make sure that the AST before and after are the same so we aren't changing
> what the code does, which would indicate there's a bug in the formatter.

I like text editor integrations. Integrations are where an autoformatter lives
or dies-- programmatic code changes must be automated to guarantee the rules
are always applied.
