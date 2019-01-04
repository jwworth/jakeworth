---
title: 'I'm a Rustacean'
date: '2015-11-06T15:53:11-06:00'
---

Today I wrote my first program in the Rust language. It's a simple coin toss game.

The source code is here:

https://github.com/jwworth/coin_toss

The game prompts you for a binary integer input, ignores non-integers, and continues until you win the game.

Things I like about Rust so far:

* It's statically typed with type inference
* It's compiled (catches my mistakes)
* Good docs
* [Cargo](http://doc.crates.io/) package manager. Manages dependencies + complies and runs code
* Seems fast

Next I'd like to port my Markov engine to Rust. I expect such a program will be very performant relative to Ruby.