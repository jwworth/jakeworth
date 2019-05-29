---
title: 'Neural Networking for Complete Sentences'
date: '2019-05-19T09:09:49-06:00'
---

This week I wrote a bit of neural networking code for the first time. It
utilizes [Brain.js](https://github.com/BrainJS/brain.js) to try and recognize
if a sentence is grammatically complete.

Here's my code.

```javascript
const net = new brain.recurrent.LSTM()

net.train([
  { input: "Hello, I'm John Walker.", output: 'complete' },
  { input: 'This is on you!', output: 'complete' },
  { input: 'John kik', output: 'incomplete' },
  { input: 'This is', output: 'incomplete' },
  { input: 'Great job.', output: 'complete' },
  { input: 'When I hear a', output: 'incomplete' },
])
```

What's going on here? First, I instantiate an instance of Brain's LSTM (Long
Short-Term Memory). Then, I train it on a collection of sentences, telling the
system if each is complete or incomplete. Even six examples is computationally
expensive on a new iMac.

Here's the output:

```
> net.run("I'm Stil.");
"incomplete"
> net.run("Great job!")
"complete"
```

It works for these examples, and fails for others. Why? Too small a dataset
certainly. My solution was mostly a bit of hacking to answer this Stack Overflow
question:

[Brain js NaN](https://stackoverflow.com/questions/56191600/brain-js-nan-when-predicting-is-a-combination-of-words-is-a-complete-sentence/56193689#56193689)

I'd like to explore neural networking in the future, when there's a practical
application driving me toward it.
