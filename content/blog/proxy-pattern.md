---
title: 'Proxy Pattern'
date: '2021-02-26T00:00:00-06:00'
---

I had the opportunity recently to implement a simple version of a proxy class.
In this post, I'd like to talk about what a proxy class is, and share my
implementation.

Proxies reflect a _service interface_. The proxy must match the interface of
its _service object_, the thing it is proxying. If the service object quacks,
so must the proxy.

Proxies hold their service object in a reference called a _reference field_.
This is how proxies memoize their service object and delegate requests.

Another feature of a proxy is supporting methods. These can report information,
handle side effects, and more. Often, these methods are the reason for building
the proxy.

Here's my implementation, and then again with comments.

```ruby
class Proxy
  def initialize(service_object)
    @call_history = []
    @service_object = service_object
  end

  def method_missing(method, *args)
    @call_history.push(method)
    if @service_object.respond_to?(method)
      @service_object.send(method, *args)
    else
      raise NotImplementedError
    end
  end

  def times_called(method)
    @call_history.count { |called| called == method }
  end
end
```

```ruby
class Proxy
  def initialize(service_object)
    @call_history = [] # Support our supporting methods
    @service_object = service_object # Creates reference field.
  end

  def method_missing(method, *args) # Catch missing methods.
    @call_history.push(method) # Record every call.
    if @service_object.respond_to?(method) # 🪄 Delegate calls.
      @service_object.send(method, *args)
    else
      raise NotImplementedError
    end
  end

  def times_called(method) # 👏 Supporting methods
    @call_history.count { |called| called == method }
  end
end
```

For a deeper dive, check out [Proxy in Ruby][proxy] on 'Refactoring Guru'. It's
an outstanding resource.


[proxy]: https://refactoring.guru/design-patterns/proxy/ruby/example
