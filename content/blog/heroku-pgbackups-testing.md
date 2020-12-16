---
title: 'Heroku PGBackups Testing'
date: '2014-08-06T16:21:59-05:00'
---

We recently moved some of our environments, including their PostgreSQL databases, to Heroku.  Heroku differs from a basic Linux server in many ways, and we wanted to ensure that we could restore the database in an emergency.

The key questions to answer were:

* Do we have automated backups?
* Does everyone on my team know how to quickly restore a backup?
* Do the backups work?

My approach was to create a test database for the app, the same size and configuration as the production database, then restore a backup of the production database onto it using the Heroku addon 'pgbackups'.  This is the checklist of steps I came up with.

First, provision a new test database for the app.

```
$ heroku addons:add heroku-postgresql:standard-yanari --app my-custom-app
Adding heroku-postgresql:standard-yanari on my-custom-app... done, v77 ($50/mo)
Attached as HEROKU_POSTGRESQL_GREEN_URL
The database should be available in 3-5 minutes.
 ! The database will be empty. If upgrading, you can transfer
 ! data from another database with pgbackups:restore.
Use `heroku pg:wait` to track status.
Use `heroku addons:docs heroku-postgresql` to view documentation
```

Note, the new database is known as 'HEROKU_POSTGRESQL_GREEN_URL'; for reference, the production database is known as 'HEROKU_POSTGRESQL_CYAN_URL'.

Next, turn on maintenance mode to prevent users from modifying the database.

```
$ heroku maintenance:on --app my-custom-app
```

You can verify this by going to the website and looking for a maintenance page.

Next, fire up a Rails console.  We are going to both count the users and create a new user as a checksum against the test database.  If it's a legitimate copy, the data should transfer.

```
$ heroku run rails c --app my-custom-app
Running `rails c` attached to terminal... up, run.5324
Loading production environment (Rails 3.2.18)
irb(main):001:0> User.count
   (2.2ms)  SELECT COUNT(*) FROM 'users;
=> 2411
irb(main):002:0> User.create!(password: 'password', password_confirmation: 'password', email: 'myname2411@mycompany-test.com', login: 'myname2411')
```

Notice that the username contains the user count (2411), a hack to help me remember it later.

Next, verify that we have backups running regularly (I set them to run daily a few weeks ago):

```
$ heroku pgbackups --app my-custom-app
ID    Backup Time                Status                                Size    Database
----  -------------------------  ------------------------------------  ------  -----------------------------------------
b001  2014/07/28 16:47.56 +0000  Finished @ 2014/07/28 16:48.10 +0000  13.2MB  HEROKU_POSTGRESQL_CYAN_URL (DATABASE_URL)
a002  2014/07/31 04:15.10 +0000  Finished @ 2014/07/31 04:15.27 +0000  13.2MB  DATABASE_URL
a003  2014/08/01 04:28.41 +0000  Finished @ 2014/08/01 04:29.02 +0000  13.2MB  DATABASE_URL
a004  2014/08/02 04:15.45 +0000  Finished @ 2014/08/02 04:16.01 +0000  13.2MB  DATABASE_URL
a005  2014/08/03 05:23.54 +0000  Finished @ 2014/08/03 05:24.07 +0000  13.2MB  DATABASE_URL
a006  2014/08/04 05:28.25 +0000  Finished @ 2014/08/04 05:28.50 +0000  13.3MB  DATABASE_URL
a007  2014/08/05 04:16.15 +0000  Finished @ 2014/08/05 04:16.37 +0000  13.3MB  DATABASE_URL
a008  2014/08/06 05:45.21 +0000  Finished @ 2014/08/06 05:45.35 +0000  13.3MB  DATABASE_URL
```

Looks like we have a bunch of daily backups.

Next, capture a backup of the database:

```
$ heroku pgbackups:capture --app my-custom-app

HEROKU_POSTGRESQL_CYAN_URL (DATABASE_URL)  ----backup--->  b002

Capturing... done
Storing... done

```

Then, verify that the backup exists:

```
$ heroku pgbackups --app my-custom-app
ID    Backup Time                Status                                Size    Database
----  -------------------------  ------------------------------------  ------  -----------------------------------------
b001  2014/07/28 16:47.56 +0000  Finished @ 2014/07/28 16:48.10 +0000  13.2MB  HEROKU_POSTGRESQL_CYAN_URL (DATABASE_URL)
a002  2014/07/31 04:15.10 +0000  Finished @ 2014/07/31 04:15.27 +0000  13.2MB  DATABASE_URL
a003  2014/08/01 04:28.41 +0000  Finished @ 2014/08/01 04:29.02 +0000  13.2MB  DATABASE_URL
a004  2014/08/02 04:15.45 +0000  Finished @ 2014/08/02 04:16.01 +0000  13.2MB  DATABASE_URL
a005  2014/08/03 05:23.54 +0000  Finished @ 2014/08/03 05:24.07 +0000  13.2MB  DATABASE_URL
a006  2014/08/04 05:28.25 +0000  Finished @ 2014/08/04 05:28.50 +0000  13.3MB  DATABASE_URL
a007  2014/08/05 04:16.15 +0000  Finished @ 2014/08/05 04:16.37 +0000  13.3MB  DATABASE_URL
a008  2014/08/06 05:45.21 +0000  Finished @ 2014/08/06 05:45.35 +0000  13.3MB  DATABASE_URL
b002  2014/08/06 20:10.11 +0000  Finished @ 2014/08/06 20:10.42 +0000  13.3MB  HEROKU_POSTGRESQL_CYAN_URL (DATABASE_URL)
```

It's the last backup on the list, 'b002'.  Next, restore the backup onto the empty test database.

```
$ heroku pgbackups:restore HEROKU_POSTGRESQL_GREEN_URL b002 --app my-custom-app

HEROKU_POSTGRESQL_GREEN_URL  <---restore---  b002
                                             HEROKU_POSTGRESQL_CYAN_URL (DATABASE_URL)
                                             2014/08/06 20:10.10 +0000
                                             13.3MB

 !    WARNING: Destructive Action
 !    This command will affect the app: my-custom-app
 !    To proceed, type 'my-custom-app' or re-run this command with --confirm my-custom-app

> my-custom-app

Retrieving... done
Restoring... done
```

Next, promote the test database, telling Heroku to direct requests there.

```
$ heroku pg:promote HEROKU_POSTGRESQL_GREEN_URL --app my-custom-app
Promoting HEROKU_POSTGRESQL_GREEN_URL to DATABASE_URL... done
```

To verify that this database is operational and valid, fire up another Rails console.

```
$ heroku run rails c --app my-custom-app
Running `rails c` attached to terminal... up, run.5324
Loading production environment (Rails 3.2.18)
irb(main):001:0> User.count
   (2.6ms)  SELECT COUNT(*) FROM 'users'
=> 2412
irb(main):002:0> User.last
  User Load (3.9ms)  SELECT 'users'.* FROM 'users' ORDER BY 'users'.'id' DESC LIMIT 1
=> #< id: 2435, login: 'myname2411', email: 'myname2411@mycompany-test.com'>
```

The user count is 2412, one more than the production database was before I created my user.  The user is there, too.

I also verified through the UI that the checksum user existed (you must turn maintenance mode off to do this, of course).  If you want to skip this step, continue by promoting the production database:

```
$ heroku pg:promote HEROKU_POSTGRESQL_CYAN_URL --app my-custom-app
Promoting HEROKU_POSTGRESQL_CYAN_URL to DATABASE_URL... done
```

And disable maintenance mode:

```
$ heroku maintenance:off --app my-custom-app
Disabling maintenance mode for my-custom-app... done
```

Delete your test database and the test is complete.

Heroku has been a great vendor so far, with responsive customer service, but I don't take anything for granted when it comes to the database. Completing this process was a valuable step in moving forward with the platform.
