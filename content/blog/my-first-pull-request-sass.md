---
title: 'First Pull Request to SASS'
date: '2014-03-24T11:14:42-05:00'
---

<a href='http://sass-lang.com/'>SASS</a> bills itself as 'the most mature, stable, and powerful professional grade CSS extension language in the world'.  It's called an 'extension language' of CSS because it augments the power of that language.

I'm grateful for SASS because it gives me more options as a developer.  I wanted to contribute to the project and decided to focus on documentation.

To start work, I forked the <a href='https://github.com/nex3/sass'>SASS repo</a>, cloned it to my machine, and installed the bundle.

Next, I ran the tests, which failed.  When this happens, it's tempting to assume that the build is broken, but that is rarely the case.  More than likely my environment is not set up properly.  I've found that it's better to assume the build is green, because it usually is.

The failure message was 'this method is depreciated'.  From past experiences, this seemed Ruby-related.  Sure enough, switching from Ruby 2.1.0 to Ruby 1.9.3 fixed it.

```sh
$ rvm use ruby-1.9.3-p448
$ bundle exec rake
```

1835 tests, 10923 assertions, 0 failures, 0 errors, 3 skips.  'Skips' are tests that aren't written or I can't run.  The three skips provided the error message 'can be run on Windows only', which makes sense, given that I'm developing with Ubuntu.

I started out by fixing some random typos, and in the process found whitespace, which are trailing blank spaces.  Whitespaces are ignored by the interpreter, but they should be avoided.  I decided to pause and hunt down whitespace.

Many teams won't accept commits that only remove whitespace, arguing that the gain of such an improvement is outweighed by the risk.  A 'whitespace commit' can invalidate older pull requests and introduce bugs.  There's also an argument that as long as humans write code, whitespace will exist, and that removing it is a somewhat of a fool's errand.  I'm going to do it anyway, because I am also fixing misspellings.

I wanted a script to find and fix the whitespace. After some reading, I found <a href='http://stackoverflow.com/questions/10711051/trailing-whitespace-elimination-script-for-multiple-files'>this post</a> and tweaked the command as such:

```sh
$ find . -type f -name '*.rb' -exec sed --in-place 's/[[:space:]]+$//' {} +
```

A breakdown:

* <strong>find .</strong> - Search for files all in a directory hierarchy
* <strong>type -f</strong> - Limit the search to regular files
* <strong>-name '*.rb'</strong> - Limit the search to files that end in '.rb' (this prevents me from altering binary files)
* <strong>-exec</strong> - Execute anything to the right of this command as a subprocess of the first (find') command
* <strong>sed</strong> - Use the stream editor, which finds and transforms text
* <strong>--in-place</strong> - Edit the files in place
* <strong>'s/[[:space:]]+$//' {} +</strong> - Use this regular expression for the search, which finds any extra space at the end of a line or space on a line all by itself, removes it, then terminates the command

Scripts are powerful; don't use them unless you know what they do.

This script found twelve instances of trailing whitespace, which I removed and committed to a new branch called 'task/fix_typos_and_whitespace'.  On top of that I added twelve typo fixes.

Running the test suite again returned the same result, a decent assurance that I didn't break anything.  I pushed my changes to Github and opened this <a href='https://github.com/nex3/sass/pull/1182'>pull request</a>.  It was merged the next day.  Thanks to the team at SASS for building a great project.
