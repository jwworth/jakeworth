# [jakeworth][production-url]

This is the source code for my developer's blog. It is forked from the [Gatsby blog
starter][blog-starter].

Here's my intention, from the [first post][first-post].

> I've been writing code for a few years now, and am proud to be launching my
> own developer's blog.
>
> The developer’s blog is a time-honored tradition in the world of software,
> and I am indebted to the many great programmers whose blogs I read. Our
> community is incredible at sharing information. My goal with this blog is to
> provide something of similar value, while building a record of the solutions
> I've found for future reference.
>
> I am a web developer working in Ruby on Rails, but am interested in a broad
> range of topics, including responsive design, performance, testing, database
> management, continuous integration, source control, open source contribution
> and operating systems, automation, 'startup life', and much more. I hope to
> use this platform to share the challenges and triumphs I've experienced in
> front of a computer screen. Thank you for reading.
>
> *Feb 9, 2014*

### Setup

To run in development mode:

```
$ yarn dev
```

To run in production mode:

```
$ yarn prod
```

Generate a new blog post in Vim (requires [vim-projectionist][projectionist]):

```
:Eblog my-title-slug
```

### Testing

Run the [Cypress][cypress] integration tests:

```
$ yarn test
```

### License

This project is released under the [MIT License][mit].

[blog-starter]: https://github.com/gatsbyjs/gatsby-starter-blog
[cypress]: https://www.cypress.io/
[first-post]: https://www.jakeworth.com/hello-world
[mit]: http://www.opensource.org/licenses/MIT
[production-url]: https://www.jakeworth.com/
[projectionist]: https://github.com/tpope/vim-projectionist
