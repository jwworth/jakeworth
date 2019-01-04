---
title: 'Binary to Decimal Conversion in Ruby'
date: '2017-05-04T18:12:42-05:00'
---

This week I wrote a small algorithm to convert binary numbers into decimal numbers. Here's the problem description, from Exercism.io:

> Convert a binary number, represented as a string (e.g. '101010'), to its decimal equivalent using first principles. Implement binary to decimal conversion. Given a binary input string, your program should produce a decimal output. The program should handle invalid inputs.

And here is my code:

```ruby
class Binary
  def self.to_decimal(string)
    raise ArgumentError if string.match?(/[^01]/)

    string.reverse.chars.map.with_index do |digit, index|
      digit.to_i * 2**index
    end.sum
  end
end
```

I like that my solution matches for `ArgumentError` positively, covering a range of bad inputs not specified by the test cases. I like that it reverses the string so that `index` can be used as the incrementing exponent. And, I like that it uses `.map` to return a result without an accumulator variable.

I do not love that my solution takes an argument called `string`. Although that's the type the method expects, it doesn't tell the reader a lot about what this method does. If I could rewrite it, I'd name that variable something like `binary`.

[permalink](http://exercism.io/submissions/984465dbdfba47f3979f6056b8e88d06)