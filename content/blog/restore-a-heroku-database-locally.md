---
title: 'Restore a Heroku Database Locally'
date: '2020-10-11T00:00:00-06:00'
---

Sometimes a post is just for me, and this is likely one of those posts. Several
of my open source projects run on Heroku, and I often want to pull down a copy
of the production database and restore it locally. There are some
Heroku-proprietary commands required to do this, and I often find myself
visiting Google or Stack Overflow to get it done. These days, this is explained
in the Heroku docs, but in case that goes away, here's how to do the restore.

These commands assume a Postgres database.

First, capture a backup and download it.

```
$ heroku pg:backups:capture
$ heroku pg:backups:download
```

Next, create a local database to restore to. I don't want to lose my
development data!

```
$ createdb prod_backup
```

And finally, restore:

```
$ pg_restore --verbose --clean --no-acl --no-owner -h localhost -d prod_backup latest.dump
```

Happy databasing.
