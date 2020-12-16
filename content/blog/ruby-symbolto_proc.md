---
title: 'Ruby Symbol#to_proc'
date: '2014-10-31T13:39:25-05:00'
---

Explore a Rails app, and you might see something like this:

```ruby
class People < ActiveRecord::Base

  def self.names
    find(:all).collect(&:name)
  end
end
```

What is that `&:`, you might be wondering?  It's shorthand for this:

```ruby
class People < ActiveRecord::Base

  def self.names
    find(:all).collect { |p| p.name }
  end
end
```

Often in Ruby, we are using a method that invokes a given block.  The methods `map`, `collect`, and `select` are just three examples.  To employ one of these methods, you might write something like this:

```ruby
[1,2,3,4,5].select { |num| num.odd? } #=> [1,3,5]
```

This is fine, but there is a more concise expression, known as the Ruby `Symbol#to_proc` method.  From the Ruby 2.1.3 <a href='http://www.ruby-doc.org/core-2.1.3/Symbol.html'>documentation</a>, the `to_proc` method 'returns a Proc object which respond to the given method by sym.'  Here it is in action:

```ruby
[1,2,3,4,5].select(&:odd?) #=> [1,3,5]
```

This takes the method named `odd?` as a symbol `:odd?` and invokes it as a Proc via the ampersand (`&`).  It's more concise, and gains value as you chain block-invoking methods.  Here is a contrived example to illustrate:

```ruby
[1,2,3,4,5].select { |num| num.odd? }.map { |num| num.to_f }.map { |num| num.to_s }
=> ['1.0', '3.0', '5.0']

[1,2,3,4,5].select(&:odd?).map(&:to_f).map(&:to_s)
=> ['1.0', '3.0', '5.0']
```

Try integrating this technique into your Ruby app.

I was surprised to find out that this was a Ruby method rather than a Rails method.  Although my examples above are pure Ruby, this method gets really useful in Rails when you start chaining ActiveRecord associations.  To me, that's where its power is fully realized.

As it turns it, this was actually a Rails method first, starting with 1.1.1 and deprecated after 2.3.8.  It was then merged into Ruby itself.

This type of cross-pollination between Rails and Ruby is part of why both technologies remain relevant.  It takes communication between core teams and responsiveness to users to make the right call about where a feature belongs.  I think this was successful, because `Symbol#to_proc` is valuable and should be available to any Ruby framework, not just Rails.
