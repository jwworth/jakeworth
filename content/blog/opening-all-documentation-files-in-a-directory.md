---
title: 'Mass-Opening Like Files in a Directory'
date: '2014-05-08T13:43:45-05:00'
---

The Unix command line is powerful.  Before doing anything in a GUI, I usually first try to see if it can be done in the command line.  Often it can.

Last week I was reading Rails source code, and wondered: <em>would it be possible to easily load all of the documentation for this project in a text editor?</em>  When you load a large directory in a text editor, individual files are buried in a structure of subfolders.  I wanted to open them all at once, so I started experimenting with commands.

The first step was to define what kind of files have the content I need.  Rails uses '.rdoc' and '.md' files for documentation, so that's what I wanted to look at.

I used the `find` command for my search (only 10 results are shown):

```
$ find -name *.md -o -name *.rdoc
./railties/CHANGELOG.md
./railties/RDOC_MAIN.rdoc
./railties/README.rdoc
./railties/lib/rails/generators/rails/app/templates/README.rdoc
./railties/lib/rails/generators/rails/plugin/templates/README.rdoc
./RELEASING_RAILS.rdoc
./README.md
./actionmailer/CHANGELOG.md
./actionmailer/README.rdoc
./CONTRIBUTING.md
...
```

My goals was to open every file in this list with a text editor.

This is the command I tried:

```
$ find -name *.md -o -name *.rdoc | subl
```

This command executes the arguments on the left side of the pipe (find every file in this directory whose name ends in .md or .rdoc') and passes the output to the command on the right (open that list in Sublime Text 2').  It wasn't working.  After checking my syntax and trying the command a few different ways, I concluded that Sublime Text 2 did not understand the information being passed to it.

After some research, I learned that programs do not accept STDIN arguments by default. A program must be deliberately designed to accept STDIN arguments, which takes development time and energy.  Looks like the Sublime Text team chose the simplest solution: let the command line worry about parsing user input.

Just as I was about to abandon the idea, I found a helpful <a href='http://unix.stackexchange.com/questions/93334/why-cant-certain-programs-like-readlink-take-input-from-a-pipe'>Stack Exchange thread</a>, which pointed me to the `xargs` command. `xargs` takes a program that only accepts command-line arguments, and makes it accept STDIN.

Here is the command I ran, which opened in my text editor every '.md' and '.rdoc' file (71 in Rails):

```
$ find -name *.rdoc -o -name *.md | xargs subl
```

Hacks like this take me a while to figure out, but I think they are worthwhile if there's even a small chance they will make me faster in the future.
