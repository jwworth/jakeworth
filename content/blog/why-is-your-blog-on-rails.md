---
title: 'Why is Your Blog on Rails?'
date: '2016-07-04T18:29:17-05:00'
---

> Why is your blog on Rails?

I've been asked this several times. With all the great alternatives such as Github pages and Jekyll, why choose to maintain a Rails application for blogging? Why go to the trouble?

It's a fair question. One I occasionally ask myself, usually after building a Middleman app. Now that I'm into Phoenix, the question looms even larger. Here's my answer, distilled from several emails and conversations.

#### Rails is My Business

I initially tried to capture my inspiration for this app while I was writing it, in this [post](http://www.jakeworth.com/new-blog). To summarize, 90% of my work is in Rails, and wanted my blog to be able to showcase my abilities.

#### Control

If I had to add thoughts since writing that post, I want total control over my blog. To be able to do weird queries on my posts that only a relational database can support. To be free to deploy it anywhere. I want a UI where I can update posts and projects without pushing any code. I want to be able to use any CSS framework, any JavaScript libraries, any analytics or tracking software, any monitoring software, that Rails supports. I want to add social integration that I can control. I'd imagine Github Pages supports some of these, but not all of them.

Anytime you are working with a proprietary framework, your options are limited to the features they choose to implement.

Github pages seem great. Go that route to get something on the internet. Having a development blog has changed the course of my career in many ways. I just happen to personally enjoy the challenge and freedom of doing it myself, from (relative) scratch.

#### Experimentation

These days, my blog is a playground. Anytime I have a third party integration, library, or gem release I want to try out in client production work, it goes in this blog first. I upgraded to the Rails 5 beta long before the official release— it's a useful tool that makes my professional work better.

#### Conclusion

I'd suggest any developer maintain a long-running side project like this blog. Spinning up one-off projects is a lot of fun. But the challenge of maintaining something long-term, over multiple major framework releases, is rewarding and educational.
