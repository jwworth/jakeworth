---
title: Clone All of an Organization's Git Repos
date: "2019-06-11T22:12:03.284Z"
tags:
  - git
---

Today, using parts of this [Gist](https://gist.github.com/caniszczyk/3856584) I
found a command to clone all the repos in a Github organization. Here it is,
tested on Ruby 2.3:

```
$ curl -u <your-username> -s |\
https://api.github.com/orgs/<target-org>/repos?per_page=200 | \
ruby -rubygems -e 'require "json"; JSON.load(STDIN.read).each | \
{ |repo| %x[git clone \"#{repo["ssh_url"]}\" ]}'
```

Change `ssh_url` to `html_url` depending on your privileges and SSH
configuration.

This command allowed me to perform some organization-wide searches on an
organization with dozens of repos.
