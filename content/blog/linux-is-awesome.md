---
title: 'Linux is Awesome'
date: '2014-05-23T17:05:29-05:00'
---

I've been using Linux (Ubuntu 10.04 LTS and 12.04 LTS) for almost a year.  It's awesome.  I grew up on Windows and thought I'd never switch.  Well, I did, and I won't be going back.

For a user, Linux is great because it gives you so much power.  If I want to get software upgrades, I run:

```
$ sudo apt-get update
$ sudo apt-get upgrade
```

Once I'm back from refilling my water bottle, my system is patched.  Zero GUI interaction.  Awesome.

As a developer, Linux is an excellent choice.  If you write code, there are a lot of good reasons to give Linux a try.

Like many people my age, I grew up with Windows.  It's hard to remember just how totally Microsoft owned the '80's and '90's.  I didn't see a lot of Macs.  And with great operating systems like Ubuntu still years in the future, I learned Windows.

This carried into my programming.  Windows was a choice of convenience.  So many other things about programming were foreign that switching to an entirely different environment seemed like a giant, unnecessary leap.  My learning began in online tutorials like <a href='http://www.codecademy.com/'>Codecademy</a>, where my choice of OS seemed largely irrelevant.

There comes a time in learning to program where you have to wean yourself off tutorials and do the actual work of writing code.  Often called 'yak shaving', this includes installing your language, compiler, and tools, learning to use a text editor and source control, and debugging.  It's mundane work and there is no 'manual', which is why it's so hard for beginners.

When it came time for me to make that transition with Ruby, I had a reality check about Windows.

To install the tools you need to be a Ruby developer on a Windows machine, follow these steps:

* Figure out which tool you need
* Search for it online
* Realize that the tool does not run on Windows
* Find an open source project made by some awesome people that allows an altered, outdated version of the tool you need to run on Windows
* Install it (may take hours if you're new)
* Code!

I've felt the reverse pain of this trying to install Internet Explorer on Ubuntu with Wine.  Great projects fighting an uphill battle.

Here is the same process on a Unix-based system:

* Read about the tool you need
* Search for it online
* Install it with `apt-get`
* Code!

Why is this so?

I think it's because it's easier to use a tool in the environment where it was created.  Developing Ruby, which was written on Unix-based systems, is just going to be a more straightforward process on a Unix-based system.

Unix-based systems rule the open source development world, and as a result, that is the environment the best tools were written on.  If you want to use them on Windows, somebody has to make a translation.  That takes time and effort, and there is an unavoidable delay between the when the tool is updated and when the Windows-compliant version is released.  You will never be on the cutting edge.

So in a way, I felt compelled to switch to a Unix-based system.  I went with Ubuntu because it is free (although you can <a href='http://www.ubuntu.com/download/desktop/contribute'>donate</a> to the project).  It turns out it's a pretty great OS.

If you work with Linux servers, then the decision to use that environment yourself becomes more compelling.  I like being able to SSH into a server, apply patches, edit files with Vim, reboot, and go back to writing code without having to think too hard.

Macs are beautiful pieces of art, and I might switch someday.  But besides the excellent hardware, I don't see a reason.  I've heard that a lot of developers use Macs because they are a solid choice for both professional and home use.  That is a reasonable argument.

Linux has been a great change for me.  There are many other reasons to switch, which I won't repeat here.  When somebody with a background like mine wants to learn programming, with Ruby as their first language, I always advise them to get a Unix-based system, unless they are hungry for a challenge.  With abundant free operating systems and virtual machines to choose from, there is no reason to not experiment.  The first time you switch Rubies with <a href='https://rvm.io/'>RVM</a> (one of many examples), I think you'll be hooked.
