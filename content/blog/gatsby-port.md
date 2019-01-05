---
title: 'Gatsby Port'
date: '2019-01-05'
---

Jake Worth Dot Com power users will notice that I've rewritten this site. This
week I transitioned the blog from a Ruby on Rails app to
[Gatsby](https://www.gatsbyjs.org/).

This is the third version of my blog; in five years it's transitioned from
WordPress to Rails, and now, to Gatsby.

Why change? For me, blogging has a side benefit of giving me my own CMS to
maintain and tweak. I feel driven to have that platform be cutting edge, fun,
and relevant. I've been writing 100% React for almost two years, and so this
transition feels inevitable.

What do I lose in the trade? I lose a Rails app to maintain, and a long list of
CRUD features I built. Right now that's an acceptable tradeoff. The Rails code
lives on here:

https://github.com/jwworth/jakeworth.com
 
I'd like to say on the record that Rails is still 'cool', and not 'dead'.

The transition was really simple; I dumped my PostgreSQL database into Markdown
files with a Ruby script, downloaded the [Gatsby Starter
Blog](https://github.com/gatsbyjs/gatsby-starter-blog), and pushed to Heroku.

Now that I'm in production, I have some work left to do. I'd like add tests,
CI, and type support via TypeScript, so I can have more confidence in the code.

Speaking of the code, here it is: https://github.com/jwworth/jakeworth.

Onward! 🎉
