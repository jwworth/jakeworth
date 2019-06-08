---
title: 'Reset an Ecto Heroku Postgres Database'
date: '2017-01-07T18:03:36-06:00'
---

We introduced some breaking database changes to our [Phoenix port](https://github.com/hashrocket/tilex) of [Today I Learned](https://til.hashrocket.com) on Friday; today I deployed them to staging. Resetting an Ecto Heroku database, with new seed data, turned out to be a little tricky, and I wanted to document what I learned.

This blog post assumes you already have the Heroku Toolbelt and an Ecto-supported application in production.

First, make sure you deploy the breaking changes:

```
$ git push <your_remote> master
```

To drop a Heroku database, first we need the name of the database. `DATABASE_URL` is specific enough if there's only one, but I think it's a best practice to reference the specific database you're attempting to destroy, every time.

```
$ heroku pg:info
```

This will return something like `Add-on: postgresql-subtle-59939`– that's the name of our database. Drop it with:

```
$ heroku pg:reset postgresql-subtle-59939
```

Next, migrate the database:

```
$ heroku run mix ecto.migrate
```

Finally, if you have database seeds, run them:

```
$ heroku run "POOL_SIZE=2 mix run priv/repo/seeds.exs"
```

`POOL_SIZE` refers to the number of connections your task can use. On a Heroku hobby-dev database, 20 connections are supported. A standard setup practice is to allocate most of them, like eighteen, for full-time use, via an environmental variable called `POOL_SIZE`. With eighteen connections occupied, two are available, which we will allocate to our seed task. Without this option, Ecto will attempt to open more than the available connections, and the task will fail.

That's it; enjoy your new, migrated, seeded database.

[Phoenix Heroku](http://www.phoenixframework.org/docs/heroku)

