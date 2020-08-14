---
title: 'How I Clean Up JavaScript Dependencies'
date: '2020-08-03T00:00:00-00:00'
---

Unused dependencies are bad: they increase the size of your project, slow down
your processes, require upgrades, and send incorrect messages to fellow
developers about what's important.

Make your project better by periodically auditing your dependencies, and
removing those that are unused. If a dependency is in your bundle and is not
being used right now, get rid of it! Legacy codebases are littered with
rainy-day libraries. Rip them out and start again.

### Cleanup JavaScript dependencies

For a JavaScript project, there are two techniques I've used: manual, and what
I'll call library-assisted.

Manual cleanup means reading your JavaScript manifest (usually `package.json`)
and looking for libraries that may be unused. Read the docs and figure out how
the library is imported, and then search your codebase with a tool like Ag, Rg,
or Ack for such an import statement. Run your tests, too. If you can't find an
import, and nothing breaks, you might have a candidate for removal.

To speed up this process, consider using a library. One I'd recommend is
[depcheck](https://www.npmjs.com/package/depcheck). depcheck scans your
codebase for unused libraries. Here's how to use it:

```zsh
# Install globally
$ npm install -g depcheck

# Run the executable from the same directory where
# your `package.json` lives
$ depcheck .
```

depcheck prints a list of potentially unused libraries like this:

```
* gatsby-remark-smartypants
* gatsby-transformer-remark
* gatsby-transformer-sharp
* prismjs
* react-typography
```

Pick a library from the list and try to figure out yourself it's used. Is it
imported? Do tests or builds break when you remove it? If not, remove it with:

```
$ npm uninstall <unused dependency>
```

Enjoy your smaller bundle size, and easier-to-understand codebase.
