---
title: 'The N + 1 Problem'
date: '2015-02-22T02:30:20-06:00'
---

Recently, I was thinking about the N + 1 problem.

N + 1 is a performance issue in a web application, where a method call unleashes a torrent of database queries. Take this method, which loads all users:

```ruby
def index
  @users = User.all
end
```

Simple enough, but call some records in the view associated with each user, such as 'friends' and 'reviews', and Rails builds a SQL query for each user, each user's friends, and each user's reviews. This is redundant, and with a big database, unacceptably slow. This is an N + 1 problem.

After some reading, I decided that the best way to learn how to fix an N + 1 problem would be to fix one. I started building a web app.

How do you create a slow program, on purpose? It should have several associated records, a large data set, and a controller that carelessly dumps all that data into a view. But it also needs to be measurable, so it should be simple, easy to run, and devoid of other factors that could affect performance like styling and scripts.

The result is 'N Plus': (<a href='https://github.com/jwworth/n-plus'>https://github.com/jwworth/n-plus</a>). 'N Plus' earns its name, featuring a substandard page load time of about seven seconds.

In the users controller for 'N Plus', I tested and measured several common Rails solutions. Ultimately, the README for this app became its own blog post. I'll let that document speak for itself.

<a href='https://github.com/jwworth/n-plus/blob/master/README.md'>README</a>

Thank you to everybody who gave me feedback during this project.
