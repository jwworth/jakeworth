---
title: 'Adding jQuery to Phoenix'
date: '2017-01-05T21:31:17-06:00'
---

We've been building a Phoenix application lately; here's the [backstory](/porting-til-to-phoenix-initial-commits).

Today I stared porting the *Sprinkles of JavaScript*™ to our ongoing Phoenix port, which is now [alive](https://github.com/hashrocket/tilex). Some of that legacy JavaScript code required jQuery, so I needed to figure out how to get that library into the project.

Here are the steps I took.

### Setup

Add jQuery as a dependency to your `package.json`.

```javascript
// package.json

"dependencies": {
  "jquery": ">= 2.1"
}
```

Install and save with:

```
$ npm intstall --save
```

Next, expose jQuery globally:

```javascript
// brunch-config.js

npm: {
  enabled: true,
  globals: {
    $: 'jquery',
    jQuery: 'jquery'
},
```

Finally, import your `$` into the application assets, above any other imported JavaScript that may use it:

```javascript
// web/static/js/app.js

import $ from "jquery"
```

### Conclusion

That's it! Enjoy jQuery in your Phoenix application. Here's the [commit](https://github.com/hashrocket/tilex/commit/57f1b94a2a1f632ad6e39bac519054efbc1edfad) where I made these changes, and the relevant [Phoenix Docs](http://www.phoenixframework.org/docs/static-assets).
