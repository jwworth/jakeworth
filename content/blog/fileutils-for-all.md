---
title: 'FileUtils For All'
date: '2015-09-30T20:01:27-05:00'
---

A step in the Ruby deploy scripts for one of my projects shells out as such: `rm -rf build/assets/ui`. This prevents all design artifacts from going out with the production push. Pretty cool, right?

The problem comes when a Windows developer joins the project. Windows does not have `rm`, so that developer can’t deploy. We want to include everybody, even Windows devs!

Ruby’s `FileUtils` library to the rescue:

```ruby
FileUtils.rm_rf(‘build/assets/ui’)
```

This library includes many Ruby methods that mimic Unix terminal commands.

http://ruby-doc.org/stdlib-2.2.3/libdoc/fileutils/rdoc/FileUtils.html
