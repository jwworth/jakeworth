---
title: Save a Command's Output to a File
date: '2014-04-08T23:44:42-05:00'
---

One tool that I love allows you to take the output of a terminal command and save it in a file.  That command is:

```
$ command > filename
```

An example:

```
$ ps aux > data.txt
```

This runs the command `ps aux` and sends the output to a file 'data.txt'.  If that file exists, it will be overwritten; if it doesn't exist, it will be created.  You can check the output using `cat`:

```
$ cat data.txt
process status (ps) for all users (a), with owner (u), and processes not attached to the terminal (x)
```

Another helpful modification is to replace `>` with `>>`, like this:

```
$ ifconfig >> data.txt
```

This command takes the output of the `ifconfig` command and <em>appends</em> it to the end of 'data.txt'.  Like the first command, if that file doesn't exist, it will be created.  Inspecting that file once again with `cat`:

```
$ cat data.txt
process status (ps) for all users (a), with owner (u), and processes not attached to the terminal (x) + interface configuration (ifconfig)
```

As you can imagine, the uses of this command are limitless.  A test failing on
your computer but not failing for a remote contractor?  Run the spec, save the
output into a text file, and email it to them.  Debugging a failing deployment
to a hosting provider like Heroku?  Run the deploy command, save the output to
a text file, and post it in a community forum.  Is a test failing only at a
certain time of day?  Run the `>>>` variant, with your computer clock set to
various times, and send all the data to one summary file.

Anytime you are working with a remote person it is much better to provide real,
complete data rather than a fragment.  In other words, be specific rather than
general.

The terminal is one of the most vital tools a developer has.  I use it
constantly, and my first instinct when approaching any new computer task is to
see if it can be done in the terminal.  Usually it can, much faster than any
alternative.

Besides routine use, one resource I recommend to hone your terminal skills is
Zed Shaw's <a href='http://cli.learncodethehardway.org/book/'>Command Line
Crash Course</a>. It covers all the basic commands in the trademark Zed Shaw
style.
