---
title: 'Printing Code on OSX'
date: '2020-10-13T00:00:00-06:00'
---

A few times over the years, I've had to print out code that I've written onto
physical paper. I have actually heard that some teams do team code reviews on
paper, which sounds really fun. Getting code to look good in the dead-tree
format can be tricky, especially for the Vim and Emacs users out there.

My solution? Open the file in TextEdit, which ships on every Mac. TextEdit
displays the file in plain text without any frills, just like Vim. `⌘ + P` that
well-factored, universe-denting document to your printer of choice.

Do this even faster via the command line:

```
$ open -e your-file.txt
```
