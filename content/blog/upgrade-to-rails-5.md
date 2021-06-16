---
title: 'Upgrade To Rails 5'
date: '2016-05-31T08:53:31-05:00'
tags:
  - ruby
---

Today I upgraded this blog to the Rails 5 first release candidate. Here is the pull request where the changes were made:

https://github.com/jwworth/jakeworth.com/pull/5

I look forward to building on this platform and trying out the latest features. Please let me know if you notice irregularities. Thanks to the Rails 5 team and contributors for making this upcoming release possible!

### Update! (1/3/2017)

Turns out I missed a few steps.

The official Rails 5 upgrade guide was published around the time of my initial post; there were a lot of small nuances I missed. Kudos to the Rails Core team for making the upgrade so seamless that some of the details (such as replacing `ActiveRecord::Base` with an `ApplicationRecord`) could be ignored initially.

I keep this blog around (and [on Rails](/why-is-your-blog-on-rails)) for this exact reason– I get to live on the bleeding edge of releases with almost no consequence for jumping the gun. It supports my client work directly, because when I'm finally asked to upgrade a production Rails application to Rails 5 (which hasn't happened yet), I've already navigated the more complex challenges that lie ahead, on my own time.

Here's the pull request where I finished the upgrade tasks:

https://github.com/jwworth/jakeworth.com/pull/29
 
These two blog posts helped me along the way:

- https://hashrocket.com/blog/posts/how-to-upgrade-to-rails-5
- http://edgeguides.rubyonrails.org/upgrading_ruby_on_rails.html

Also, [Today I Learned](https://til.hashrocket.com) is soon to be on Rails 5! [Dorian Karter gets it done](https://github.com/hashrocket/hr-til/pull/116) yet again. Look for a deployed version (which should look and feel exactly the same) this week.

