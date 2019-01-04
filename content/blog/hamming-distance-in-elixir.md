---
title: 'Hamming Distance in Elixir'
date: '2016-09-11T21:15:36-05:00'
---

Today I solved the Exercism Hamming Distance problem in Elixir.

### Problem Description

*From Exercism:*

Write a program that can calculate the Hamming difference between two DNA strands.

A mutation is simply a mistake that occurs during the creation or
copying of a nucleic acid, in particular DNA. Because nucleic acids are
vital to cellular functions, mutations tend to cause a ripple effect
throughout the cell. Although mutations are technically mistakes, a very
rare mutation may equip the cell with a beneficial attribute. In fact,
the macro effects of evolution are attributable by the accumulated
result of beneficial microscopic mutations over many generations.

The simplest and most common type of nucleic acid mutation is a point
mutation, which replaces one base with another at a single nucleotide.

By counting the number of differences between two homologous DNA strands
taken from different genomes with a common ancestor, we get a measure of
the minimum number of point mutations that could have occurred on the
evolutionary path between the two strands.

This is called the 'Hamming distance'.

It is found by comparing two DNA strands and counting how many of the
nucleotides are different from their equivalent in the other string.

    GAGCCTACTAACGGGAT
    CATCGTAATGACGGCCT
    ^ ^ ^  ^ ^    ^^

The Hamming distance between these two DNA strands is 7.

### My Solution

```elixir
defmodule Hamming do
  @doc """
  Returns number of differences between two strands of DNA, known as the Hamming Distance.

  ## Examples

  iex> Hamming.hamming_distance('AAGTCATA', 'TAGCGATC')
  {:ok, 4}
  """
  @spec hamming_distance([char], [char]) :: non_neg_integer
  def hamming_distance(strand1, strand2) when length(strand1) != length(strand2) do
    {:error, "Lists must be the same length"}
  end

  def hamming_distance(strand1, strand2, acc \\ 0)
  def hamming_distance([h1|t1], [h2|t2], acc) do
    if h1 != h2, do: acc = acc + 1
    hamming_distance(t1, t2, acc)
  end

  def hamming_distance(_, _, acc) do
    {:ok, acc}
  end
end
```

### Notes

I wanted a solution that was 'classic Elixir', utilizing the unique features of the language I've learned so far. It starts with guard-clause-like `when` statement to filter out error cases, followed by a function that computes the solution via pattern matching and tail-call recursion, and finally a catch-all function to break the recursion and prepare the output.

The one-line method definition with a default argument statement (`acc \\ 0`) is something new I've been trying. The compiler complains if you omit this declaration.

All the test cases completed in 0.00 ms. For fun, I ran my solution against longer than 100-character strings, and could not produce a test run slower than 0.00 ms. Elixir's performance with linked lists is amazing.

Geneticists of the world, I'll be waiting for your call. ⚗
