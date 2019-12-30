---
title: 'Code Club: Rails Console'
date: '2014-08-19T13:25:52-05:00'
---

Another week, another showdown in the Code Club.

Still being challenged by the one-hundred line requirement.  We keep it
(generally) because it seems like a reasonable goal for an hour of time.

This week we decided to get into Rails, with the 'console' command.  The Rails
console is a tool for interacting with the database using all the power of
Rails.  The file <a
href='https://github.com/rails/rails/blob/master/railties/lib/rails/commands/console.rb'>rails/railties/lib/rails/commands/console.rb</a>
is one-hundred and thirteen lines of Ruby code that create most of this
functionality.

Here are some concepts we explored during our meeting, and my description as I
attempt to grok:

<strong>OptionParser</strong>.  Required in the first line of the file,
OptionParser is a Ruby class for command-line analysis.  The big benefit I see
to using this Class is that it allows you to specify an argument and explain
how to handle it in one place. Explained in detail <a
href='http://ruby-doc.org/stdlib-2.1.2/libdoc/optparse/rdoc/OptionParser.html'>here</a>.

<strong>class << self</strong>.  Opens up the singleton class of 'self',
allowing you to specify the behavior of methods called on that specific object.
You can then redefine methods for whatever the current 'self' object is.

<strong>The Ruby 'splat' (*args) operator in a method definition</strong>.
Allows the method to take any number of arguments.

<strong>Ruby 'rescue'</strong>.  I forgot that 'rescue' can take an argument
like 'LoadError', which will only run the code for that specific type of error.

<strong>exit(0), exit(1), and exit(127)</strong>.  All of these allow you to
break from a program and convey a status to other programs.  Roughly, exit(0)
== command succeeded, exit(1) == catchall for general errors, exit(127) ==
command not found.  A few more: exit(2) == misuse of shell, exit(126) ==
command invoked but cannot execute, and exit(130) == script terminated by
CTRL-C.

Anything Rails-related is gigantic, so it's hard to not feel like we just
scratched the surface during out meeting.  But that is part of this process.

The big breakthrough was a general agreement that we both want to know a lot
more about Rack.  Rack is an important part of the stack, but it's something I
haven't had to deal with or really understand.   This week we will be reading
<a href='https://github.com/rack/rack'>rack/rack</a> and trying to pick a point
of entry for some active code reading.

Thanks to my code partner, the Rails core team for maintaining this important
file, and Google Hangouts for facilitating the club meeting.
