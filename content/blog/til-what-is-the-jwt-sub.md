---
title: 'Today I Learned: What is the JWT sub?'
date: '2021-04-02T14:13:51-0400'
---

As I explore JSON Web Tokens (JWT; pronounced 'jot' if you enjoy correcting
people), I'm learning the rules and testing, much like a Velociraptor, what I
can get away with. Today I learned about the `sub` registered claim.

Registered claims are the fields of the JWT payload that are enumerated in the
spec. Like all claims they must be unique, and they aren't mandatory.

`sub` matches the person who requested the token; i.e.
`"customer@example.com"`. With `sub` we can therefore send an anodyne piece of
user data to the browser without any additional request. So, you can use the
JWT to authenticate, `sub` to show the user their email, and because clients
cannot alter the JWT, you can even use `sub` to look up a user.

[sub](https://tools.ietf.org/html/rfc7519#section-4.1.2) is defined in the spec
as a string. If you need more than a string can provide, you're going to have
to try other claims on the JWT, or more conventionally, a network request.
