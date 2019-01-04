---
title: 'Sum of Multiples in Elixir'
date: '2016-08-26T21:37:56-05:00'
---

Today I solved Exercism's [Sum of Multiples](http://exercism.io/exercises/elixir/sum-of-multiples/readme) problem.

Here's the description of the task:

> Write a program that, given a number, can find the sum of all the multiples
> of particular numbers up to but not including that number.
> If we list all the natural numbers up to but not including 20 that are
> multiples of either 3 or 5, we get 3, 5, 6 and 9, 10, 12, 15, and 18.
> The sum of these multiples is 78.
> Write a program that can find the sum of the multiples of a given set of
> numbers.

And my solution:

```elixir
defmodule SumOfMultiples do
  @doc """
  Adds up all numbers from 1 to a given end number that are multiples of the factors provided.
  """
  @spec to(non_neg_integer, [non_neg_integer]) :: non_neg_integer
  def to(limit, list) do
    2..limit - 1
      |> Enum.filter(fn(n) -> Enum.any?(list, &(rem(n, &1) == 0)) end)
      |> Enum.sum
  end
end
```

I like that this solution iterates over every number in the list just one time, because it stays performant at scale. I like that it uses `Enum.any?` and exploits the boolean that method returns. I like that it uses Elixir's shorthand convention in the second anonymous block, a feature I'm still getting used to.

A possible improvement would be to move that second anonymous function into a private method. The benefit of that approach is that it would have allowed me to use Elixir conventional anonymous functions twice, with something like `defp factor?`.

This brings me 13/61 (21%) of the way through this track. James Edward Gray has been my inspiration for this learning strategy, and I'm enjoying taking my time, learning the conventions, and reading through the docs in no particular hurry. I would love to be put on an Elixir client project sometime this year.