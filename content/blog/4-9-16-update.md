---
title: '4-9-16 Update'
date: '2016-04-09T15:54:44-05:00'
---

Consider me inspired:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I want you to write blog posts about what you&#39;re working on / learning right now so I can learn from you. (yes, you!)</p>&mdash; Julia Evans (@b0rk) <a href="https://twitter.com/b0rk/status/718881881081704450">April 9, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Here's what I've been learning and working on.

### Learning

My learnings live here:

https://til.hashrocket.com/authors/jakeworth

I use 'Today I Learned' as a platform to post tiny things I pick up each day while pair programming with the awesome people at [Hashrocket](https://hashrocket.com). My epiphanies are all over the map, with lots of Vim, Postgres, Ruby, Rails, and JavaScript.

'Today I Learned' is also the first open-source project I've maintained, and that has been a tremendous learning experience. Interacting with users via pull requests, issues, and Twitter, trying to build new things while maintaining previous functionality, maintaining a live web app with thousands of visitors that also serves my coworkers (at weird hours), and striking a balance between portability and personal usability have been issues I've grappled with. I have great respect for open source maintainers and communities. It's hard.

Technology-wise, I've been experimenting with React.js and Rust. I think React.js may have come as close as any frontend framework ever to nailing some of the hard parts of complex views, and it's fun to use. Rust is on my radar because of an inspiring Ancient City Ruby talk by Steve Klabnik I saw, my broad curiosity in lower-level programming, and general buzz among the Ruby community.

I keep a list of the tools I stumble across that have helped me. The Rust and React sections have been growing:

https://github.com/jwworth/resources

### Working On

This year I've been working on Rails applications with Postgres databases and React.js on the front end. This stack is pretty killer.

On the social side, I've been co-organizing [Vim Chicago](http://www.meetup.com/Vim-Chicago/). I submit that it is *the* nerdiest Meetup in Chicago. That's also been a huge learning experience. Recent observations: if you schedule a Meetup consistently (every month, for instance) your attendance numbers will rise, well-timed Tweets are huge, lightning talks are a great way to engage newer members, and vegetarian pizza gets eaten surprisingly quickly.

Last month I submitted my first CFP proposal ever, to [Windy City Rails](https://windycityrails.com/). The topic is apprenticeship projects, something I'm passionate about as a former Hashrocket apprentice and current mentor to one. Pushing the 'submit' button on the CFP form was tough! The notification emails should be coming out soon. 

### Conclusion

Lots of stuff going on. Thank you to everybody who inspires and helps me. I will end this post with one of my favorite TILs from this year ([original post here](https://til.hashrocket.com/posts/eeedb8dda0-variable-hoisting-in-javascript)):

---

*Variable Hoisting in JavaScript*

I while back I wrote about [variable hoisting in Ruby](https://til.hashrocket.com/posts/c0c0dd4ef8-variable-hoisting-in-ruby). This is when the value of a variable is 'hoisted' to the top of its scope with value `nil`, rather than left undefined, even if that variable is protected from ever being declared by (for example) an always-false conditional.

Today I learned that JavaScript shares this behavior.

Here's an example. Let's declare two global variables:

```javascript
$ validGlobal = 'we need this';
=> "we need this"
$ questionableGlobal = 'aggressively scoped';
=> "aggressively scoped"
```

Then, make a function that declares a local variable with the same name as one of our globals:

```javascript
$ var example = function() {
  console.log(validGlobal);
  console.log(questionableGlobal);

  var questionableGlobal = 'uh oh';

  console.log(questionableGlobal);
}();

=> "we need this"
=> undefined
=> "uh oh"
```

`validGlobal` logs its global value, as expected. But because `questionableGlobal` is also declared as a local variable in this scope, when we try to log it before that declaration occurs, it returns `undefined`, rather than the global value. This is to protect us from raising a `ReferenceError`— `questionableGlobal` has been 'hoisted' like a pirate flag.

This is a noteworthy feature of both Ruby and JavaScript.
