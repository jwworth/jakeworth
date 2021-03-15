---
title: 'Week in Review: Week 4, 2015'
date: '2015-01-23T15:57:39-06:00'
---

This week I've been learning more about the Document Object Model, known as the
DOM. I'd like to summarize my thoughts, with the goal of explaining what the
DOM is, why it is relevant today, and why it can seem difficult to understand.
I'd also like to share resources I found informative.

### What is the DOM?

The DOM is a cross-browser, language-independent convention for representing
and manipulating objects in HTML.

When an internet browser receives the HTTP response it needs to build a web
page, it parses that response into a hierarchy known as the DOM tree. This tree
is a series of nodes that represent the nested nature of HTML. From here,
JavaScript can be used to dynamically interact with any node on the tree.

### Why is the DOM relevant?

The DOM is one of the most important features of the modern internet. Anytime a
script is changing elements on a web page, it's referencing the DOM.

The early internet did not feature any of the fast, dynamic content we see
today. Instead, it was a delivery system of static HTML pages from a server to
a client.

Eventually, the demand for dynamic content increased, and software engineers
worked hard to create products to satisfy that demand. The DOM rose from that
era as a way to maintain and represent the state of a user's browser.

In 2015, JavaScript and its frameworks are more popular than ever, suggesting
that the importance of the DOM in web development will only increase.

### Why is the DOM difficult to understand?

In a tech talk at Yahoo in 2006, Douglas Crockford, one of the key architects
of modern JavaScript, one called the DOM a 'vast source of incompatibility,
pain, and misery.'

Few features of the web development stack are more vaguely understood than the
DOM. To understand why, you must consider the history of the DOM.

The DOM was born during the browser wars of the 1990's, as Microsoft and
Netscape battled for market share. Both companies chased users by building more
powerful, feature-rich, proprietary browsers. Standardization would have hurt
both businesses, because a superior version of the DOM was seen as a
competitive advantage. Different standards were developed, maturing separately
for a decade.

Today, the browser market is more fragmented than ever. Luckily, the major
players are working with the W3 to standardize and document the DOM. However, I
think that the legacy of incompatibility and secrecy has given the DOM a
confusing reputation.

### Further Reading

The DOM is a massive subject; here is a short list of related resources I
recommend:

* <em>13/21 JavaScript Fundamentals - Understanding the Document Object
  Model</em> by Bob Taber (available <a
  href='https://www.youtube.com/watch?v=LsY2PsPKckU&feature=youtu.be'>here</a>).
  Consider this short video a starting point.
* <em>An Inconvenient API - The Theory of the DOM</em> by Douglas Crockford
  (available <a href='https://www.youtube.com/watch?v=Y2Y0U-2qJMs'>here</a>).
  This is the 2006 talk at Yahoo! I mentioned above. It is the most
  comprehensive, interesting overview of the subject I found, explained by one
  of the leading authorities on front-end development.
* <em>DOM it, Forgive, Forget, Embrace</em> by Cody Lindley at HTML 5.tx
  (available <a
  href='http://www.confreaks.com/videos/2218-html5tx2013-dom-it-forgive-forget-embrace'>here</a>).
  This talk does a great job explaining the challenges of the DOM, and how they
  can be overcome with today's in-browser development tools.
* <em>HTTP: The Definitive Guide</em> by David Gourley. This book is about
  HTTP, not the DOM, but it is an excellent read. If you have any confusion
  about all of the steps leading up to and supporting DOM manipulation, this is
  for you.

If you are interested in what is possible using the DOM, check out <a
href='http://adarkroom.doublespeakgames.com/'>A Dark Room</a>. Beyond being a
fun throwback, it's a reminder of what can be done exclusively in the browser.

Thanks to all these content providers, and everyone I talked and paired with
this week.
