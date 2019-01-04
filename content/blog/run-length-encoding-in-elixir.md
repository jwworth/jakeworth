---
title: 'Run Length Encoding in Elixir'
date: '2016-07-31T13:34:10-05:00'
---

I've been working through the Elixir challenges on [Exercism.io](http://exercism.io/), to learn the language in the same way James Edward Gray recently attempted ([link](https://soundcloud.com/elixirfountain/elixir-fountain-james-edward-gray-2016-05-31)). If you haven't tried the site, it's awesome. You'll learn TDD, how to install and run different languages, respond to comments, and most importantly, write code in an unfamiliar language.

Yesterday's assignment was to implement a [Run Length](https://en.wikipedia.org/wiki/Run-length_encoding) encoder and decoder in Elixir.

Here's my implementation:

```elixir
defmodule RunLengthEncoder do
  @doc """
  Generates a string where consecutive elements are represented as a data value and count.
  "HORSE" => "1H1O1R1S1E"
  For this example, assume all input are strings, that are all uppercase letters.
  It should also be able to reconstruct the data into its original form.
  "1H1O1R1S1E" => "HORSE"
  """
  @spec encode(String.t) :: String.t

  def encode(string) do
    Enum.chunk_by(String.split(string, "", trim: true), fn(l) -> l end)
    |> Enum.map(fn(l) ->
      "#{length(l)}#{List.first(l)}"
    end)
    |> Enum.join
  end

  @spec decode(String.t) :: String.t
  def decode(string) do
    String.split(string, ~r/()[A-Z]()/, on: [1,2], trim: true)
    |> Enum.chunk(2)
    |> Enum.map(fn([number|letter]) ->
      String.duplicate(List.to_string(letter), String.to_integer(number))
    end)
    |> Enum.join
  end
end
```

### Encoding

First off, this was a tough problem that I spent several hours solving. So far I've tried to tackle every Elixir project using recursion and pattern matching. While both are amazing features of the language, sometimes they just don't make sense. Writing four versions of `encode` and `decode` feels a bit heavy-handed to me, given the power of the the standard library. That said, I saw some clever solutions using that style on the site.

`encode` starts off with `Enum.chunk_by`. I chose to explicitly call `Enum` every time, rather than import the module— following the 'better to be explicit than magic' ethos of this language.

`Enum.chunk_by` is cool, because it breaks a list into parts every time its function's results change. My function, `fn(l) -> l end`, cares if the enumerated item itself changes. I haven't figured out a shorter way to write this. The function thus breaks up a list into parts where each part is the same.

The first line also taught me about `trim: true`, a weird gotcha I wrote about here:

https://til.hashrocket.com/posts/ebe936f0a5-rubylike-split-in-elixir

After that it's pretty straightforward: build a string of the count and letter, and join them together. Voila, `1H1O1R1S1E`.

I would have liked to use pattern matching in my `map` to get the first item, rather than `List.first`, but I needed the whole list inside the function to find the length.

### Decoding

The decoding function starts off with a unique split that I learned reading Jose Valim's comments on an Elixir Talk thread. By adding captures before and after my `[A-Z]` regex, and `on: [1,2]`, I split on capital letters while keeping those delimiters in the list. This takes advantage of the predictable nature of RLE— the code is always number, capital letter.

Next I `chunk` the list into groups of two, the number and the letter.

With this list, building a string is easy. I was glad to use pattern matching here. It remains one of my favorite Elixir features.

`String.duplicate/2` was a hack to get around the fact that string multiplication in Elixir doesn't seem to be possible. I do miss Ruby's excellent string manipulation, but it is sort of strange that string multiplication works at all, the more I think about it. Elixir seems to be more rigid about types.

### Chicago Elixir Update!

This was a fun problem! After a [Chicago Elixir](https://www.meetup.com/ChicagoElixir) hack night, I had a chance to learn and refactor this solution.

```elixir
defmodule RunLengthEncoder do
  @doc """
  Generates a string where consecutive elements are represented as a data value and count.
  "HORSE" => "1H1O1R1S1E"
  For this example, assume all input are strings, that are all uppercase letters.
  It should also be able to reconstruct the data into its original form.
  "1H1O1R1S1E" => "HORSE"
  """
  @spec encode(String.t) :: String.t

  def encode(string) do
    Enum.chunk_by(String.graphemes(string), fn(l) -> l end)
    |> Enum.map_join(fn([h|_] = list) ->
      "#{length(list)}#{h}"
    end)
  end

  @spec decode(String.t) :: String.t
  def decode(string) do
    String.split(string, ~r/()[A-Z]()/, on: [1,2], trim: true)
    |> Enum.chunk(2)
    |> Enum.map_join(fn([number|letter]) ->
      String.duplicate(List.to_string(letter), String.to_integer(number))
    end)
  end
end
```

Here's the [permalink](http://exercism.io/submissions/78a166eb32db46768897e0b9732a7ef1).
