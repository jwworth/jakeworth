---
title: 'LED Clock in Ruby'
date: '2016-03-06T17:37:03-06:00'
---

A few weeks ago I attempted to solve a programming challenge that was described as such:

> LED Clock: You are (voluntarily) in a room that is completely dark except for
> the light coming from an old LED digital alarm clock. This is one of those
> clocks with 4 seven segment displays using an HH:MM time format. The clock is
> configured to display time in a 24 hour format and the leading digit will be
> blank if not used. What is the period of time between when the room is at its
> darkest to when it is at its lightest?

My solution is below, and also here:

https://gist.github.com/jwworth/65dbc7023dede6ff0662

I like a few things about my solution. I like that it utilizes a functional style. I like that it is readable from top to bottom as a single idea. I like that it solves in a repeatable way a problem that would be trivial to solve with a pencil and paper.

I don't like a few things about my solution. I don't like that it eschews Ruby's object-oriented nature. I don't like that I had to use the `Time` library to do the time math. I don't like that it is untested. All of these were tradeoffs I accepted to get to a solution quickly. With some tests the code could easily be refactored.

My solution:

```ruby
# led.rb

def compute_brightness(units)
  cells_per_number = [ 6, 2, 5, 5, 4, 5, 6, 3, 7, 6 ]

  units.each_with_object({}) do |t, hash|
    digits = t.split('')
    hash[t] = digits.map { |d| cells_per_number[d.to_i] }.reduce(:+)
  end
end

def compute_brightest_time(hours_hash, minutes_hash)
  Time.new(2016, 1, 1, hours_hash.key(hours_hash.values.max), minutes_hash.key(minutes_hash.values.max))
end

def compute_darkest_time(hours_hash, minutes_hash)
  Time.new(2016, 1, 1, hours_hash.key(hours_hash.values.min), minutes_hash.key(minutes_hash.values.min))
end

hours_hash = compute_brightness('0'..'23')
minutes_hash = compute_brightness('00'..'59')

brightest_time = compute_brightest_time(hours_hash, minutes_hash)
darkest_time = compute_darkest_time(hours_hash, minutes_hash)

puts "With no leading zeroes:"
puts "Brightest: #{brightest_time.strftime('%H:%M')}"
puts "Darkest: #{darkest_time.strftime('%l:%M')}"
puts "Diff: #{(brightest_time - darkest_time).abs}s"

hours_hash = compute_brightness('00'..'23')

brightest_time = compute_brightest_time(hours_hash, minutes_hash)
darkest_time = compute_darkest_time(hours_hash, minutes_hash)

puts "\nWith leading digit always included:"
puts "Brightest: #{brightest_time.strftime('%H:%M')}"
puts "Darkest: #{darkest_time.strftime('%H:%M')}"
puts "Diff: #{(brightest_time - darkest_time).abs}s"

# With no leading zeroes:
# Brightest: 20:08
# Darkest:  1:11
# Diff: 68220.0s

# With leading digit always included:
# Brightest: 08:08
# Darkest: 11:11
# Diff: 10980.0s
```

Thanks to Josh Branchaud for keeping us all on our toes with these challenges.
