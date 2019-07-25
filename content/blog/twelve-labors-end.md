---
title: 'Twelve Labors: End'
date: '2017-08-09T12:47:19-05:00'
---

In a [recent post](/twelve-labors-start), I discussed my plan to review one of
the very first programs I ever wrote, 'Twelve Labors':

https://github.com/jwworth/twelve-labors

On reflection, I've decided to change course, and focus on one method
that exhibits many of the larger problems with the program.

Here it is:

```ruby
# level.rb

class Level
  # ...

  def dead(reason)
    puts "\n#{reason} \a" + @quips[rand(@quips.length)]
    Process.exit(0)
  end

  # ...
end
```

All the levels in the game inherit from this `Level` superclass. As
a result we get stock responses to the character's actions, a command line
prompt (`>`), and the `dead` method, which kills the program. 

Here are my issues with this method.

### Bad Game Design

This method represents a cardinal sin of the program: `Process.exit(0)`. When
Hercules makes the wrong choice, what happens? We annihilate the program with
[exit](https://ruby-doc.org/core-1.9.3/Process.html#method-c-exit) and send a
generic success message (`0`). While we're at it, why not
power down the player's laptop and set it on fire?

A kinder solution would be to ask the player whether or not they want to
exit. If you played my game, you'd realize choosing incorrectly is a 
jarring experience. It's tough to iterate toward a victory, and thus bad game design.

### Lack of Ruby Idioms

This method references `@quips` twice, an instance variable defined on
initialization. This instance variable could and
should be a constant, or at least accessed via `attr_reader`. And instead of
`@quips[rand(@quips.length)]`, I'd use the more conventional `sample`.

### Single Responsibility Principle

The last issue I have is that this method violates the [Single
Responsibility Principle](https://en.wikipedia.org/wiki/Single_responsibility_principle),
the 'S' in SOLID. Although just two lines, the method does at least two things.

Why not rewrite the method to handle the complexity a better game design
would demand? Consider:

```ruby
# level.rb

class Level
  # ...

  def conclude(reason)
    if finished?
      kill
    else
      replay
    end
  end

  private

  def finished?
    puts 'Would you like to play again? [Y|n]'
    prompt
    gets.chomp == 'n'
  end

  def kill
    Process.exit(0)
  end

  def replay
    Lion.new.play
  end

  # ...
end
```

Although longer, this is better because:

1. `conclude` does one thing: concludes the game either by killing the program or starting over again.
1. `finished?` asks the player whether she'd like to play again, with a bias towards `true` (in the Unix
tradition, it's `false` only if the player types exactly `n`).
1. `kill` kills the program.
1. `replay` starts the game over again.

This is a hasty refactor, but it's heading in the right direction.

### Conclusion

Reviewing my own beginner code was illuminating. There is so much I didn't
know. I'd like to do this again in the future on more recent work.

It was also challenging. Beyond being tough to read, the lack of tests
made any refactor almost impossible. If there was ever an argument
for tests, even on a hobby project, this is it.
