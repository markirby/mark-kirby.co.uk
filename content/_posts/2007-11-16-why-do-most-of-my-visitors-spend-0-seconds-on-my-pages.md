---
title: Why google analytics average times metrics are nonsense
author: Mark Kirby
layout: post
date: 2007-11-16
url: /2007/why-do-most-of-my-visitors-spend-0-seconds-on-my-pages/
dsq_thread_id:
  - 1086898494
categories:
  - post
---
Average time on pages and average time on site are popular metrics, used in Google Analytics and other software. I use it to see how long people spend on my pages, and my site. I was disappointed to see most people spend 0 seconds on my pages. These same people tend to visit only one page. Today I realised that connection was not a coincidence, and that the metric average time on page is nonsense.

Google analytics and other javascript analytics software works like this:

  * Person loads page, message is sent to the analytics server saying person loaded page.
  * Person goes to another page on your site, message is sent to the server saying person loaded another page.

When someone leaves your site there is no message sent. The analytics server has no idea.

So how do they measure how long someone spends on a page?

Easy, person loads page, time is recorded. Person loads another page, time is recorded. Difference between the times = time spent on the first page.

So what about when someone leaves the site? Server does not know how long someone spent on the previous page, so time spent is measured as 0 seconds.

This means analytics software does not measure the time spent on the last page a user sees, and if the user only visits one page on your site nothing is measured either.

In google analytics, average time on site and page is calculated based on ALL visitors to your site regardless of whether the time was recorded or not.

So if 1000 people visit one page for 2 mins and then leave, and 500 visit one page for 4 mins and then another, only the time for the 500 is recorded, but the average is based on all 1500. Heres the math:

Average time on site = total time on site / number of visitors.

Total time on site (only the 500 are counted) = 500 x 4 = 2000 mins

Googles incorrect average time on site = 2000/1500 = 1.3 min.

Average time on site (based on the data google has, if it calculated properly) should be 2000/500 = 4 mins

And if google could know about everyone the average time on the site would be 4000/1500 = 2.6 mins

So &#8211; why doesn&#8217;t google fix this? Well, [they did][1] but people complained so they put it back. As a result, you can forget about your average times as being a reliable statistic.

There&#8217;s more on this at <http://imediaconnection.com/content/16342.asp>

 [1]: http://analytics.blogspot.com/2007/09/reverting-back-to-original-average-time.html