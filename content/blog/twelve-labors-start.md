---
title: 'Twelve Labors: Start'
date: '2017-08-02T13:02:39-05:00'
---

Over the next few days, I'm planning to code review one of the very first
programs I ever wrote, 'Twelve Labors'. It's a rough, basic stab at the fundamentals of programming, still open source on Github:

https://github.com/jwworth/twelve-labors

Here's the gist of this program, from the `README`:

> This is a game I wrote as an assignment for Zed Shaw's book Learn Ruby The Hard Way. It is a command-line RPG in the style of early classics like 'Zork'.
>
> Twelve-labors was inspired by the Ancient Greek hero Heracles (Hercules), who completed a series of superhuman feats, and in the process gained immortality.

Essentially, the user recreates the tasks that Hercules had to complete
to gain his immortality. Choose the correct action and the character advances.
Choose the wrong action, and the character dies.

I wrote this code as part of [Learn Ruby The Hard
Way](https://learnrubythehardway.org/) by Zed Shaw. I credit this book with
much of my early passion for programming. Zed taught me to type out all code by
hand, to push through confusion, and to write tests.

Why review my own code now, almost four years later?

Well, I see a lot of newbie code in my role as part of the Hashrocket hiring
team. And I find the same antipatterns in that code again and again. My goal is
to use my own newbie code to think about the feedback I give and crystallize the words I use.

Today I'll be looking at the first file in the program, `start.rb`.

### Startup

The `README` declares that to start the program, we type:

```shell
$ ruby start.rb
```

If I were to do this again, I might make it an executable.

Here is `start.rb`. There's not a lot going on here, but I'd still change most of it. 

```ruby
# start.rb

require_relative "level.rb"
require_relative "lion.rb"
require_relative "hydra.rb"
require_relative "hind.rb"
require_relative "boar.rb"
require_relative "stables.rb"
require_relative "birds.rb"
require_relative "bull.rb"
require_relative "mares.rb"
require_relative "girdle.rb"
require_relative "apples.rb"
require_relative "cerebus.rb"
require_relative "immortality.rb"

a_game = Lion.new
a_game.play
```

The first group of lines requires every file, each representing a level. But looking
into each file, there are numerous ways to exit the program early,
rendering all subsequent levels useless. It would be better to require only the
next level at each stage, so that our computer's memory isn't loaded with
potentially useless information.

I'd keep the `level.rb` require, which is the parent class for every level. I'd also
use single quotes and ditch the `require_relative` in favor of `./` for no
other reason than personal preference.

The file ends by assigning a variable `a_game`, then calling `.play` on that
object. My issue with this code:

1. `a_game` is not a good name. Adding `a_` accomplishes nothing and is not
conventional Ruby. It should be `game`, or `lion`.
2. `a_game` does not need to exist– we can call `.play` directly on `Lion.new`.

Here is the final file, after these changes:

```ruby
# start
#!/usr/bin/env ruby

require './level'
require './lion'

Lion.new.play
```

Next post, I will be looking at Level One, `lion.rb`.
