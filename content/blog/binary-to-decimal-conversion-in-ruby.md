---
title: 'Binary to Decimal Conversion in Ruby'
date: '2017-05-04T18:12:42-05:00'
tags:
  - ruby
---

This week I wrote a small algorithm in Ruby to convert binary numbers into
decimal numbers. Here's the problem description, from Exercism:

> Convert a binary number, represented as a string (e.g. '101010'), to its
> decimal equivalent using first principles. Implement binary to decimal
> conversion. Given a binary input string, your program should produce a
> decimal output. The program should handle invalid inputs.

### Solution

```ruby
class Binary
  def self.to_decimal(binary)
    raise ArgumentError if binary.match?(/[^01]/)

    binary.reverse.chars.map.with_index do |digit, index|
      digit.to_i * 2**index
    end.sum
  end
end
```

And the interface:

```ruby
> Binary.to_decimal('101010')
=> 42
```

### Reading the Code

What's going on here? Examining each line:

1. We make a class `Binary`, a container for our code.
2. We define a class method. I prefer functional when object instantiation isn't
   beneficial.
3. Guard clause! Raise an `ArgumentError` if the string does not match the
   binary format.
4. Space; let that code breathe .
5. Reverse the string and split into characters, then map over each with index included.
6. Take each digit, starting with the rightmost because the power grows with
each position. Convert it into a number, and multiply that number by two to the
power of its enumerable index. In simpler terms, convert each digit to its
individual decimal value.
7. Sum the result.

### What's Good

I like that my solution matches for `ArgumentError` positively, covering a
range of bad inputs not specified by the Exercism test cases. I like that it
reverses the string so that `index` can be used as the incrementing exponent.
And, I like that it uses `.map` to return a result without an accumulator
variable.

### What I'd Do Differently Next Time

I may have golfed this down a little too much. In general, I think mathematical
functions can get away with terser syntax than ordinary functions, because the
principles are easy to learn about with a quick Google search.

### Practical Implementation

If this was a real-world Ruby problem, I'd use `to_i`:

```ruby
> '101010'.to_i(2)
=> 42
```

And go back to binary with `to_s`:

```ruby
> 42.to_s(2)
 => '101010'
```

### Conclusion

Thanks Exercism for this fun challenge, and thanks for reading! Here's the
permalink to my solution:

[Binary to Decimal (Ruby)](http://exercism.io/submissions/984465dbdfba47f3979f6056b8e88d06)
