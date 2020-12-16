---
title: 'Rails Action Name Method'
date: '2015-10-07T17:58:46-05:00'
---

Today I was trying to control what rendered on a page based on which controller action called it, and discovered the `action_name` method. It's located in `actionview`:

```ruby
pry> method(:action_name).source_location
=> ["/Users/jake/.rvm/gems/ruby-2.2.3/gems/actionview-4.2.4/lib/action_view/helpers/controller_helper.rb", 10]
```

Add this to your view code, and it you'll get the relevant action:

```ruby
pry> action_name
=> "index"
```

Same partial, different context:

```ruby
pry> action_name
=> "drafts"
```

This method would allow conditionals like this (HAML):

```ruby
- if action_name == 'index'
  Welcome to the index.
- else
  Welcome to the drafts.
```

https://github.com/rails/rails/blob/master/actionview/lib/action_view/helpers/controller_helper.rb#L10
