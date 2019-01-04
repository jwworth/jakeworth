---
title: 'Week 49'
date: '2014-12-05T14:36:17-06:00'
---

This week was awesome.  I learned every day and hope to bring some new ideas to my work.  A recurring theme was testing; some notes:

#### TDD - Helpful When Stuck

My respect for test-driven development grew a lot this week.  Watching part of an outstanding Jim Weirich talk, <a href='https://www.youtube.com/watch?v=983zk0eqYLY'>Roman Numerals Kata</a>, reminded me of the value of TDD.  My prescription for TDD success:

<em>Just start writing the tests.</em>

Write the tests, even when you are stuck.  I think people abandon TDD when staring at a blank screen, but that is when TDD is awesome.

Imagine you want a table showing some complex calculations, but you have no idea where to start. You can begin by writing an integration test.  Let's say you write a Cucumber feature that expects a certain number on the page.  Instead of trying to think all the way through to the working production code, just start writing the test.  Watch it fail.

The failure will guide you to defining the feature steps.  Again, instead of thinking about the goal, just write those steps.  Run the test again and allow it to fail.

The new failure will guide you again; the number you expect to be on the page is not there.  Now, here's the trick: instead of trying to immediately build a finished Rails table, <em>write the most naive code necessary to make the test pass</em>.  Don't build a method; just fill the table with some ignorant data that makes the test green.

What's the point?  The point is to validate all of the plumbing underneath, and that our test is hitting the view.  It builds confidence in the test.

From here you can add more test cases until the test is failing again.  This is called 'good red' and should be celebrated.  'Good red' gives us a path to building a working, tested model method that does what it's supposed to.

TDD can be vital when you are staring at a blank screen.

#### Cucumber Does Not Distinguish Given-When-Then

A sample Cucumber feature:

```ruby
Scenario: Describe the scenario
  Given one thing
  Given another thing
  When I open the window
  Then I should see something
  And I should see something else
```

The words 'given', 'when', 'then', and 'and' give us context, and you might think they are meaningful to Cucumber.  They aren't.  Cucumber does not distinguish between them at all.

<a href='https://github.com/cucumber/cucumber/wiki/Given-When-Then'>Cucumber's Given When Then</a> explains this well.  My explanation is these words exist to allow readable pseudocode, understandable by we humans.  At the time of this writing Cucumber supports multiple languages for the keywords, including English, Japanese, Arabic, and Pirate.

As to the actual meaning of the words, Cucumber doesn't care.

#### Testing is Vast

Testing is vast. It is a big enough subject to support entire careers in programming.

This week I listened to a talk about testing native Android apps, which is both difficult (thousands of devices multiplied by many OS releases) and not always cheap.  I learned about generative testing, a feature of Clojure that attempts to identify edge cases that would cause a method to fail.  I listened to a discussion about integration testing versus unit testing.  I enjoyed a talk about Ember and some of the test tools being developed there.

My conclusion is that testing is a massive subject.  It's bigger than any 'best practice', opinion, or sound bite.  There is a universe of tools and techniques, and finding the right combination for your project is an art.

Test on!