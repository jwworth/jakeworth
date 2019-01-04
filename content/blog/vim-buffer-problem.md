---
title: 'Vim Buffer Problem'
date: '2016-03-06T18:11:39-06:00'
---

A few weeks back I tackled the following programming challenge:

> Vim Buffer: I open up a new Vim buffer and type all the
> numbers 1 to 10,000, separated by spaces. Then, my cat walks on the keyboard
> and somehow activates a substitution command that replaces all the '0’ digits
> (zeros) with spaces. If I now sum up all the numbers in the buffer, as
> delineated by spaces, what is the total?

My solution is below, and here:

https://gist.github.com/jwworth/3a2fb8f23734c1dc871a

I like that this solution is tested. I like that it allows me to override the range minimum if I want, although I don't remember why that was a feature.

I don't like that it uses `to_s` and that it's basically brute force. For problems like these brute force will work most of the time, but it's not elegant.

```ruby
def vim_buffer(start = 1, limit)
  (start..limit).flat_map { |num| num.to_s.gsub('0', ' ').split }.map(&:to_i).reduce(:+)
end

# vim_buffer(10000)
# => 37359001

require 'minitest/autorun'

class TestVimBuffer < Minitest::Test
  def test_ten
    assert_equal(46, vim_buffer(10))
  end

  def test_eleven
    assert_equal(57, vim_buffer(11))
  end

  def test_ten_twelve
    assert_equal(69, vim_buffer(12))
  end
end
```

Thanks again Josh Branchaud for posting these challenges to the Hashrocket team.