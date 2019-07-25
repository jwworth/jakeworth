---
title: 'Writing Elixir Sigils'
date: '2016-07-04T15:12:44-05:00'
---

Sigils are a mechanism for working with textual representations in Elixir. If you've ever made an array of Strings in Ruby with `%w()`, the API is similar.

A neat feature of sigils is that we can make custom variants, or override existing Kernel variants. The latter is generally discouraged.

### Creating a Sigil

Here's some code I wrote for an exercise, defining a new sigil, `u`:

```elixir
defmodule SigilWriter do
  @moduledoc """
  Provides a module for creating new sigils.
  """

  @doc """
  Defines the new sigil function for `u`.
  """
  def sigil_u(content, _opts) do
    content
    |> String.split
    |> Enum.map(&String.downcase/1)
  end

  @doc """
  Calls the `u` sigil.
  """
  def split_and_downcase(content) do
    ~u(#{content})
  end
end
```

The `sigil_u` function defines the new `u` sigil— `u` is just a convenience method. This function takes the content, splits it, and downcases each word in the list. This only works because `u` is not already a defined sigil in Elixir.

Custom sigil definitions are local to their module, so to use this new sigil, we'll have to import the module or call it from inside the module. I chose the latter:

```elixir
iex(1)> SigilWriter.split_and_downcase("SHUT IT DOWN")
["shut", "it", "down"]
```

### Overriding a Sigil

Next, I wrote some code to override an existing sigil:

```elixir
defmodule SigilOverrider do
  @moduledoc """
  Provides a module for overriding Kernel sigils.
  """
  import Kernel, except: [sigil_w: 2]

  @doc """
  Overrides the `w` sigil function.
  """
  def sigil_w(_content, _opts) do
    "We broke it."
  end

  @doc """
  Calls the `w` sigil override.
  """
  def broken_word_list do
    ~w(did we break it?)
  end
end
```

For the override to work, we need to import all of Kernel, *except* for the sigil we want to redefine, `sigil_w` with two arguments. My redefinition of `sigil_w` to just returns a string, ignoring all arguments.

Once again, we can only call this kind of function by importing it or from within the module, which `broken_word_list` does. Here it is in action:

```elixir
iex(1)> SigilOverrider.broken_word_list
"We broke it."
```

I chose the output `"We broke it."` to reiterate the point that overriding a sigil is not recommended.
