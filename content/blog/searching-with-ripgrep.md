---
title: 'Searching with Ripgrep'
date: '2019-12-30T00:00:00-06:00'
---

I've been using [Ripgrep][rg] on my work machine, and for pure performance,
it's tough to beat.

Here are two mappings I've set up to replace common search behaviors with with
their Ripgrep equivalent. The first uses Ripgrep for Vim searches, and the
second uses Ripgrep for `:grep` command-mode searches.

```
if executable('rg')
  " Use ripgrep for Vim search
  let g:ackprg = 'rg --vimgrep'

  " Use ripgrep for :grep search
  set grepprg=rg
endif
```

As a side note, I'm still a huge fan of [Ack][ack] for more powerful flags and
features.

[rg]: https://github.com/BurntSushi/ripgrep
[ack]: https://beyondgrep.com/
