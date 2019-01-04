---
title: 'Gold Master Testing: An Introduction'
date: '2016-10-26T10:33:36-05:00'
---

I've been researching, thinking about, and preparing to write a Gold Master test recently. Here's an overview of the technique:

http://blog.codeclimate.com/blog/2014/02/20/gold-master-testing/

Basically, the idea is that you write a unit test that takes a known set of data (for instance, a production dump), feeds it into your program, and compares the output with a checked-in version of a known good output. If there are differences, you can review them; if they are valid, check in the new output file. If not, you'll be alerted that the program's behavior has changed.

The ideal use case for this technique would be a complex legacy app with lots of inputs and lots of outputs.

The potential downsides are that it would be a slow-ish test compared to the other unit tests, and it would register regular false positives. In some cases, the transparency gained could certainly justify these tradeoffs.

*Edit: This turned into a post on the Hashrocket blog, available [here](https://hashrocket.com/blog/posts/gold-master-testing).*