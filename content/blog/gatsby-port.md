---
title: 'Porting from Rails to Gatsby'
date: '2019-01-05'
---

Jake Worth Dot Com power-users will notice that I've revamped this site. This
week I transitioned this blog from a Ruby on Rails app to
[Gatsby](https://www.gatsbyjs.org/). My blog is now a React app with
pre-rendered markdown.

In five years I've taken this site from WordPress to Rails, and now to Gatsby.

Why change, twice? For me, blogging has a side benefit of giving me my own CMS
to maintain. I feel driven to ensure that platform is cutting-edge, fun to use,
and relevant to my field. I've been writing 100% React for almost two years,
and so this transition feels inevitable.

What do I lose in the trade? I lose a Rails app to maintain, and a handful of
CRUD features I built. Right now that's an acceptable tradeoff. The Rails code
lives on here:

https://github.com/jwworth/jakeworth.com

I'd like to say on the record that Rails is still 'cool'.

The transition was really simple; I dumped my PostgreSQL database into Markdown
files with a Ruby script, downloaded the [Gatsby Starter
Blog](https://github.com/gatsbyjs/gatsby-starter-blog), added the markdown
files, and pushed to Heroku.

Now that I'm in production, I have some work left to do. I'd like add tests,
CI, and type support via TypeScript, so I can have more confidence in the code.

Onward! 🎉
