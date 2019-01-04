---
title: 'Code Club'
date: '2014-08-18T10:50:21-05:00'
---

At Rails Conf 2014, I watched a talk by Saron Yitbarek called <a href='http://www.confreaks.com/videos/3342-railsconf-reading-code-good'>Reading Code Good</a>.  Saron shared a story (and great slides) about creating a weekly code-reading club with some fellow Flatiron School alums.

It's an excellent idea.

I read code all day, but a lot of it is skimming.  With Ruby it's easy to get a sense of what a program does without exactly understanding each action.  That level of engagement works generally, but it fails in the face of a complex problem.  I want to get better at reading code.

With this in mind, a friend and I decided to try making our own code club.  We called it: 'Code Club'.

For our guiding principles, we copied Saron's list almost verbatim.  Here's what we agreed on:

<strong>Guidelines</strong>

* Pick a manageable code base (<100 LOC).  Active reading is tiring and we want to be able to focus.
* Code should be exemplary.  We want to see the best practices the industry has to offer.
* Pick a tour guide.  Somebody has to lead.  In the spirit of pair programming, I am probably going to lead for the foreseeable future because I have less experience.
* Interact with the code.  We both have IRB, project documentation, Ruby documentation, search engines, and Stack Overflow ready to go.  If we don't understand something, we will run actual examples until we do.

Where did we find our code?  This is where Github is great, because you can search repositories by language, size, 'stars', forks, and more.

The one hundred lines requirement was a challenge, because it's difficult to find any code of significance that is that small.  In the end we relaxed that requirement to allow slightly larger files.  We also agreed that it was okay to choose a single file with around one hundred lines, even if it is part of a larger project (like Rails).

The project we looked at was the Ruby gem <a href='https://github.com/thoughtbot/cocaine'>Cocaine</a>.  Cocaine is maintained by the team at Thoughtbot, who bill it as 'a small library for doing (command) lines.'  We chose the gem because it met our guidelines and is common to many Rails applications.

The file we read was <a href='https://github.com/thoughtbot/cocaine/blob/master/lib/cocaine/command_line.rb'>lib/cocaine/command_line.rb</a>, one hundred and seventy lines of Ruby code that do most of the heavy lifting for the gem.  It took about an hour to read.

Conclusion: I learned a lot.  Here are some of the concepts we covered, some new and some I'd forgotten, along with the best explanation I can give for each.

<strong>The Ruby 'detect' method</strong>.  Passes each entry in <em>enum</em> into a block, and returns the first value for which the block is not false.  If the block is never not false, it calls <em>ifnone</em> and returns the result if it is specified, or else returns nil.

<strong>The Ruby =~ operator</strong>.  A regular expression that takes the pattern on the right, and if there is a match to the variable on the left, returns the position of the start of the match, or else returns nil.

<strong>The Ruby 'dup' method</strong>.  Produces a shallow copy of an object, without the objects it references.  Different from 'clone' method because it duplicates the object but not its internal state.

<strong>The Ruby 'tr' method</strong>.  Takes arguments 'p1' and 'p2' and returns a copy of the string where 'p2' replaces 'p1'.  An example:

```
'foobar'.tr(bar', 'baz')      #=> 'foobaz'
```

When you slow down and actively read something, you learn.  This meeting gave me a deeper understanding of this gem and the Ruby language.  Code Club was fun and I highly recommend something similar to anybody who wants to improve their skills.  Thanks to my code partner for your time, Saron for the idea, and Thoughtbot for maintaining this useful gem.