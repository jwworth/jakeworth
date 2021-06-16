---
title: 'Round Robin Problem in Lua'
date: '2016-03-06T18:20:36-06:00'
tags:
  - lua
---

A while ago, I solved the following programming challenge:


> Round Robin: Given 3 Teams (A, B, C), we want to organize a tournament schedule such that every team plays every other team exactly once. Here is a valid schedule for these 3 teams:
>
> A - B
>
> B - C
>
> A - C
>
> How about if we have N teams? Devise a general purpose algorithm that generates tournament schedules for N teams.

My solution is below.

This was the first program I ever wrote in Lua, so it's tough to constructively criticize it. I was (and am) still in the 'it works, ship it' phase with this language.

That said, I like that it's a reusable, functional method with no side effects. I like that it has opinions about the scope of each variable. I like that is presents the output in a readable way.

I'm not a huge fan of how my solution telegraphs my implementation. Because of how it's written, the output doesn't resemble an actual schedule in any way. Though beyond the scope of this assignment, that wouldn't be good enough for production code.

```lua
function round_robin(...)
  local teams = {...}
  local count = 0

  while #teams > 1 do
    for i = 1, #teams - 1 do
      print(teams[1] .. ' vs. ' .. teams[i + 1])
      count = count + 1
    end
    table.remove(teams, 1)
  end
  print(count .. " games\n")
end

round_robin('Denver', 'New England')
round_robin('Denver', 'New England', 'Jacksonville')
round_robin('Denver', 'New England', 'Jacksonville', 'Green Bay', 'San Diego')

-- Denver vs. New England
-- 1 games

-- Denver vs. New England
-- Denver vs. Jacksonville
-- New England vs. Jacksonville
-- 3 games

-- Denver vs. New England
-- Denver vs. Jacksonville
-- Denver vs. Green Bay
-- Denver vs. San Diego
-- New England vs. Jacksonville
-- New England vs. Green Bay
-- New England vs. San Diego
-- Jacksonville vs. Green Bay
-- Jacksonville vs. San Diego
-- Green Bay vs. San Diego
-- 10 games
```

https://gist.github.com/jwworth/5b9d80f514a15efc780d

Thanks Josh Branchaud for posting this challenge.
