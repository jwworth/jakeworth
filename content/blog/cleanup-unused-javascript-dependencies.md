---
title: 'Cleanup Unused JavaScript Dependencies'
date: '2020-08-03T00:00:00-00:00'
---

Unused dependencies are bad: they increase the size of your project, slow down
your processes, require upgrades, send incorrect messages to fellow developers.

Make your project better by periodically auditing your dependencies. If a
dependency is in your bundle and is not being used right now, get rid of it!
Legacy codebases are littered with 'rainy-day' libraries that never get used.
Rip them out and start again.

### Cleanup JavaScript dependencies

For a JavaScript project, there are two techniques I've used: manual and library-assisted.

Manual cleanup means reading your JavaScript manifest (usually `package.json`)
and looking for libraries that may be unused. Read the docs and figure out how
the library is imported, and then search your codebase with a tool like Ag, Rg,
or Ack for such an import. Run your tests, too. If you can't find an import,
and nothing breaks, you might have a candidate for removal.

To speed up this process, consider using a library. One I'd recommend is
[depcheck](https://www.npmjs.com/package/depcheck). depcheck scans your
codebase for unused libraries. Here's how to use it:

```
# Install globally
$ npm install -g depcheck

# Run executable from the dir where your `package.json` lives
$ depcheck .
```

depcheck prints a list like this:

```
* gatsby-remark-smartypants
* gatsby-transformer-remark
* gatsby-transformer-sharp
* prismjs
* react-typography
```

Pick a library and try to figure out yourself it's used. Is it imported? Do
tests or builds break when you remove it? If not, remove it with:

```
$ npm uninstall <unused dependency>
```

Happy JavaScripting.
