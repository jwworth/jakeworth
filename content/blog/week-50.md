---
title: 'Week 50'
date: '2014-12-12T11:13:16-06:00'
---

This was an interesting week.  I worked on some open source projects, experimented with the Pure Data language, and learned some new Ruby methods.  Some notes:

#### Ruby + Ubuntu = Music

Last week I started reading <em>Practical Ruby Projects</em> by Topher Cyll.  This is a collection of thoughtful Ruby programs that touch a broad variety of CS topics.  If you are an intermediate Rubyist looking for fresh ideas, check it out.

I worked through Chapter 2, 'Making Music with Ruby', resulting in my <a href='https://github.com/jwworth/musica'>musica</a> repo.  This is a MIDI music player with a timer, metronome, and the ability to read sequences in time, as well as 'tap advance' each note.  It supports Linux, but isn't really useful yet out of the box.  My biggest divergence from Topher's source code was replacing the deprecated 'DL' library with 'Fiddle'.

This was a fun project.  It taught me about how Linux and Ruby can interact, and hearing music from Ruby code is awesome.  Next up: OS X compatibility and more features.

#### Pure Data

Another thing I explored was the Pure Data language.  Pure Data is a visual programming language created by Miller Puckette in the 1990's for building music and multimedia interfaces.

You can get it <a href='http://puredata.info/downloads/pd-extended'>here</a> through the 'Pd-extended' executable, which gives you Puckette's program plus 'available libraries, extensions, and documentation'.  Those with OS X Yosemite will also need the X11 server.

See the palette at top, left, for my customary 'Hello World!' program.  Yes, this is an actual Pure Data program.  It consists of four boxes: a 'Hello World!' message box, a 'print' box naming our method, and two versions of a 'bang' box allowing the user to fire at will.  Here is the console output from pressing either of those 'bang' boxes once:

```
print: Hello World!
```

How about some math?  I've made an addition program in the palette, top right.  This adds '40' and '2' together and returns the result in the bottom box.  The 't b b' box is a 'trigger' that tells the program how to add the numbers together.  There is a great series of videos on Youtube by Dr. Rafael Hernandez that explain some basic Pure Data ideas.

Building programs with Pure Data is much like connecting hardware in a rack, which feels intentional.

#### Ruby Methods

What happens when you type <code>String.methods</code> into IRB?  You see all public methods for that class.  I did that for strings and integers, and for each one I didn't know, I ran <code>help</code>, then the method name.  Here is a summary of what I learned:

.succ              =>    Increment strings and integers by one; alias 'next'
.pred              =>    Decrement integers by one (does not work on strings)
.gcd()             =>    Returns greatest common divisor (always positive)
.lcm()             =>    Returns least common multiple (always positive)
.gcdlcm()          =>    Returns an array with the results of .gcd and .lcm
.freeze            =>    Prevents further modification of an object.  Cannot  be undone
.frozen?           =>    Returns true if a method is frozen
.squeeze           =>    Returns a new string with duplicate letters removed.  If an argument is given, removes argument letters
.partition(str)    =>    Returns the first match of the argument, from the left
.rpartition(str)   =>    Returns the first match of the argument, from the right

I'm interested in the intersection of code and music, and hope to pursue that.  Thanks to everybody I worked with, paired with, and talked with this week, as well as Topher Cyll, Miller Puckette, and all who contributed to the Ruby help pages.