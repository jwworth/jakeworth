---
title: 'After Commit Callback'
date: '2015-10-05T17:08:11-05:00'
---

Today I used a pretty awesome Rails callback, `after_commit`.

`after_commit` executes after a database transaction completes, making it ideal for third-party integrations. Social media and chat applications come to mind.

Here is an example:

```ruby
after_commit :notify_twitter, on: [:create, :update], unless: -> { draft? || tweeted }
```

Human version: post to twitter whenever a thing is created or updated (or touched via the `touch` method), unless it's a draft or it's already been tweeted. Don't post on `destroy`.

I like the granular control of this callback, and think it's better in this case than `after_save` because it covers several more situations. If it fails, that needs to be handled independently from the transaction.

http://apidock.com/rails/ActiveRecord/Transactions/ClassMethods/after_commit
