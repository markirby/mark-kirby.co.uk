---
title: Comments are evil
author: Mark Kirby
layout: post
date: 2009-08-21
url: /2009/comments-are-evil/
dsq_thread_id:
  - 1086898405
categories:
  - post
---
I've just finished listening to an [interesting episode][1] of the [Deep Fried Bytes podcast][2] entitled in part 'Why comments are evil&#8221;. In this episode the guest, [Corey Haines][3] (a traveling programmer [living an interesting life][4] which warrants discussion in itself), explains why he believes comments shouldn't be the recommended practice they are often considered, and can be easily abused. Here's a quick summary of his reasoning:

Comments are often used to explain poorly written code

* If you need to explain your code by adding comments inside methods, the method is doing too many things and needs to be broken into smaller methods
* The name of the method should accurately convey what the method is doing to a reader, no comments should be required

Comments rot

* When code is updated, comments don't always get updated alongside it
* The comments end up lying about what the code is doing

In summary:

* Write better code
* Use highly descriptive method names and parameter names
* Where you feel a comment is needed, instead take the time to rewrite and refactor the code to be more readable

## My thoughts

The timing of this couldn't have been better for me. I'd spent the day working on the code for the [memory efficient data list][5] I discussed last week. I had just created 3 functions which each did around 8 different task, broken up by comments explaining what each did. Each task was only 3 - 6 lines of code, so it wasn't an obscenely long method, but I still wasn't sure whether to refactor or move on. After listening to the podcast I took their advice of never leaving this until later and refactored the next day.

The result:

* once the code had been refactored into different methods, I was able to see clearly where methods could be combined, reducing the amount of code
* now I had more readable code, I realised some of these new methods really belonged in another class
* so the code was shorter, easier to read, and the comments were gone
* finally, I spotted a bug as it was now really exposed and obvious

Now I plan to impose a new coding 'rule' - no comments within methods.

What about comments above public methods, and at the head of classes? The podcast touched on these, saying you might want them for a framework, or for API documentation, although you shouldn't use them in an auto doc style whereby you just replicate parameter names in comments. I have mixed thoughts on this. I agree that it seems pointless to describe well named methods and well named parameters twice, although it can be useful to detail restrictions on parameters for API documentation. I'd then like to use an automatic tool to produce this documentation to be kept from the code. Also descriptions at the head of certain classes can help explain where, when and how to use the class.

I guess my final thought is to use discretion.

Any thoughts?

 [1]: http://deepfriedbytes.com/podcast/episode-35-why-comments-are-evil-and-pair-programming-with-corey-haines/
 [2]: http://deepfriedbytes.com/
 [3]: http://www.coreyhaines.com/
 [4]: http://programmingtour.blogspot.com/
 [5]: /2009/optimising-visual-components-for-flash-mobile/