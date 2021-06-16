---
title: 'New Feature Flags in Rails 5.1.3'
date: '2017-08-06T18:23:10-05:00'
tags:
  - ruby
---

Not long ago I created a new Ruby on Rails web application using the Rails 5.1.3 release. Our goal was a Rails API supporting a React.js frontend, and it couldn't have been easier. The Rails team has recognized this important design pattern, and is taking great strides to simplify the setup.

How? With some interesting feature flags. Here are three of my favorites. A few of these surfaced before 5.1.3, but they were all novel and delightful to me.

### Skip Yarn

```
[--skip-yarn], [--no-skip-yarn] # Don't use Yarn for managing JavaScript dependencies
```

As this flag implies, [Yarn](https://yarnpkg.com/en/) has replaced NPM as the default dependency manager for JavaScript in Rails. I mention this not to suggest using the flag, but rather to note this major shift if the OSS world towards Yarn.

### API

```
[--api], [--no-api] # Preconfigure smaller stack for API only apps
```

According to the [documentation](http://edgeguides.rubyonrails.org/api_app.html), this flag limits the browser-related middleware in your project, makes `ApplicationController` inherit from `ActionController::API` instead of `ActionController::Base`, and configures the generators to skip views, helpers, and assets when you generate a new resource.

### Webpack with Options

```
[--webpack=WEBPACK] # Preconfigure for app-like JavaScript with Webpack (options: react/vue/angular)
```

Passing the `react` option set us up instantly to work with React.js. Amazing! Almost as easy as using [create-react-app](https://github.com/facebookincubator/create-react-app).

### Conclusion

Thanks to the Rails core team for this forward-thinking release. If complex setup was preventing you from mixing Ruby on Rails with React.js, consider yourself out of excuses. Happy coding!
