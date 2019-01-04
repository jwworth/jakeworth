---
title: 'How I Talk: Researching and Preparing Slides'
date: '2017-12-29T16:20:56-06:00'
---

This post is part of a series about preparing technical talks; the introduction is [here](/how-i-talk).

Today, I'll be covering the third step of my process: researching and preparing
slides. Every speaker I know has their own techniques for handling this part of
the process; I look forward to sharing mine.

### Research

When possible, I start in an unusual place: the library. Libraries
often contain a wealth of information on many technical subjects. Connecting a
topical web development subject to the history of computers or general human
inquiry is something Sandi Metz, a speaker I admire, does well. Even when the
material isn't there waiting to be found, there's always something, as well as
professionals who can help you devise a research strategy.

Technical talks, often mislabeled 'hard' talks, are what I prepare
most often. They require experimentation. I use the ideas I found
during [brainstorming](/how-i-talk-brainstorming) to try a lot of
experiments in my text editor or REPL. What are the nuances? Which are worth explaining?

### Preparing Slides

After trying PowerPoint, Keynote, and even Vim buffers navigated
with `]f` and `[f` (an idea I borrowed from Steve Klabnik; not recommended unless
you're an unflappable speaker), I discovered [Deckset](https://www.decksetapp.com/).

Deckset is a feature-rich markdown slide builder, and I love it. If you can
write markdown, Deckset is a fantastic tool. It lets me crank out ideas and
proofs-of-concept in Vim. If you feel that the hardest part of
preparing a talk is actually putting together the visuals and notes you need to
speak confidently, then Deckset is worth trying.

As for slide design, I follow the guidelines put forth in
[Speaking.io](http://speaking.io) and the Chicago Ruby speaking guidelines. My
short version:

1. Make your text as big as you can.
1. Use the most basic code examples that you can.
1. Use high contrast colors, like black text on a white background. Subtle
   terminal palettes like Zenburn fail on a projector.
1. Don't show code unless you want your audience to read every line, because they will.

My talks don't feature funny GIFs, pictures, or video. Why? I don't trust
myself to be funny, and don't want to invest any of the time I have to prepare
on trying to satisfying that quadrant.

I structure my talks like essays, with an introduction, thesis, 3-4 supporting
points, and a conclusion. A little formulaic but it works.

Something I often ponder is: could this be a blog post? One of the less
effective types of presentations could be summarized as a person reading a blog
post they wrote. A telltale sign of such a talk is when the speaker concludes
with a link to a blog post that inspired the talk. I've given a few like this
that I didn't love. A good talk isn't a recipe for accomplishing some
narrow problem you solved, it is a performance only you can give.

### Conclusion

Researching and preparing the slides is a unique process and these ideas have
worked for me in the past. Experimenting and automating my process has helped
me to quickly develop talks that are detailed and hopefully interesting to
watch.

Next up in this series, I'll be covering the step that I think defines all great talks: practice.
