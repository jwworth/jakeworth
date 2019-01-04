---
title: 'The Universal Programming Language'
date: '2017-09-17T15:23:22-05:00'
---

Recently I tried to answer a question that is common when talking about software. I'll paraphrase:

> Why can't there be an “universal” programming language that serves all purposes?

The number of programming languages in the world is dizzying. Names like JavaScript, Ruby, and C are known
by programmers and non-programmers alike. Since technology constantly evolves, and learning many things
takes more time than learning one thing, wouldn't a reasonable expectation be that we'll all
someday coalesce around an ideal language, that's perfect for every situation?

I think this is a fascinating idea. I'll take my best shot at answering it here.

There can't be a universal programming language because language design, like all design,
*always requires tradeoffs*.

Let's take two implementations of a 'Hello World' program. The first is written in C:

```c
#include <stdlib.h>
#include <stdio.h>

int main(void)
{
  printf("Hello world!\n");
  return EXIT_SUCCESS;
}
```

The second is Ruby, a language written in C:

```ruby
puts 'Hello world!'
```

What's the difference? The Ruby code is one line, and the C code is eight
lines. The C code begins with two lines that import the
standard and IO libraries. Next we define our `main` function, call
`printf` with a newline, and send an exit command.

But there's another difference, too: the C code is orders of magnitude
faster than the Ruby code. We know this without measuring, because C is always
much faster than Ruby. It is optimized for speed.

The Ruby code is readable, enough that a non-programmer would probably have
no trouble guessing what it does. That's because Ruby is optimized for
'developer happiness', readability, and its ability to be non-surprising (known
as the *Principle of Least Surprise*).

Code that's fast has an important place. It gets the job done
quickly and with fewer resources. In fields such as science these are are crucial attributes.

Code that's readable is also important. It's more friendly for beginners, and it's
arguably more productive for developers to work with.

As long as there's a place for both of these goals, C and Ruby can
coexist. You can't get C's performance in Ruby code, and you can't get Ruby's
beautiful expressiveness in C code.

This logic applies to any programming language of significance. That is why there
will probably never be a universal programming language.