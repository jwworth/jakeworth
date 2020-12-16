---
title: 'Pangram in TypeScript'
date: '2019-07-29T02:54:43-05:00'
---

I've been doing Exercism's TypeScript exercises, and wanted to share some of my
early solutions.

A pangram is a sentence that contains each of the 26 English letters at least
once. Here's my TypeScript class to determine if a sentence is a pangram.


```typescript
class Pangram {
  input: string;

  constructor(input: string) {
    this.input = input.toLowerCase();
  }

  isPangram(): boolean {
    const letters = this.input.replace(/[^a-z]/g, '');
    return new Set(letters).size === 26;
  }
}

export default Pangram;
```

`isPangram/0` does the work: replacing all characters not `a-z` with empty
strings (the sentence is already lowercase), breaking the string apart via
`new Set`, and comparing the size to 26. 26 is a borderline magical number, but it's
such a famous one in the English language that I think I get away with it.
