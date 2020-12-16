---
title: 'Exercism Raindrops in Python'
date: '2020-12-06T00:00:00-06:00'
---

I've been learning a bit of Python this Fall to facilitate conversations with a
mentee. In this post, I'm going to share the first Python function I've ever
written, a solution to the [Exercism](https://exercism.io) challenge
'Raindrops'.

Is this good Python code? I don't know; that's why I'm posting it here. I've
read `$ python3 -c 'import this'` but I still feel gloriously ignorant. Below
I'll share the problem description, my solution, and a code review via praise
and criticism.

### Problem Description

Via Exercism:

Your task is to convert a number into a string that contains raindrop sounds
corresponding to certain potential factors. A factor is a number that evenly
divides into another number, leaving no remainder. The simplest way to test if
a one number is a factor of another is to use the [modulo
operation](https://en.wikipedia.org/wiki/Modulo_operation).

The rules of `raindrops` are that if a given number:

- has 3 as a factor, add 'Pling' to the result.
- has 5 as a factor, add 'Plang' to the result.
- has 7 as a factor, add 'Plong' to the result.
- _does not_ have any of 3, 5, or 7 as a factor, the result should be the digits of the number.

### My Solution

```python
def convert(number):
    result = str(number) + " "
    if number % 3 == 0:
        result += "Pling"

    if number % 5 == 0:
        result += "Plang"

    if number % 7 == 0:
        result += "Plong"

    return result.split()[-1]
```

### Praise

I like that this solution is compilable Python code (starting with a low bar
here). I think the solution is very readable. My return statement is a bit
clever; it's a take on this solution I've never thought of before, and I
love that novelty.

### Criticism

I don't like that my function argument is called `number`; I took that from the
setup code but I prefer to avoid argument names that overlap with their type.
In this case, the input really is a meaningless number, so I'm not sure what a
better alternative would be.

I try to avoid conditionals and there are three here. I'd prefer a data
structure that we can fetch from whenever possible. For the sake of speed and
simplicity, I didn't go that route, but I am sure that I will as I get more
comfortable with Python.

As mentioned in the previous section, `return result.split()[-1]` is clever, in
both meanings for the word. I can imagine someone who is newer to string
manipulation struggling with that a bit. It isn't the most beginner-friendly code
I've ever written.

### Conclusion

I hope this beginner Python code was entertaining to someone. It lives online at
[this
permalink](https://exercism.io/my/solutions/421da5164eab459ab9a25d2560312a46).
