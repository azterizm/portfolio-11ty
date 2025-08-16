---
layout: layouts/post.njk
title: "Code in JavaScript like a NASA Engineer"
description: "Explore coding guidelines inspired by NASA to write safe, reliable, and maintainable JavaScript/TypeScript code for real-world applications."
date: "2025-06-03"
tags: ["javascript", "typescript", "coding-standards", "software-engineering", "best-practices"]
---
We have all been there where we regretted not following the coding standard and become too flexible when coding a program. Using singleton pattern in one side and classes on the other, no don't quite remember if this function should contain "new" or not. This is result of bad code and having no system at all.

You introduced Typescript and decided to keep things simple like only using functions (functional programming), adding explicit types everywhere, adding return type, using more types and avoiding "any" wherever possible. Is that enough for reliable systems? Is it enough that you are confident where things are when introducing a new feature? Maybe not. We need a way to make our lives easier. 

This article was inspired by NASA Programming Guidelines. You can read them here [NASA Programming Guidelines](https://www.grc.nasa.gov/www/winddocs/guidelines/pgmstds.pdf). I'll be using this knowledge for Typescript and general development.

## The Surface

Following these guidelines would ensure you have code safety and reliability. You might think that following these set of rules is overcomplicating the simple which is true for situations like developing a small software or demo software but not true for developing real world applications. The application that you care about. It's difficult to follow these rules at the start but you will thank yourself later when adding more features. 

It's worth noting about technical debt. Combining pieces together about coding philosophies, one would indicate that writing super good code doesn't matter. The code is flexible thing and requires frequent updates. Moment you write a "perfect" function and then you introduce an update where that function is not needed, if you could predict this moment then you wouldn't spent so much time making this function super good. 

In short, you should not think too much about following the rules. You have to find a sweet spot or balanced version of safety and reliability, exception being where the code might run into spaceships or health care systems where minor error would potentially be disastrous. Most of the time, it's okay to not follow the system. But it's worth knowing how to create such systems and follow them by nature. It's better to get used to them and use them in flow state and not think about them explicitly.

## The Rules

Create a set of rules that you have to follow. Like the following:
1. Functional Programming whenever possible
2. Use object literal for similar functions and using similar property values across those functions.
3. Create modules where file contents are larger
4. Make repeatedly used variables global. 

and much more. You don't have to follow my example, as you might prefer monolith pattern for some reason which is okay. This is a system made by you and thus you will follow it. Also, it's better that rules are NOT more than 10.

Your rules should have clear tradeoffs. Like using functional programming to some extend would make it unable to have same benefits as OOP programming where inheritance and polymorphism is feasible. It's possible in functional programming too but with boilerplate and ugly hacks. 

Write your rules and tradeoffs then refine.

## What we think

You can make better rules if you have been in software development for long enough and have encountered problems, or it could be that you have run into less problems. In both cases, you should learn what patterns or rules may cause these problems. There are good and bad rules to follow. In order for you to write good rules and thus better system, you will have to experience the things that are built deeply where deeply nested modules are introduced and each module's nature is considered to determine expected output. 

In any case, you should read the following to improve your system and add the rules. 

1. Avoid recursions. It causes logic to jump into different places. Also if the recursions are run long enough then memory tends to eat up as addresses are being noted by the compiler for each execution. Thus, do not use recursion, instead use the loop. The loops are created by programming language natively and are optimised to be used consistently. Why complicate things?
2. No infinite loops. The loops should always have an upper bound. There are certainly use cases where infinite loops make sense but you should avoid them as much as you can. The infinite loops that you may create must have a way to exit and such loop should be tested thoroughly to ensure all those exits work as expected. Otherwise, the computer would hang and if your program was the culprit, expect deletion from that and other products.
3. Keep fixed memory limit to use for the program. For example, there are ways in NodeJS to limit the memory usage for the program. You can do that to ensure that program uses less memory, runs on cheaper hardware, and does not go wild at some situation (due to bad logic).
4. Dynamic variables like Map, Set, and Arrays should have bounds. Imagine using such data type to add an item to todolist and do that a million times then wonder why is the program so slow, must be because of incompetent programmer. 
5. Functions should not be longer than an A4 paper. Neither you nor I am gonna be able to read that function with happiness. Use modules with meaningful names and it's much better.
6. Do negative programming whenever possible. It is where you would add at least 2 assertions to the functions for the real world outputs. This way, it's better that program crashes with meaningful than use ambiguous data for further processing and all members in the network get to use that as well.
7. In some cases, you would not use return value of a function. It's better to explicitly explain why you did that. It would ensure better readability and understanding about your decision. 
8. From start, no errors or warnings. Write it down. Check daily with analyser that there are no such error or warnings. It's common for us to ignore warnings. Even there are warnings to freshly scaffolded projects with templates. These are no good in the long term. They pose innocent but they are not. When connecting modules together and getting into the depth when needed, such is regretted to not have ignored that warning.

**Notable libraries to use in JavaScript:** Neverthrow, Biome, Zod, Jest, Playwright, TS Effect

## That's it

There you go with knowledge to build resilient systems. Whether you should build them depends on how much you are paid. Make sure you are paid well to do that or you care that the system should be resilient for your own self. Writing rules and following is no easy but doing them from today and making a habit of it will make it easy for you when coding projects later. You will know how things will turn out if coded in such way. 

In other cases, remember that code has no value. Be prepared that you will erase it soon to replace with something better.
