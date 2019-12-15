---
title: 'Git Bisect Demo Pt. 2'
date: '2016-12-11T12:58:43-06:00'
---

This week I rebuilt my Elixir Git Bisect Demo project in Ruby; it's available [here](https://github.com/jwworth/git_bisect_demo_ruby). Doing so allowed me to demo an automated Git bisect for my coworkers using only `git bisect run`.

The criteria for `git bisect run` to work is as follows, from the man page:

> Note that the script (my_script in the above example) should exit with code 0 if the current source code is good/old, and exit with a code between 1 and 127 (inclusive), except
> 125, if the current source code is bad/new.
>
> Any other exit code will abort the bisect process. It should be noted that a program that terminates via exit(-1) leaves $? = 255, (see the exit(3) manual page), as the value is chopped with & 0377.

I have validated that the ExUnit test I wrote for the [Elixir version](https://github.com/jwworth/git_bisect_demo) of this demo succeeds with error code `0` and fails with error code `1`, but for whatever reason, `git bisect run` does not return the breaking commit. I'd love to know why this doesn't work, but am currently stumped.

My best guess is that, when an ExUnit test fails at compile time (as my test did, due to an arity mismatch), it doesn't issue an error code `1`, even if that's what `$?` returns via the command line.

In the meantime, the Ruby project shows how `git bisect run` can successfully work. Issuing the following command, from a state where the regression test is an untracked file (such as `HEAD^`):

```
$ git bisect start HEAD HEAD~13
$ git bisect run ruby test/regression_test.rb
```

Returns the following (abbreviated):

```
  1) Error:
RegressionTest#test_handles_no_name:
ArgumentError: wrong number of arguments (given 0, expected 1)
    /Users/jwworth/oss/git_bisect_demo_ruby/lib/hello_world.rb:5:in `hello'
    test/regression_test.rb:7:in `test_handles_no_name'

1 runs, 0 assertions, 0 failures, 1 errors, 0 skips
e1e4883ec0785f7933b268051e33dc56bb2c8751 is the first bad commit
commit e1e4883ec0785f7933b268051e33dc56bb2c8751
Author: Jake Worth <jake@jakeworth.com>
Date:   Fri Dec 9 13:54:50 2016 -0600

    What's this for? Don't get it. Removing!

:040000 040000 e6c5606d9a9b40d4497dcc10b377a9ae038d242e 5538a62b9167a5f6fd5ea41ee7ba2ee83d61a5ca M	lib
bisect run success
```

Let the finger pointing and shaming begin! In all seriousness, `git bisect run` is a fantastic tool for learning from our mistakes and growing as a team.
