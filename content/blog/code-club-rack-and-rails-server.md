---
title: 'Code Club: Rack and Rails Server'
date: '2014-08-27T18:20:40-05:00'
---

This week in Code Club we explored Rack, the middleware of the Rails stack.  Rack is newsworthy of late due to a change in ownership, prompting inevitable questions about the future.  As Rails developers, we wanted to know what Rack really does.

We started with the README from the <a href='https://github.com/rack/rack'>rack/rack</a> repository.  Rack's team bills it as 'a modular Ruby webserver interface' and gives a nice overview.

Next we moved into the code.  In lib/ there is a file called 'rack.rb', which we read.  This file loads other files, comprising the core functionality of Rack.

We proceeded to one of those files, 'lib/rack/file.rb', Rack's tool for serving static files.  This was a challenging piece of code, because it referenced many other files and functions.

After struggling through, we took a break and returned to Rails.  I pulled a random file I was interested in, <a href='https://github.com/rails/rails/blob/4-1-stable/railties/lib/rails/commands/server.rb'>rails/rails/railties/lib/rails/commands/server.rb</a>, which tells Rails what to do when you enter the command 'rails server'.

Here are some concepts we reviewed while reading this file.

<strong>Ruby 'begin' and 'end'</strong>.  A wrapper that contains code that might raise an exception.  The keyword 'rescue' can be used to explain what to do with a certain exception; the keyword 'ensure' indicates that the code beneath it will always be executed.  This wrapper allows you to explain what the program should do in every scenario.

<strong>trap(:INT) { exit }</strong>.  Found on line 65, this method creates a trap for signals coming from the terminal.  For instance, if the user enters CTRL-C, this method will trap that command and terminate the program.

<strong>Ruby 'demodulize' method</strong>.  Removes the module part from the expression in a string.  A handy way to remove the last double colon and everything to the left of it.  For example:

```ruby
irb> 'ActiveRecord::CoreExtensions::String::ThisClass'.demodulize # => 'ThisClass'
irb> 'ThisClass'.demodulize # => 'ThisClass'
```

<strong>The 'wrapped_app' method</strong>.  Touches the Rack app.

Exploring the Rails server code had an unexpected benefit: it taught me more about Rack.  The Rails server relies on several Rack modules to work.  Since Rack provides this functionality to other platforms besides Rails, this a clear example of 'convention over configuration'.

I would define Rack as a collection of modules that a platform uses to perform some of its core functions, including interacting with other levels of the stack.

The meeting wound down with a discussion about Vim.  My code partner also uses Vim, and shared some good repos for making Vim more powerful.  During our talk I learned how to paste from the system clipboard using CTRL-SHIFT-V.  Figuring out these simple commands has made this attempt at learning Vim more successful than previous attempts.

This was a good meeting.  We talked about the meeting format, our direction, and whether we could stray from reading code every meeting into other exercises like Code Katas or pair-programming an open source contribution.  We agreed to look into some simpler gems for the next meeting.

Thanks to the Rack and Rails core teams for maintaining these files, Google Hangouts for the connection, and Bram Moolenaar for building this awesome text editor.