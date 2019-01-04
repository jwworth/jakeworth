---
title: 'Server Side Sorting'
date: '2016-06-28T15:02:26-05:00'
---

Recently a friend asked me a question about sorting in Rails, and I thought I'd share my
answer here:

> I'm working on an app that displays movies.
> The index page simply lists all movies in a table `%table#movies` in HAML.
> There is a clickable 'Movie Title' header above the list of movies and when
> clicked, the page should reload but in alphabetical order. Therefore I assume
> I need to use `.order(:title)` somewhere in the app. I was able to simply order
> all movies when the page loads by doing the following in `movies_controller.rb`:
>
> ```ruby
> def index
>   @movies = Movie.all.order(:title)
> end
> ```
>
>  But I need it to execute when the following is clicked from the `index.html.haml` page.
>
> ```ruby
> %th= link_to('Movie Title', '/')
> ```

This problem is a bit retro. In the Age of JavaScript we typically push this
type of work down to the client-side, and don't bother the server with repeated requests to reorganize data. However, it's easy to do on the server-side, too.

Here's how I'd tackle this problem.

### Send a Parameter

```ruby
# app/views/movies/index.html.haml

%h1= link_to 'Movie Title', root_path(sort: true)
```

This utilizes two Rails conventions, a named path (`root_path` is synonymous
with `'/'`), and a query string
[parameter](http://guides.rubyonrails.org/action_controller_overview.html#parameters).

When the link is clicked, a parameter will be appended to the URL
(`http://yoursite.com/?sort=true`). That parameter will be available in the
controller action, and we'll use it to sort the movies. As a side note, this detail can
be used to quickly iterate on changes, as you can type your parameters directly
into the browser address bar.

### Sort Based on Parameter

Here's the controller code:

```ruby
# app/controllers/movies_controller.rb

def index
  @movies = Movies.all

  if params[:sort]
    @movies = @movies.order(:title)
  end
end
```

This will always define `@movies` as all movies, unless the query parameter
`sort` is true. When true, it will redefine `@movies` as itself, but ordered by
title.

This is **server-side sorting**, and it has many uses. The parameter could be 
`true`, or it could be set to `title`, `lead_actor`, `director`, etc., further refining
our search results.

Finally, while this solution is illustrative for homework, it's not yet
production grade, because it introduces a security vulnerability. Right now we
are accepting any value for `sort`, which exposes us to *evil code injection*. Rails solved this
with something called [strong parameters](http://guides.rubyonrails.org/action_controller_overview.html#strong-parameters),
an important topic beyond the scope of the problem.
